import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <View className="py-4 border-b border-border-light">
        <Text variant="h1" className="text-center">
          Home
        </Text>
      </View>

      <View className="items-center justify-center flex-1 px-10">
        <Text variant="h2" className="mt-4">
          Welcome
        </Text>
        <Text variant="body" color="secondary" className="mt-2 text-center">
          This is the home screen.
        </Text>
      </View>
    </SafeAreaView>
  );
}
