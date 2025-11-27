import { create } from 'zustand';
import { PatientsState, PatientFilterTab, Patient } from '../types';
import { fetchPatientsAPI } from '../services/api';

export const usePatientsStore = create<PatientsState>((set, get) => ({
  patients: [],
  filteredPatients: [],
  selectedPatient: null,
  expandedPatientId: null,
  activeTab: 'all',
  searchQuery: '',
  isLoading: false,
  error: null,
  showConsultationNotes: false,

  fetchPatients: async () => {
    set({ isLoading: true, error: null });

    try {
      const patients = await fetchPatientsAPI();
      set({ patients, isLoading: false });
      get().filterPatients();
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'An error occurred',
        isLoading: false,
      });
    }
  },

  setActiveTab: (tab: PatientFilterTab) => {
    set({ activeTab: tab });
    get().filterPatients();
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().filterPatients();
  },

  setExpandedPatient: (patientId: string | null) => {
    const { expandedPatientId } = get();
    // Toggle if clicking same patient
    if (expandedPatientId === patientId) {
      set({ expandedPatientId: null });
    } else {
      set({ expandedPatientId: patientId });
    }
  },

  setSelectedPatient: (patient: Patient | null) => {
    set({ selectedPatient: patient });
  },

  setShowConsultationNotes: (show: boolean) => {
    set({ showConsultationNotes: show });
  },

  filterPatients: () => {
    const { patients, activeTab, searchQuery } = get();

    let filtered = [...patients];

    // Filter by tab
    if (activeTab !== 'all') {
      filtered = filtered.filter((patient) => patient.status === activeTab);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (patient) =>
          patient.firstName.toLowerCase().includes(lowerQuery) ||
          patient.lastName.toLowerCase().includes(lowerQuery) ||
          `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(lowerQuery)
      );
    }

    set({ filteredPatients: filtered });
  },
}));
