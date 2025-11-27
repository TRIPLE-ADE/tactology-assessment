# TGlobal Healthcare App

A React Native mobile application for managing patients and consultation notes, built with Expo and NativeWind (Tailwind CSS).

## How to Run

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd tactology
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Run on your preferred platform:

```bash
# iOS
npm run ios

# Android
npm run android

# Web (for quick preview)
npm run web
```

## Libraries Used

| Library                    | Purpose                               |
| -------------------------- | ------------------------------------- |
| `expo`                     | Development platform and build tools  |
| `expo-router`              | File-based routing for navigation     |
| `react-native-reanimated`  | Smooth animations and transitions     |
| `zustand`                  | Lightweight state management          |
| `@expo/vector-icons`       | Icon library (Ionicons)               |
| `nativewind`               | Tailwind CSS for React Native styling |
| `@gorhom/bottom-sheet`     | Bottom sheet component                |
| `class-variance-authority` | Variant-based component styling       |
| `clsx` + `tailwind-merge`  | Class name utilities                  |

## Architecture & Folder Structure

```
├── app/                          # Expo Router screens
│   ├── (tabs)/                   # Tab navigation screens
│   │   ├── _layout.tsx          # Tab navigator configuration
│   │   ├── index.tsx            # Home screen
│   │   ├── patients.tsx         # Patients screen (main feature)
│   │   ├── schedule.tsx         # Schedule screen
│   │   ├── records.tsx          # Records screen
│   │   └── profile.tsx          # Profile screen
│   ├── _layout.tsx              # Root layout
│   └── global.css               # Global Tailwind styles
│
├── components/                   # Reusable UI components
│   ├── ui/                      # Generic UI components
│   │   ├── Typography.tsx       # Text component with CVA variants
│   │   ├── Avatar.tsx           # Profile picture with CVA
│   │   ├── Button.tsx           # Button with CVA variants
│   │   ├── SearchBar.tsx        # Search input
│   │   ├── TabFilter.tsx        # Tab filter with underline style
│   │   ├── AppointmentBadge.tsx # Appointment date badge with CVA
│   │   ├── InfoRow.tsx          # Icon + text row
│   │   ├── LoadingState.tsx     # Loading spinner
│   │   ├── EmptyState.tsx       # Empty data state
│   │   ├── ErrorState.tsx       # Error state with retry
│   │   └── index.ts             # Barrel export
│   │
│   └── patients/                # Patient-specific components
│       ├── PatientCard.tsx      # Expandable patient card
│       ├── ConsultationNoteCard.tsx
│       ├── ConsultationNotesSheet.tsx  # Using @gorhom/bottom-sheet
│       └── index.ts
│
├── lib/                         # Utilities
│   └── utils.ts                 # cn() utility function
│
├── services/                    # API and services
│   └── api.ts                   # Mock API with patient data
│
├── store/                       # State management
│   └── usePatientsStore.ts      # Zustand store for patients
│
├── types/                       # TypeScript definitions
│   └── index.ts                 # All app types
│
├── tailwind.config.js           # Tailwind/NativeWind configuration
│
└── assets/                      # Static assets
```

## Key Architectural Decisions

### 1. Styling with NativeWind + CVA

- All components use Tailwind classes via `className` prop
- `class-variance-authority` (CVA) for variant-based component styling
- `cn()` utility for conditional class merging (clsx + tailwind-merge)
- Custom colors defined in `tailwind.config.js`

### 2. Component Variants with CVA

Example of CVA usage:

```tsx
const buttonVariants = cva('items-center justify-center rounded-full', {
  variants: {
    variant: {
      primary: 'bg-primary',
      outline: 'bg-white border border-primary',
    },
    size: {
      sm: 'py-2 px-4',
      md: 'py-3 px-6',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
```

### 3. Bottom Sheet with @gorhom/bottom-sheet

- Native performance bottom sheet
- Snap points for consistent heights
- Backdrop with touch-to-dismiss
- Gesture-based interactions

### 4. State Management with Zustand

Chose Zustand for its simplicity and minimal boilerplate. The store manages:

- Patient list and filtered results
- Active tab and search query
- Expanded patient state
- Selected patient for bottom sheet

### 5. Design System Colors (Teal Theme)

```js
colors: {
  primary: '#14B8A6',     // Teal
  text: {
    primary: '#111827',
    secondary: '#6B7280',
    muted: '#9CA3AF',
  },
  border: '#E5E7EB',
}
```

## Features Implemented

- [x] Patient list with avatar, name, gender, and age
- [x] Tab filtering (All patients, Active, Pending, Past)
- [x] Search functionality
- [x] Expandable patient cards
- [x] Contact information display (phone, email)
- [x] Appointment badges (Last/Upcoming)
- [x] Consultation notes bottom sheet
- [x] Loading, empty, and error states
- [x] Bottom tab navigation (Home, Patients, Schedule, Records, Profile)
- [x] iOS and Android compatible

## UI Components with CVA Variants

| Component          | Variants                                                             |
| ------------------ | -------------------------------------------------------------------- |
| `Typography`       | variant (h1, h2, h3, body, bodySmall, caption, label), weight, color |
| `Avatar`           | size (sm, md, lg)                                                    |
| `Button`           | variant (primary, outline, secondary, ghost), size (sm, md, lg)      |
| `AppointmentBadge` | type (last, upcoming)                                                |

## Edge Cases Handled

- **Loading State**: Shows spinner while fetching data
- **Empty State**: Displays message when no patients match criteria
- **Error State**: Shows error message with retry button
- **Search Empty**: Shows "No patients found" for unmatched searches

## Notes

- Avatar images use Unsplash placeholders (requires internet)
- The app is fully functional with mock data
- All TypeScript types are properly defined
- Uses @gorhom/bottom-sheet for native bottom sheet experience
