import { Image, StyleSheet, Platform, SafeAreaView, Text } from 'react-native';

export default function OverviewScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Overview</Text>
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