
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';


import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeConfig } from '@/core/use-theme-config';
import AuthProvider from '@/context/AuthProvider';
import { ScreenStackHeaderRightView } from 'react-native-screens';

export {
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '/login',
};
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const StackReact = createNativeStackNavigator();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  
  // rotate here
  const [orientation, setOrientation] = useState(ScreenOrientation.Orientation.PORTRAIT_UP);

  useEffect(() => {
    // Function to handle orientation changes
    const handleOrientationChange = async () => {
      const currentOrientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(currentOrientation);
    };

    // Lock screen orientation to landscape initially
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      handleOrientationChange(); // Update orientation state
    };

    lockOrientation();

    // Listen for orientation changes
    const orientationChangeListener = ScreenOrientation.addOrientationChangeListener(handleOrientationChange);

    // Cleanup function to remove orientation change listener and unlock orientation
    return () => {
      orientationChangeListener.remove();
      ScreenOrientation.unlockAsync();
    };
  }, []);

  // Check if orientation is portrait, if so, unlock orientation
  useEffect(() => {
    if (orientation === ScreenOrientation.Orientation.PORTRAIT_UP) {
      ScreenOrientation.unlockAsync();
    }
  }, [orientation]);

  // rotate here

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <AuthProvider>  
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

        <Stack>
          <Stack.Screen name='(public)/login' options={{ headerShown: false }}/>
          <Stack.Screen name='(drawer)' options={{ headerShown: false }}/>
          
        </Stack>


      </ThemeProvider>
    </AuthProvider>
  )
}
  

{/* <Stack.Screen name="(drawer)"  options={{ headerShown: false }}/> 
return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{headerShown: false}} initialRouteName='signin'>
          <Stack.Screen name="(public)/login" options={{ headerShown: false }} />
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    
  );
}
*/}


