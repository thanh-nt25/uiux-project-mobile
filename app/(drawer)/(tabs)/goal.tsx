import { StyleSheet, Image, Platform, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';

export default function GoalScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Goal screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    
  });