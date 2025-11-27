import React, { useCallback } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { usePatients, useRefresh } from '@/hooks';
import { Text, SearchBar, TabFilter, LoadingState, ErrorState, EmptyState } from '@/components/ui';
import { PatientCard, ConsultationNotesSheet } from '@/components/patients';
import { Patient, PatientFilterTab } from '@/types';

const tabs: { key: PatientFilterTab; label: string }[] = [
  { key: 'all', label: 'All patients' },
  { key: 'active', label: 'Active' },
  { key: 'pending', label: 'Pending' },
  { key: 'past', label: 'Past' },
];

export default function PatientsScreen() {
  const {
    filteredPatients,
    activeTab,
    searchQuery,
    isLoading,
    error,
    expandedPatientId,
    selectedPatient,
    isEmpty,
    hasError,
    setActiveTab,
    setSearchQuery,
    handlePatientPress,
    handleViewProfile,
    handleViewNotes,
    handleCloseSheet,
    handleRefresh,
    fetchPatients,
    bottomSheetRef,
  } = usePatients();

  const { refreshing, onRefresh } = useRefresh(handleRefresh);

  const handleTabChange = useCallback(
    (tab: PatientFilterTab) => {
      Keyboard.dismiss();
      setActiveTab(tab);
    },
    [setActiveTab]
  );

  const renderPatient = useCallback(
    ({ item }: { item: Patient }) => (
      <PatientCard
        patient={item}
        isExpanded={expandedPatientId === item.id}
        onPress={() => handlePatientPress(item.id)}
        onViewProfile={() => handleViewProfile(item)}
        onViewNotes={() => handleViewNotes(item)}
      />
    ),
    [expandedPatientId, handlePatientPress, handleViewProfile, handleViewNotes]
  );

  const ListHeader = () => (
    <>
      <View className="py-4">
        <Text variant="h1" className="text-center">
          Patients
        </Text>
      </View>

      <TabFilter tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      <View className="py-4">
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search by patient"
        />
      </View>
    </>
  );

  const ListEmpty = () => {
    if (isLoading && !refreshing) {
      return <LoadingState message="Loading patients..." />;
    }

    if (hasError) {
      return <ErrorState message={error!} onRetry={fetchPatients} />;
    }

    return (
      <EmptyState
        icon="people-outline"
        title="No patients found"
        message={
          searchQuery ? `No patients match "${searchQuery}"` : 'No patients in this category'
        }
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['top']}>
      <ListHeader />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
        <FlatList
          data={filteredPatients}
          keyExtractor={(item) => item.id}
          renderItem={renderPatient}
          ListEmptyComponent={isEmpty || isLoading || hasError ? ListEmpty : null}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          contentContainerStyle={{ paddingBottom: 20 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#14B8A6"
              colors={['#14B8A6']}
            />
          }
        />
      </KeyboardAvoidingView>

      <ConsultationNotesSheet
        ref={bottomSheetRef}
        patient={selectedPatient}
        onClose={handleCloseSheet}
      />
    </SafeAreaView>
  );
}
