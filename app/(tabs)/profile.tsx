import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '@/components/ui';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <View className="py-4 border-b border-border-light">
        <Text variant="h1" className="text-center">
          Profile
        </Text>
      </View>

      <View className="items-center justify-center flex-1 px-10">
        <Text variant="h2" className="mt-4">
          Your Profile
        </Text>
        <Text variant="body" color="secondary" className="mt-2 text-center">
          Manage your account settings and preferences.
        </Text>
      </View>
    </SafeAreaView>
  );
}
