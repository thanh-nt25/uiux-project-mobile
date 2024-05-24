import { StyleSheet, Image, Platform, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Agenda, LocaleConfig, Calendar } from 'react-native-calendars';

import {useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function CalendarScreen() {
  return (
      <SafeAreaView>
        <Text>Calendar screen</Text>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});