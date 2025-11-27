import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cn } from '@/lib/utils';
import { Text } from './text';
import { COLORS } from '@/constants/colors';

interface InfoRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  value: string;
  className?: string;
}

export const InfoRow: React.FC<InfoRowProps> = ({ icon, value, className }) => {
  return (
    <View className={cn('mb-2 flex-row items-center', className)}>
      <Ionicons name={icon} size={16} color={COLORS.textPlaceholder} style={{ marginRight: 10 }} />
      <Text variant="body" color="muted">
        {value}
      </Text>
    </View>
  );
};
