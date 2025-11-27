import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cn } from '@/lib/utils';

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
        'mx-5 flex-row items-center rounded-full border border-border bg-white px-4 py-3',
        className
      )}>
      <Ionicons name="search-outline" size={20} color="#9CA3AF" />
      <TextInput
        className="ml-3 flex-1 text-[15px] text-text-primary"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};
