import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { cn } from '@/lib/utils';
import { Text } from './text';

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading...',
  className,
}) => {
  return (
    <View className={cn('flex-1 items-center justify-center', className)}>
      <ActivityIndicator size="large" color="#14B8A6" />
      <Text variant="body" color="secondary" className="mt-4">
        {message}
      </Text>
    </View>
  );
};
