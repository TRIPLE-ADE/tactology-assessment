import React from 'react';
import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <React.Fragment>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="items-center justify-center flex-1 p-5 bg-background">
        <Text className="text-xl font-bold text-content-primary">This screen doesn&apos;t exist.</Text>
        <Link href="/" className="py-4 mt-4">
          <Text className="text-primary">Go to home screen!</Text>
        </Link>
      </View>
    </React.Fragment>
  );
}
