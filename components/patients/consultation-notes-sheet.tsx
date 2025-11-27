import React, { useCallback, useMemo, forwardRef } from 'react';
import { View, ListRenderItem } from 'react-native';
import { BottomSheetModal, BottomSheetBackdrop, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { Patient, ConsultationNote } from '@/types';
import { Text } from '@/components/ui';
import { ConsultationNoteCard } from './consultation-note-card';

interface ConsultationNotesSheetProps {
  patient: Patient | null;
  onClose: () => void;
}

export const ConsultationNotesSheet = forwardRef<BottomSheetModal, ConsultationNotesSheetProps>(
  function ConsultationNotesSheetInner({ patient, onClose }, ref) {
    const snapPoints = useMemo(() => ['65%'], []);
    const notes = patient?.consultationNotes ?? [];

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={0.5}
          pressBehavior="close"
        />
      ),
      []
    );

    const handleViewFullNote = useCallback((noteId: string) => {
      console.log('View full note:', noteId);
    }, []);

    const renderNoteItem: ListRenderItem<ConsultationNote> = useCallback(
      ({ item }) => (
        <ConsultationNoteCard note={item} onViewFull={() => handleViewFullNote(item.id)} />
      ),
      [handleViewFullNote]
    );

    const ListEmptyComponent = useCallback(
      () => (
        <View className="items-center py-12">
          <Text variant="body" color="muted">
            {patient ? 'No consultation notes available' : 'Select a patient to view notes'}
          </Text>
        </View>
      ),
      [patient]
    );

    const ListHeaderComponent = useCallback(
      () => (
        <View className="mb-2 items-center border-b border-border-light pb-4">
          <Text variant="h2">Consultation notes</Text>
        </View>
      ),
      []
    );

    const flatListContent = (
      <BottomSheetFlatList
        data={notes}
        keyExtractor={(item: ConsultationNote) => item.id}
        renderItem={renderNoteItem}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 40,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      />
    );

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        enablePanDownToClose
        enableDynamicSizing={false}
        backdropComponent={renderBackdrop}
        onDismiss={onClose}
        handleIndicatorStyle={{
          backgroundColor: '#E5E7EB',
          width: 40,
        }}
        backgroundStyle={{
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
        children={flatListContent}
      />
    );
  }
);

ConsultationNotesSheet.displayName = 'ConsultationNotesSheet';
