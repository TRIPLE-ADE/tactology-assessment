import React from "react";
import { View, TouchableOpacity } from "react-native";
import { cn } from "@/lib/utils";
import { ConsultationNote } from "@/types";
import { Text } from "@/components/ui";
import { CalendarIcon } from "@/assets/icons";
import { COLORS } from "@/constants/colors";

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
    <View className={cn("p-3 rounded-lg bg-white", className)}>
      <Text variant='body' weight='medium' className='mb-2'>
        {note.title}
      </Text>
      <Text
        variant='body'
        color='secondary'
        className='mb-3 leading-5'
        numberOfLines={4}
      >
        {note.description}
      </Text>
      <View className='flex-row items-center mb-3'>
        <CalendarIcon size={16} color={COLORS.info} />
        <Text variant='body' color='secondary' className='ml-1.5'>
          {note.date}
        </Text>
      </View>
      {onViewFull && (
        <TouchableOpacity
          onPress={onViewFull}
          activeOpacity={0.7}
          className='items-center py-1.5 border rounded-full border-primary'
        >
          <Text variant='body' weight='medium' color='teal'>
            View Full Note
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
