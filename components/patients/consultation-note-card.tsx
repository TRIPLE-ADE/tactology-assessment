import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cn } from '@/lib/utils';
import { ConsultationNote } from '@/types';
import { Text } from '@/components/ui';

interface ConsultationNoteCardProps {
  note: ConsultationNote;
  onViewFull?: () => void;
  className?: string;
}

export const ConsultationNoteCard: React.FC<ConsultationNoteCardProps> = ({
  note,
  onViewFull,
  className,
}) => {
  return (
    <View className={cn('border-b border-border-light py-4', className)}>
      <Text variant="body" weight="semibold" className="mb-2">
        {note.title}
      </Text>
      <Text variant="body" color="secondary" className="mb-3 leading-5" numberOfLines={4}>
        {note.description}
      </Text>
      <View className="mb-4 flex-row items-center">
        <Ionicons name="calendar-outline" size={14} color="#9CA3AF" />
        <Text variant="caption" className="ml-1.5">
          {note.date}
        </Text>
      </View>
      {onViewFull && (
        <TouchableOpacity
          onPress={onViewFull}
          activeOpacity={0.7}
          className="items-center rounded-full border border-primary py-3">
          <Text variant="body" weight="medium" color="teal">
            View Full Note
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
