// source={{uri: 'https://soict.hust.edu.vn/wp-content/uploads/ta_hai_tung_vt_soict.jpg'}}
import { View, Text, StyleSheet,Image } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import {router, usePathname, Redirect} from 'expo-router';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthProvider';
import { Stack } from 'expo-router';

// const image_link = 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/434154354_2268341086831283_3414945414992532512_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHQjFXfNz7NeQIKaFAm2lSb2VIZTY_bp1bZUhlNj9unViGzQCVIocpbZ794EG7HZMAInHaEiOpxhM_e35Is04Tk&_nc_ohc=16gTAvWUsTsQ7kNvgFQzJ6I&_nc_ht=scontent.fhan14-2.fna&oh=00_AYBy_y4TKmdZAT1URVVsaikJ9H1G7NE00dq-pqrfBNIHhA&oe=665E28B3'
const image_link = 'https://soict.hust.edu.vn/wp-content/uploads/ta_hai_tung_vt_soict.jpg'

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
            {/* <Image source={{uri: 'https://soict.hust.edu.vn/wp-content/uploads/ta_hai_tung_vt_soict.jpg'}} width={80} height={80} style={styles.userImg}/> */}
            <Image source={{ uri: image_link }} width={80} height={80} style={styles.userImg}/>
            <View style={styles.userDetailsWrapper}>
                <Text style={styles.userName}>Ta Hai Tung</Text>
                <Text style={styles.userEmail}>tung.th@hust.edu.vn</Text>
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
        fontSize:12,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
      }
})

