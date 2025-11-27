import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Text } from './text';

const badgeVariants = cva('rounded-lg px-3 py-2.5', {
  variants: {
    type: {
      last: 'bg-border-light',
      upcoming: 'bg-primary-light',
    },
  },
  defaultVariants: {
    type: 'last',
  },
});

interface AppointmentBadgeProps extends VariantProps<typeof badgeVariants> {
  date: string | null;
  className?: string;
}

export const AppointmentBadge: React.FC<AppointmentBadgeProps> = ({ type, date, className }) => {
  if (!date) return null;

  const isUpcoming = type === 'upcoming';

  return (
    <View className={cn(badgeVariants({ type }), className)}>
      <View className="mb-1 flex-row items-center">
        {isUpcoming && (
          <Ionicons name="time-outline" size={12} color="#14B8A6" style={{ marginRight: 4 }} />
        )}
        <Text variant="label" color={isUpcoming ? 'teal' : 'muted'}>
          {isUpcoming ? 'Upcoming' : 'Last appointment'}
        </Text>
      </View>
      <Text variant="body" weight="semibold" color="primary">
        {date}
      </Text>
    </View>
  );
};
