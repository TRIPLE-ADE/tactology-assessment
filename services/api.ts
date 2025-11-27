import { Patient } from '../types';

const mockPatients: Patient[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    gender: 'Male',
    age: 35,
    phone: '(319) 555-0115',
    email: 'smith.johnny@gmail.com',
    status: 'active',
    lastAppointment: '26-11-2024',
    upcomingAppointment: '31-11-2024',
    consultationNotes: [
      {
        id: '1',
        title: 'Getting better',
        description:
          'Patient reports improved glucose control. A1C decreased from 7.2 to 6.8. Maintaining current medication regimen. Encouraged continued dietary compliance and regular exercise.',
        date: '26-11-2024',
      },
      {
        id: '2',
        title: 'Getting better',
        description:
          'Patient reports improved glucose control. A1C decreased from 7.2 to 6.8. Maintaining current medication regimen. Encouraged continued dietary compliance and regular exercise.',
        date: '26-5-2024',
      },
    ],
  },
  {
    id: '2',
    firstName: 'Leslie',
    lastName: 'Alexander',
    gender: 'Male',
    age: 35,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    phone: '(555) 123-4567',
    email: 'leslie.alex@gmail.com',
    status: 'active',
    lastAppointment: '20-11-2024',
    upcomingAppointment: '28-11-2024',
    consultationNotes: [
      {
        id: '1',
        title: 'Routine checkup',
        description:
          'Patient in good health. Blood pressure normal. Recommended continued exercise routine.',
        date: '20-11-2024',
      },
    ],
  },
  {
    id: '3',
    firstName: 'Savannah',
    lastName: 'Nguyen',
    gender: 'Male',
    age: 35,
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    phone: '(555) 234-5678',
    email: 'savannah.n@gmail.com',
    status: 'pending',
    lastAppointment: '15-11-2024',
    upcomingAppointment: null,
    consultationNotes: [],
  },
  {
    id: '4',
    firstName: 'Kathryn',
    lastName: 'Murphy',
    gender: 'Female',
    age: 35,
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    phone: '(555) 345-6789',
    email: 'kathryn.murphy@gmail.com',
    status: 'active',
    lastAppointment: '10-11-2024',
    upcomingAppointment: '29-11-2024',
    consultationNotes: [
      {
        id: '1',
        title: 'Follow-up visit',
        description:
          'Patient recovery progressing well after minor surgery. Wound healing normally.',
        date: '10-11-2024',
      },
    ],
  },
  {
    id: '5',
    firstName: 'Theresa',
    lastName: 'Webb',
    gender: 'Female',
    age: 35,
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    phone: '(555) 456-7890',
    email: 'theresa.webb@gmail.com',
    status: 'past',
    lastAppointment: '01-10-2024',
    upcomingAppointment: null,
    consultationNotes: [
      {
        id: '1',
        title: 'Treatment completed',
        description:
          'Patient has completed the full course of treatment. No further appointments needed.',
        date: '01-10-2024',
      },
    ],
  },
  {
    id: '6',
    firstName: 'Robert',
    lastName: 'Johnson',
    gender: 'Male',
    age: 42,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    phone: '(555) 567-8901',
    email: 'robert.j@gmail.com',
    status: 'pending',
    lastAppointment: null,
    upcomingAppointment: '02-12-2024',
    consultationNotes: [],
  },
  {
    id: '7',
    firstName: 'Emily',
    lastName: 'Davis',
    gender: 'Female',
    age: 28,
    avatar:
      'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
    phone: '(555) 678-9012',
    email: 'emily.davis@gmail.com',
    status: 'past',
    lastAppointment: '15-09-2024',
    upcomingAppointment: null,
    consultationNotes: [
      {
        id: '1',
        title: 'Final consultation',
        description:
          'Patient discharged after successful treatment. Follow-up recommended in 6 months.',
        date: '15-09-2024',
      },
    ],
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API functions
export const fetchPatientsAPI = async (): Promise<Patient[]> => {
  await delay(800);
  return mockPatients;
};

export const fetchPatientByIdAPI = async (id: string): Promise<Patient | null> => {
  await delay(500);

  const patient = mockPatients.find((p) => p.id === id);
  return patient || null;
};

export const searchPatientsAPI = async (query: string): Promise<Patient[]> => {
  await delay(300);

  const lowerQuery = query.toLowerCase();
  return mockPatients.filter(
    (patient) =>
      patient.firstName.toLowerCase().includes(lowerQuery) ||
      patient.lastName.toLowerCase().includes(lowerQuery) ||
      `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(lowerQuery)
  );
};
