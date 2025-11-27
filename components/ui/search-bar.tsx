import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cn } from '@/lib/utils';
import { COLORS } from '@/constants/colors';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search by patient',
  className,
}) => {
  return (
    <View
      className={cn(
        'flex-row items-center rounded-lg border border-border bg-white px-3 max-h-13',
        className
      )}>
      <Ionicons name="search-outline" size={24} color={COLORS.grayLight} />
      <TextInput
        className="flex-1 ml-1 text-base text-text-primary"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textPlaceholder} 
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};
