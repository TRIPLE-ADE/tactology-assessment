/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins_400Regular'],
        'poppins-light': ['Poppins_300Light'],
        'poppins-medium': ['Poppins_500Medium'],
        'poppins-semibold': ['Poppins_600SemiBold'],
        'poppins-bold': ['Poppins_700Bold'],
      },
      colors: {
        primary: {
          DEFAULT: '#14B8A6',
          light: '#CCFBF1',
          dark: '#0D9488',
        },
        // Background
        background: '#FFFFFF',
        // Text colors
        text: {
          primary: '#111827',
          secondary: '#6B7280',
          muted: '#9CA3AF',
        },
        // Border
        border: {
          DEFAULT: '#E5E7EB',
          light: '#F3F4F6',
        },
        // Status
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
    },
  },
  plugins: [],
};
