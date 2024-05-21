// source={{uri: 'https://soict.hust.edu.vn/wp-content/uploads/ta_hai_tung_vt_soict.jpg'}}
import { View, Text, StyleSheet,Image } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import {router, usePathname, Redirect} from 'expo-router';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthProvider';

interface CustomDrawerContentProps {}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => {
    const pathname = usePathname();
    const { user, logout } = useAuth();

    useEffect(() => {
        console.log(pathname);
        console.log("?", user);
    }, [pathname]);

    

    return (
    <DrawerContentScrollView {...props}>
        <View style={styles.userInfoWrapper}>
            <Image source={{uri: 'https://soict.hust.edu.vn/wp-content/uploads/ta_hai_tung_vt_soict.jpg'}} width={80} height={80} style={styles.userImg}/>
            <View style={styles.userDetailsWrapper}>
                <Text style={styles.userName}>Ta Hai Tung</Text>
                <Text style={styles.userEmail}>tung.tahai@hust.edu.vn</Text>
            </View>
        </View>
        <DrawerItem  
            icon={({ focused, color, size }) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={pathname == '/' ? "#fff" : "#000"} />
            )}
            label="Trang chủ"
            labelStyle={[styles.navItemLabel, { color: pathname == "/" ? "#fff" : "#000" }]}
            style = {{ backgroundColor: pathname == "/" ? "#333" : "#fff" }}
            onPress={ () =>  router.push('(drawer)/(tabs)')}

        /> 
        <DrawerItem  
            icon={({ focused, color, size }) => (
                <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={pathname == '/setting' ? "#fff" : "#000"} />
            )}
            label="Cài đặt"
            labelStyle={[styles.navItemLabel, { color: pathname == "/setting" ? "#fff" : "#000" }]}
            style = {{ backgroundColor: pathname == "/setting" ? "#333" : "#fff" }}
            onPress={ () =>  router.push('/setting')}

        /> 
        {/* change this code */}
        <DrawerItem  
            icon={({ focused, color, size }) => (
                <TabBarIcon name={focused ? 'log-out' : 'log-out-outline'} color={pathname == '/signin' ? "#fff" : "#000"} />
            )}
            label="Đăng xuất"
            labelStyle={[styles.navItemLabel, { color: pathname == "/signin" ? "#fff" : "#000" }]}
            style = {{ backgroundColor: pathname == "/signin" ? "#333" : "#fff" }}
            onPress={logout}

        /> 
    </DrawerContentScrollView>

    )
}

export default function DrawerLayout() {
    return(
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}  screenOptions = {{headerShown: false}}>
            <Drawer.Screen name="setting" options={{headerShown: true}} />
        </Drawer>
    )
}

const styles = StyleSheet.create({ 
    navItemLabel: {
        marginLeft: -20,
        fontSize: 18,
      },
      userInfoWrapper: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginBottom: 10,
      },
      userImg: {
        borderRadius: 40,
      },
      userDetailsWrapper: {
        marginTop: 25,
        marginLeft: 10,
      },
      userName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      userEmail: {
        fontSize:16,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
      }
})

