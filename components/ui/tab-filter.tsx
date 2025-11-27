import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { cn } from '@/lib/utils';
import { Text } from './text';

interface Tab<T extends string> {
  key: T;
  label: string;
}

interface TabFilterProps<T extends string> {
  tabs: Tab<T>[];
  activeTab: T;
  onTabChange: (tab: T) => void;
  className?: string;
}

export function TabFilter<T extends string>({
  tabs,
  activeTab,
  onTabChange,
  className,
}: TabFilterProps<T>) {
  return (
    <View className={cn('flex-row border-b border-border-light px-5', className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            onPress={() => onTabChange(tab.key)}
            activeOpacity={0.7}
            className={cn(
              'mr-6 border-b-2 py-3',
              isActive ? 'border-primary' : 'border-transparent'
            )}>
            <Text
              variant="body"
              weight={isActive ? 'medium' : 'normal'}
              color={isActive ? 'teal' : 'muted'}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
