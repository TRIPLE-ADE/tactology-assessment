// Patient related types
export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  gender: 'Male' | 'Female' | 'Other';
  age: number;
  avatar?: string;
  phone: string;
  email: string;
  status: 'active' | 'pending' | 'past';
  lastAppointment: string | null;
  upcomingAppointment: string | null;
  consultationNotes: ConsultationNote[];
}

export interface ConsultationNote {
  id: string;
  title: string;
  description: string;
  date: string;
}

// Tab filter types
export type PatientFilterTab = 'all' | 'active' | 'pending' | 'past';

// Store types
export interface PatientsState {
  patients: Patient[];
  filteredPatients: Patient[];
  selectedPatient: Patient | null;
  expandedPatientId: string | null;
  activeTab: PatientFilterTab;
  searchQuery: string;
  isLoading: boolean;
  error: string | null;
  showConsultationNotes: boolean;

  // Actions
  fetchPatients: () => Promise<void>;
  setActiveTab: (tab: PatientFilterTab) => void;
  setSearchQuery: (query: string) => void;
  setExpandedPatient: (patientId: string | null) => void;
  setSelectedPatient: (patient: Patient | null) => void;
  setShowConsultationNotes: (show: boolean) => void;
  filterPatients: () => void;
}
