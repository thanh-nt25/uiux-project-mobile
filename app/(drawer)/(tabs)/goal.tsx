import { StyleSheet, Image, Platform, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';

import ButtonCustom from '@/components/ButtonCustom';
import { withDecay } from 'react-native-reanimated';
import { DataTable } from 'react-native-paper'; 
// import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


export default function GoalScreen() {
  return (
    <ScrollView>
        <View style={{ flex: 1, marginTop: 10 }}>
      <View >
        <ButtonCustom title='Nhập tiêu chí mới' style={{ width: 150, marginTop: 10 }} onPress={() => {}}/>
      </View>

      <Card containerStyle={{ flex: 1, height: '60%', borderRadius: 8 }}>
      <Card.FeaturedTitle style={{ color: '#425166', fontSize: 20 }}>
            Bảng tiêu chí đánh giá
      </Card.FeaturedTitle>
      {/* <View style={styles.container}>
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <View key={colIndex} style={styles.cell}>
              <Text>{cell}</Text>
            </View>
          ))}
        </View> 
      ))}*/}
    <DataTable style={{ marginTop: 10 }}> 
      <DataTable.Header style={styles.tableHeader}> 
        <DataTable.Title>Tiêu chí</DataTable.Title> 
        <DataTable.Title>Điểm KPIs</DataTable.Title> 
        <DataTable.Title>Điểm</DataTable.Title> 
        <DataTable.Title>Mô tả</DataTable.Title> 
      </DataTable.Header> 
      <DataTable.Row> 
        <DataTable.Cell>Giảng dạy</DataTable.Cell> 
        <DataTable.Cell style={{ justifyContent: 'center' }}>50</DataTable.Cell> 
        <DataTable.Cell>20</DataTable.Cell> 
        <DataTable.Cell>350 giờ/tuần</DataTable.Cell> 
      </DataTable.Row> 

      <DataTable.Row> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell>3</DataTable.Cell> 
        <DataTable.Cell>Có đề cương giảng dạy theo quy định</DataTable.Cell> 
      </DataTable.Row> 

      <DataTable.Row> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell>3</DataTable.Cell> 
        <DataTable.Cell>Thực hiện xây dựng đề thi kiểm tra</DataTable.Cell> 
      </DataTable.Row> 

      <DataTable.Row> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell>3</DataTable.Cell> 
        <DataTable.Cell>Có đề cương giảng dạy theo quy định</DataTable.Cell> 
      </DataTable.Row> 


      <DataTable.Row> 
        <DataTable.Cell>Nghiên cứu</DataTable.Cell> 
        <DataTable.Cell style={{ justifyContent: 'center' }}>35</DataTable.Cell> 
        <DataTable.Cell>20</DataTable.Cell> 
        <DataTable.Cell>Hoàn thành định mức nghiên cứu</DataTable.Cell> 
      </DataTable.Row> 


      <DataTable.Row> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell>5</DataTable.Cell> 
        <DataTable.Cell>Công bố quốc tế</DataTable.Cell> 
      </DataTable.Row> 

      <DataTable.Row> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell>5</DataTable.Cell> 
        <DataTable.Cell>Tham dự hội thảo</DataTable.Cell> 
      </DataTable.Row> 


      <DataTable.Row> 
        <DataTable.Cell>Phục vụ</DataTable.Cell> 
        <DataTable.Cell style={{ justifyContent: 'center' }}>15</DataTable.Cell> 
        <DataTable.Cell>2</DataTable.Cell> 
        <DataTable.Cell>Tham gia tư vấn</DataTable.Cell> 
      </DataTable.Row> 

      <DataTable.Row> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell>5</DataTable.Cell> 
        <DataTable.Cell>Tham dự hội thảo</DataTable.Cell> 
      </DataTable.Row> 

      <DataTable.Row> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell></DataTable.Cell> 
        <DataTable.Cell>5</DataTable.Cell> 
        <DataTable.Cell>Tham dự hội thảo</DataTable.Cell> 
      </DataTable.Row> 


      <DataTable.Row> 
        
        <DataTable.Cell>Tổng điểm</DataTable.Cell> 
        <DataTable.Cell style={{ justifyContent: 'center' }}>100</DataTable.Cell> 
        <DataTable.Cell >100</DataTable.Cell> 
        <DataTable.Cell></DataTable.Cell> 
      </DataTable.Row> 

    </DataTable> 
      </Card>

      <Card containerStyle={{ flex: 1, height: '60%', borderRadius: 8 }}>
      <Card.FeaturedTitle style={{ color: '#425166', fontSize: 20 }}>
            Bảng xếp hạng KPI theo điểm
      </Card.FeaturedTitle>
      {/* <View style={styles.container}>
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <View key={colIndex} style={styles.cell}>
              <Text>{cell}</Text>
            </View>
          ))}
        </View> 
      ))}*/}
    <DataTable style={{ marginTop: 10 }}> 
      <DataTable.Header style={styles.tableHeader}> 
        <DataTable.Title style={{ justifyContent: 'center' }}>Xếp loại</DataTable.Title> 
        <DataTable.Title style={{ justifyContent: 'center' }}>Điểm KPIs</DataTable.Title> 
      </DataTable.Header> 


      <DataTable.Row > 
        <DataTable.Cell >Không hoàn thành nhiệm vụ</DataTable.Cell> 
        <DataTable.Cell style={{ justifyContent: 'center' }}> 55 </DataTable.Cell> 
      </DataTable.Row> 

      <DataTable.Row> 
        <DataTable.Cell>Hoàn thành nhiệm vụ</DataTable.Cell> 
        <DataTable.Cell style={{ justifyContent: 'center' }}>55-70</DataTable.Cell> 
      </DataTable.Row> 


      <DataTable.Row> 
        
        <DataTable.Cell>Hoàn thành tốt nhiệm vụ</DataTable.Cell> 
        <DataTable.Cell style={{ justifyContent: 'center' }}>70-80</DataTable.Cell> 
      </DataTable.Row> 

      <DataTable.Row> 
        
        <DataTable.Cell>Hoàn thành xuất sắc nhiệm vụ</DataTable.Cell> 
        <DataTable.Cell style={{ justifyContent: 'center' }}>80-100</DataTable.Cell> 
      </DataTable.Row> 


    </DataTable> 
      </Card>

    </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    dataContainer: {
      
    },
    tableHeader: { 
      backgroundColor: '#DCDCDC', 
    },
    cellText: {
      flexWrap: 'wrap',
    },
    col1: {
      width: 30
    }

  });