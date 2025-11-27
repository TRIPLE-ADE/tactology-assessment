import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva('font-poppins', {
  variants: {
    variant: {
      h1: 'text-lg font-poppins-medium text-text-primary',
      h2: 'text-base font-poppins-medium text-text-primary',
      h3: 'text-sm font-poppins-medium text-text-primary',
      body: 'text-sm font-poppins text-text-primary',
      bodySmall: 'text-[13px] font-poppins text-text-secondary',
      caption: 'text-xs font-poppins text-text-muted',
      label: 'text-[11px] font-poppins text-text-muted',
    },
    weight: {
      light: 'font-poppins-light',
      normal: 'font-poppins',
      medium: 'font-poppins-medium',
      semibold: 'font-poppins-semibold',
      bold: 'font-poppins-bold',
    },
    color: {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      muted: 'text-text-muted',
      teal: 'text-primary',
      white: 'text-white',
      error: 'text-error',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type TypographyVariantProps = VariantProps<typeof typographyVariants>;

interface TypographyProps extends Omit<TextProps, 'children'>, TypographyVariantProps {
  className?: string;
  children?: React.ReactNode;
}

export const Text: React.FC<TypographyProps> = ({
  variant,
  weight,
  color,
  className,
  children,
  ...props
}) => {
  return (
    <RNText className={cn(typographyVariants({ variant, weight, color }), className)} {...props}>
      {children}
    </RNText>
  );
};
