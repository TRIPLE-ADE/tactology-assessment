import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Text } from './text';
import { CalendarIcon } from '@/assets/icons';
import { COLORS } from '@/constants/colors';

const badgeVariants = cva('rounded-lg px-3 py-2.5', {
  variants: {
    type: {
      last: 'bg-gray',
      upcoming: 'bg-gray',
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
      <View className="flex-row items-center gap-1 mb-1">
        {isUpcoming ? (
          <Ionicons name="time-outline" size={16} color={COLORS.primary} />
        ) : (
          <CalendarIcon size={16} color={COLORS.info} />
        )}
        <Text variant="label" color="muted">
          {isUpcoming ? 'Upcoming' : 'Last appointment'}
        </Text>
      </View>
      <Text variant="body" weight="medium" color="primary">
        {date}
      </Text>
    </View>
  );
};
