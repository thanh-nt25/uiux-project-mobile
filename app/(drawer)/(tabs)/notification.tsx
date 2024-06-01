import { View } from '@/components/Themed';
import { StyleSheet, Image, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@rneui/themed'

export default function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start'}}>
      <Image style={{height: '85%'}} source={require('@/assets/images/thongbao.png')}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    
  },
});
