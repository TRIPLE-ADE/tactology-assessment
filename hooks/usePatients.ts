import { useEffect, useCallback, useMemo } from 'react';
import { usePatientsStore } from '@/store/usePatientsStore';
import { useDebounce } from './useDebounce';
import { useBottomSheet } from './useBottomSheet';
import { Patient } from '@/types';

export function usePatients() {
  const {
    patients,
    filteredPatients,
    activeTab,
    searchQuery,
    isLoading,
    error,
    expandedPatientId,
    selectedPatient,
    fetchPatients,
    setActiveTab,
    setSearchQuery,
    setExpandedPatient,
    setSelectedPatient,
    filterPatients,
  } = usePatientsStore();

  const bottomSheet = useBottomSheet();
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  useEffect(() => {
    filterPatients();
  }, [debouncedSearchQuery, activeTab, filterPatients]);

  useEffect(() => {
    if (selectedPatient) {
      bottomSheet.open();
    }
  }, [selectedPatient, bottomSheet]);

  const handlePatientPress = useCallback(
    (patientId: string) => {
      setExpandedPatient(patientId);
    },
    [setExpandedPatient]
  );

  const handleViewProfile = useCallback((patient: Patient) => {
    console.log('View profile:', patient.id);
    // TODO: Navigate to profile screen
  }, []);

  const handleViewNotes = useCallback(
    (patient: Patient) => {
      setSelectedPatient(patient);
    },
    [setSelectedPatient]
  );

  const handleCloseSheet = useCallback(() => {
    setSelectedPatient(null);
  }, [setSelectedPatient]);

  const handleRefresh = useCallback(async () => {
    await fetchPatients();
  }, [fetchPatients]);

  const isEmpty = useMemo(
    () => filteredPatients.length === 0 && !isLoading && !error,
    [filteredPatients.length, isLoading, error]
  );

  const hasError = useMemo(() => !!error && !isLoading, [error, isLoading]);

  return {
    // State
    patients,
    filteredPatients,
    activeTab,
    searchQuery,
    isLoading,
    error,
    expandedPatientId,
    selectedPatient,
    isEmpty,
    hasError,

    // Actions
    setActiveTab,
    setSearchQuery,
    handlePatientPress,
    handleViewProfile,
    handleViewNotes,
    handleCloseSheet,
    handleRefresh,
    fetchPatients,

    // Bottom sheet
    bottomSheetRef: bottomSheet.ref,
  };
}
