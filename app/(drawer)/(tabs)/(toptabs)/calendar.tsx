import { StyleSheet, Image, Platform, Text, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Agenda, LocaleConfig, Calendar, CalendarList } from 'react-native-calendars';

import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

LocaleConfig.locales['vn'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12'
  ],
  monthNamesShort: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
  dayNames: ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ Nhật'],
  dayNamesShort: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  today: "Hôm nay"
};

LocaleConfig.defaultLocale = 'vn';



export default function CalendarScreen() {
  return (
    <CalendarList
     markingType='period'
     markedDates={{
      '2024-05-01': {startingDay: true, endingDay: true, color: '#33BFFF', textColor: 'white'},
      '2024-05-09': {startingDay: true, endingDay: true, color: '#FF54EE', textColor: 'white'},
      '2024-05-23': {startingDay: true, color: '#306BFF', textColor: 'white'},
      '2024-05-24': {color: '#306BFF', textColor: 'white'},
      '2024-05-25': {color: '#306BFF', textColor: 'white'},
      '2024-05-26': {color: '#306BFF', textColor: 'white'},
      '2024-05-27': {color: '#306BFF', textColor: 'white'},
      '2024-05-28': {endingDay: true, color: '#306BFF', textColor: 'white'},

      '2024-06-01': {startingDay: true, endingDay: true, color: '#33BFFF', textColor: 'white'},
      '2024-06-09': {startingDay: true, endingDay: true, color: '#FF54EE', textColor: 'white'},
      '2024-06-11': {startingDay: true, color: '#33BFFF', textColor: 'white'},
      '2024-06-12': {color: '#33BFFF', textColor: 'white'},
      '2024-06-13': {color: '#33BFFF', textColor: 'white'},
      '2024-06-14': {color: '#33BFFF', textColor: 'white'},
      '2024-06-15': {color: '#33BFFF', textColor: 'white'},
      '2024-06-16': {color: '#33BFFF', textColor: 'white'},
      '2024-06-17': {endingDay: true, color: '#33BFFF', textColor: 'white'},
      '2024-06-19': {startingDay: true, endingDay: true, color: '#306BFF', textColor: 'white'},
      '2024-06-26': {startingDay: true, color: '#FF54EE', textColor: 'white'},
      '2024-06-27': {color: '#FF54EE', textColor: 'white'},
      '2024-06-28': {color: '#FF54EE', textColor: 'white'},
      '2024-06-29': {color: '#FF54EE', textColor: 'white'},
      '2024-06-30': {endingDay: true, color: '#FF54EE', textColor: 'white'},

      '2024-04-01': {startingDay: true, endingDay: true, color: '#33BFFF', textColor: 'white'},
      '2024-04-09': {startingDay: true, endingDay: true, color: '#FF54EE', textColor: 'white'},
      '2024-04-11': {startingDay: true, color: '#33BFFF', textColor: 'white'},
      '2024-04-12': {color: '#33BFFF', textColor: 'white'},
      '2024-04-13': {color: '#33BFFF', textColor: 'white'},
      '2024-04-14': {color: '#33BFFF', textColor: 'white'},
      '2024-04-15': {color: '#33BFFF', textColor: 'white'},
      '2024-04-16': {color: '#33BFFF', textColor: 'white'},
      '2024-04-17': {endingDay: true, color: '#33BFFF', textColor: 'white'},
      '2024-04-19': {startingDay: true, endingDay: true, color: '#306BFF', textColor: 'white'},
      '2024-04-26': {startingDay: true, color: '#FF54EE', textColor: 'white'},
      '2024-04-27': {color: '#FF54EE', textColor: 'white'},
      '2024-04-28': {color: '#FF54EE', textColor: 'white'},
      '2024-04-29': {color: '#FF54EE', textColor: 'white'},
      '2024-04-30': {endingDay: true, color: '#FF54EE', textColor: 'white'},

     }} 
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});