import { View, Text } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import {router} from 'expo-router';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

const CustomDrawerContent = (props) => {
    return (
    <DrawerContentScrollView {...props}>
        <DrawerItem  
            icon={({ focused, color, size }) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            )}
            label="Trang chủ"
            onPress={ () =>  router.push('(drawer)/(tabs)')}

        /> 
        <DrawerItem  
            icon={({ focused, color, size }) => (
                <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
            )}
            label="Cài đặt"
            onPress={ () =>  router.push('/setting')}

        /> 
        <DrawerItem  
            icon={({ focused, color, size }) => (
                <TabBarIcon name={focused ? 'log-out' : 'log-out-outline'} color={color} />
            )}
            label="Đăng xuất"
            onPress={ () =>  router.push('../signin')}

        /> 
    </DrawerContentScrollView>

    )
}

export default function DrawerLayout() {
    return(
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} />
    )
}

// const styles = StyleSheet.create
