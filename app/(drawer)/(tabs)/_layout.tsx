import { Tabs, router } from 'expo-router';
import React from 'react';
import { Image, Button, Share } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';
import file from '../../../assets/base64js.min';

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

  const onShare = async () => {
    try {
      const result = await Share.share({
       title: 'Tài liệu báo cáo',
        message: 'Tài liệu báo cáo kỳ 2023.1:https://husteduvn-my.sharepoint.com/:x:/g/personal/thanh_nt210800_sis_hust_edu_vn/ERj6FdgWdU5Nugn8o41vMGEBSZ93orSkF4Da26KTpi9-JA?e=6tCf6R', 
        url: 'https://husteduvn-my.sharepoint.com/:x:/g/personal/thanh_nt210800_sis_hust_edu_vn/ERj6FdgWdU5Nugn8o41vMGEBSZ93orSkF4Da26KTpi9-JA?e=Ciur3l'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    
      <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton tintColor='#007AFF'/>
        
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
        name="report"
        options={{
          headerTitle: () => <LogoTitle/>,
          headerRight: () => <Button title='Chia sẻ' onPress={async () => {await onShare();}}/>,
          title: 'Báo cáo',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'document-text' : 'document-text-outline'} color={color} />
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
