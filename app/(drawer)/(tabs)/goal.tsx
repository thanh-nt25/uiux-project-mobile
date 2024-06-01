import { StyleSheet, Image, Platform, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';

import ButtonCustom from '@/components/ButtonCustom';
import { withDecay } from 'react-native-reanimated';

export default function GoalScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View >
        <ButtonCustom title='Nhập tiêu chí' style={{ width: 150 }} onPress={() => {}}/>
      </View>

      <Card containerStyle={{ height: '60%' }}>
      <Card.FeaturedTitle style={{ color: '#425166', fontSize: 20 }}>
            Bảng tiêu chí đánh giá
          </Card.FeaturedTitle>
      {/* <View style={styles.container}>
        <Image source={require('@/assets/images/bang.png')}/>
      </View> */}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    
  });