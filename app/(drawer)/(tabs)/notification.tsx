import { View } from '@/components/Themed';
import { StyleSheet, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotificationScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.image} source={require('@/assets/images/noti.png')} />
    </View>

    </ScrollView>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
    
  },
  image: {
    width: 445,  // Đặt kích thước mong muốn của hình ảnh
    
    resizeMode: 'contain',  // Đảm bảo hình ảnh được co giãn mà không bị méo
  },
  text: {
    fontSize: 24,
  },
});
