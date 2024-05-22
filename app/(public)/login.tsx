import { StyleSheet, Image, Platform, Pressable, Alert, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { Text, View, TextInput } from "@/components/Themed";

import { Link, usePathname } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useAuth } from '@/context/AuthProvider';

export default function login() {
  const [username, setUsername] = useState('');``
  const [password, setPassword] = useState('');

  const pathname = usePathname();

    useEffect(() => {
        console.log(pathname);
    }, [pathname]);

  const { login } = useAuth();
  
  const _login = (username: string, password: string) => {
    if (username === "" || password === "")
      Alert.alert("Lỗi", "Hãy nhập tên đăng nhập và mật khẩu");
    else login(username, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
      <Image source={require('@/assets/images/logo.png')}
            style={styles.logo}
          />
        <Text style={styles.title}>Đăng nhập</Text>
        <Text style={styles.subtitle}>
          Hãy nhập tên đăng nhập và mật khẩu bất kỳ
        </Text>
        <View>
          <Text style={styles.label}>Tên đăng nhập</Text>
          <TextInput
            placeholder="sample"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View>
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            placeholder="sample"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button
          title="Đăng nhập"
          onPress={() => _login(username, password)}
        />
        <View style={styles.separator}>
          <View style={styles.line} />
          <Text style={styles.separatorText}>Đăng nhập khác</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.microsoftButton} onPress={() => {}}>
          <Image source={require('@/assets/images/microsoft.png')} style={styles.microsoftLogo} />
          <Text style={styles.microsoftButtonText}>Microsoft</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Button = ({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: () => void;
  style?: any;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      // style={[style]}
      style={styles.button2}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  logoContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: '80%',
    height: undefined,
    aspectRatio: 2,
    alignSelf: 'center'
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16, // px-4 in Tailwind (4 * 4 = 16)
  },
  title: {
    fontSize: 26, // text-3xl in Tailwind (3 * 8 = 24)
    marginBottom: 20, // mb-2 in Tailwind (2 * 4 = 8)
    fontWeight: 'bold',
    textAlign: 'center'
    
  },
  subtitle: {
    marginBottom: 8, // mb-2 in Tailwind (2 * 4 = 8)
    opacity: 0.7, // opacity-70 in Tailwind
    fontStyle: 'italic'
  },
  label: {
    fontWeight: '600', // font-semibold in Tailwind
    fontSize: 18, // text-lg in Tailwind (lg = 18)
    marginBottom: 4, // mb-1 in Tailwind (1 * 4 = 4)
  },
  input: {
    borderColor: '#6B7280', // border-gray-500 in Tailwind (gray-500 hex code)
    borderWidth: 1,
    borderRadius: 12, // rounded-xl in Tailwind
    padding: 12, // p-3 in Tailwind (3 * 4 = 12)
    marginBottom: 12, // adding some margin bottom for better spacing
  },
  button: {
    marginTop: 20,
  },
  button2: {
    backgroundColor: '#3B82F6', // bg-blue-500 in Tailwind
    borderRadius: 12, // rounded-xl in Tailwind
    paddingHorizontal: 8, // px-2 in Tailwind (2 * 4 = 8)
    paddingVertical: 12, // py-3 in Tailwind (3 * 4 = 12)
  },
  buttonText: {
    color: '#FFFFFF', // text-white in Tailwind
    textAlign: 'center', // text-center in Tailwind
    fontSize: '16'
  },
  microsoftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
    padding: 10,
    borderRadius: 12,
    marginTop: 0,
  },
  microsoftLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  microsoftButtonText: {
    color: '#373434',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 15,
    color: '#ccc',
  },
});