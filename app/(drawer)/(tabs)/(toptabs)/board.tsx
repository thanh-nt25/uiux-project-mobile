import { StyleSheet, Image, Platform, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function BoardScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>BoardScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
    },
  });