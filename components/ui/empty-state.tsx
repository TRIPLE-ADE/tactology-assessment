import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cn } from '@/lib/utils';
import { Text } from './text';
import { COLORS } from '@/constants/colors';

interface EmptyStateProps {
  title: string;
  message?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  icon = 'people-outline',
  className,
}) => {
  return (
    <View className={cn('flex-1 items-center justify-center p-10', className)}>
      <Ionicons name={icon} size={64} color={COLORS.grayLight} />
      <Text variant="h2" className="mt-4 text-center">
        {title}
      </Text>
      {message && (
        <Text variant="body" color="secondary" className="mt-2 text-center">
          {message}
        </Text>
      )}
    </View>
  );
};
