export const COLORS = {
  // Primary Colors
  primary: '#20BEB8',
  primaryLight: '#CCFBF1',
  primaryDark: '#0D9488',
  primaryTeal: '#14B8A6',

  // Background Colors
  background: '#FFFFFF',
  backgroundGray: '#F8FAFC',
  backgroundLight: '#E5E7EB',
  backgroundSplash: '#E6F4FE',

  // Text Colors
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  textMuted: '#475569',
  textPlaceholder: '#94A3B8',

  // Gray Shades
  gray: '#F2F5F8',
  grayLight: '#9CA3AF',

  // Border Colors
  border: '#CBD5E1',
  borderLight: '#F3F4F6',

  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#009AFF',

  // Pure Colors
  white: '#FFFFFF',
  black: '#000000',
} as const;

// Type for color keys
export type ColorKey = keyof typeof COLORS;
