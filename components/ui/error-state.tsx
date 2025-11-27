import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cn } from '@/lib/utils';
import { Text } from './text';
import { Button } from './button';
import { COLORS } from '@/constants/colors';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  message = 'Something went wrong',
  onRetry,
  className,
}) => {
  return (
    <View className={cn('flex-1 items-center justify-center p-10', className)}>
      <Ionicons name="alert-circle-outline" size={64} color={COLORS.error} />
      <Text variant="body" color="secondary" className="mt-4 text-center">
        {message}
      </Text>
      {onRetry && (
        <Button variant="primary" className="mt-6" onPress={onRetry}>
          Try Again
        </Button>
      )}
    </View>
  );
};
