import { StyleSheet, Image, Platform, Text } from 'react-native';
import { 
    createMaterialTopTabNavigator, 
    MaterialTopTabNavigationOptions, 
    MaterialTopTabNavigationEventMap 
} from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
 MaterialTopTabNavigationOptions,
 typeof Navigator,
 TabNavigationState<ParamListBase>,
 MaterialTopTabNavigationEventMap
>(Navigator);

export default function TopTabsLayout() {
  return (
    <MaterialTopTabs
        screenOptions={{
            tabBarLabelStyle: { fontSize: 15,textTransform: 'none' }
        }}
    >
        <MaterialTopTabs.Screen name='index' options={{ title: 'Tổng quan' }}/>
        <MaterialTopTabs.Screen name='board' options={{ title: 'Board' }}/>
        <MaterialTopTabs.Screen name='calendar' options={{ title: 'Lịch làm việc' }}/>
    </MaterialTopTabs>
  );
}

