import { Tabs, router } from 'expo-router';
import React from 'react';
import { Image, Button } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';

function LogoTitle() {
  const colorScheme = useColorScheme();
  if (colorScheme == 'dark'){
    return (
      <Image style={{ width: 130, height: 70 }} source={require('@/assets/images/logodark.png')}/>
    )
  }
    
  else{
    return(
      <Image style={{ width: 130, height: 70 }} source={require('@/assets/images/logo.png')}/>
    )
  }
  
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    
      <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton tintColor='#007AFF' />
        
      }}>
      <Tabs.Screen
        name="(toptabs)"
        options={{ 
          headerTitle: () => <LogoTitle/>,
          title: 'Trang chủ',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="analytic"
        options={{
          headerTitle: () => <LogoTitle/>,
          title: 'Phân tích KPI',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bar-chart' : 'bar-chart-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="goal"
        options={{
          headerTitle: () => <LogoTitle/>,
          title: 'Mục tiêu',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'star' : 'star-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          headerTitle: () => <LogoTitle/>,
          title: 'Thông báo',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'notifications' : 'notifications-outline'} color={color} />
          ),
        }}
      />

      </Tabs>
    
    
  );
}

{/* <Tabs.Screen
name="contact"
options={{
  headerTitle: () => <LogoTitle/>,
  title: 'Liên lạc',
  tabBarIcon: ({ color, focused }) => (
    <TabBarIcon name={focused ? 'chatbox' : 'chatbox-outline'} color={color} />
  ),
}}
/> */}
