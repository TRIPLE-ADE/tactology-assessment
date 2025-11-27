import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import './global.css';
import 'react-native-reanimated';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
