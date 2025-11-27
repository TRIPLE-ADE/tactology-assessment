import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Text } from './text';
import { COLORS } from '@/constants/colors';

const buttonVariants = cva('items-center justify-center rounded-full', {
  variants: {
    variant: {
      primary: 'bg-primary',
      outline: 'bg-white border border-primary',
      secondary: 'bg-border-light',
      ghost: 'bg-transparent',
    },
    size: {
      sm: 'py-2 px-4',
      md: 'py-3 px-6',
      lg: 'py-4 px-8',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonProps extends ButtonVariantProps {
  children?: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  variant,
  size,
  disabled = false,
  loading = false,
  className,
}) => {
  const textColor = variant === 'primary' ? 'white' : 'teal';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      className={cn(buttonVariants({ variant, size }), disabled && 'opacity-50', className)}>
      {loading ? (
        <ActivityIndicator size="small" color={variant === 'primary' ? `${COLORS.white}` : `${COLORS.primaryTeal}`} />
      ) : typeof children === 'string' ? (
        <Text variant="body" weight="medium" color={textColor}>
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
