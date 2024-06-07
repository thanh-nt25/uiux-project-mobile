import { StyleSheet, Image, Platform, Text, View, TouchableOpacity, Button, Share } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
// import { Table, Row, Rows } from 'react-native-table-component';


import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';

const pieData = [
  {value: 40, color: '#306BFF', text: '54%'},
  {value: 25, color: '#33BFFF', text: '30%'},
  {value: 15, color: '#FF54EE', text: '26%'},
  {value: 20, color: '#C6CCD1', text: '26%'}
];

const itemDropDown = [
  {label: '20231', value: '1'},
  {label: '20222', value: '2'},
  {label: '20221', value: '3'},
  {label: '20212', value: '4'},
]

interface ReportData {
  [key: string]: { value: number; color: string; sem?: string; evaluate?: string }[];
}

// 90 75 50 65
// 50 35 15
const reportData: ReportData = {
  '20231': [{value: 40, color: '#306BFF', sem: '2023.1', evaluate: 'Hoàn thành xuất sắc nhiệm vụ'},
            {value: 35, color: '#33BFFF'},
            {value: 15, color: '#FF54EE'}
          ],
  '20222': [{value: 40, color: '#306BFF', sem: '2022.2', evaluate: 'Hoàn thành tốt nhiệm vụ'},
            {value: 25, color: '#33BFFF'},
            {value: 10, color: '#FF54EE'},
          ],
  '20221': [{value: 30, color: '#306BFF', sem: '2022.1', evaluate: 'Không hoàn thành nhiệm vụ'},
            {value: 15, color: '#33BFFF'},
            {value: 5, color: '#FF54EE'},
          ],
  '20212': [{value: 35, color: '#306BFF', sem: '2021.2', evaluate: 'Hoàn thành nhiệm vụ'},
            {value: 15, color: '#33BFFF'},
            {value: 15, color: '#FF54EE'},
          ],
}

export default function ReportScreen() {
  const [value, setValue] = useState('1');
  const [isFocus, setIsFocus] = useState(false);
  const [semester, setSemester] = useState(reportData['20231']);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  // const findSemester = () => {
  //   const rindex = itemDropDown.find(item => item.value === value)
  //   const rlabel = rindex === undefined ? '20231' : rindex.label

  //   return reportData[rlabel];
  // }

  return (
    <View style={{ flex: 1, margin: 10 }}>
      {/* {renderLabel()} */}
      <View style={{ marginHorizontal: 13, marginVertical: 10 }}>
        <View>
          <Text style={{ color: '#425166', fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>
            Chọn học kỳ báo cáo
          </Text>
        </View>
        <Dropdown 
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          // inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={itemDropDown}
          // search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Chọn học kỳ' : '...'}
          // searchPlaceholder="Tìm kiếm học kỳ"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setSemester(reportData[item.label])
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color= '#425166'
              name="calendar"
              size={16}
            />
          )}
        />
      </View>

      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={{ fontSize: 20 }}>Kỳ 2023.1▼</Text>
        </View>
      </View> */}
      <ScrollView>
        <View style={{  flex: 1 }}>
          {/* Custom */}
          <CardReport semester={semester}/>
          {/* details */}
          <Card containerStyle={{ flex: 1, marginTop: 5,borderRadius: 8, }}>
            <Card.FeaturedTitle style={{ color: '#425166', fontSize: 20 }}>
              Chi tiết điểm thành phần
            </Card.FeaturedTitle>
            
          </Card>
        </View>
      </ScrollView>
      
    </View>
  );
}

const CardReport = ({semester} : {semester : Array<any>}) => {
  const sum = semester.reduce((acc, curr) => acc + curr.value, 0);
  const notget = 100 - sum
  semester = [...semester, {value: notget, color: '#C6CCD1'}]
  // console.log(semester)

  return (
    <View>
      <Card containerStyle={{ flex: 1, marginTop: 5,borderRadius: 8, }}>
        <Card.FeaturedTitle style={{ color: '#425166', fontSize: 20 }}>
            Tổng điểm đạt được
          </Card.FeaturedTitle>
          {/* bieu do tron */}
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 0}}>
            <PieChart 
              donut
              textColor="black"
              radius={100}
              textSize={15}
              showTextBackground
              textBackgroundRadius={15}
              data={semester}
              innerRadius={80
              }
              focusOnPress
              
              centerLabelComponent={() => (
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{sum} điểm</Text>
              )}
            />
          </View>
          {/* chu thich */}
          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.colorBox, { backgroundColor: '#306BFF' }]} />
                <Text style={styles.legendText}>Giảng dạy</Text>
              </View>
              <Text style={styles.legendText}>{semester[0].value}</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.colorBox, { backgroundColor: '#33BFFF' }]} />
                <Text style={styles.legendText}>Nghiên cứu khoa học</Text>
              </View>
              <Text style={styles.legendText}>{semester[1].value}</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.colorBox, { backgroundColor: '#FF54EE' }]} />
                <Text style={styles.legendText}>Phục vụ</Text>
              </View>
              <Text style={styles.legendText}>{semester[2].value}</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.colorBox, { backgroundColor: '#C6CCD1' }]} />
                <Text style={styles.legendText}>Chưa đạt</Text>
              </View>
              <Text style={styles.legendText}>{semester[3].value}</Text>
            </View>
            <View style={styles.legendItem}>
              <Card.FeaturedTitle style={{ color: '#425166', fontSize: 18 }}>Tổng điểm đạt</Card.FeaturedTitle>
              <Card.FeaturedTitle style={{ color: '#425166', fontSize: 18 }}>{sum}</Card.FeaturedTitle>
            </View>
          </View>
          {/* danh gia xep loai */}
          <View style={{  }}>
            <Text style={{ fontSize: 15, color: '#425166', fontWeight: 'bold', marginBottom: 10 }}>
              Điểm đánh giá KPI:
            </Text>
            <Text style={{ fontSize: 20,
              fontWeight: 'bold',
              color: '#FF0000',
              marginBottom: 10 }}
            >
              {sum}
            </Text>

            <Text style={{ fontSize: 15, color: '#425166', fontWeight: 'bold', marginBottom: 10 }}>
              Đánh giá xếp loại:
            </Text>
            <Text style={{ fontSize: 20,
              fontWeight: 'bold',
              color: '#FF0000',
              marginBottom: 10 }}
            >
              Hoàn thành tốt nhiệm vụ
            </Text>

            <Text style={{ fontSize: 15, color: '#425166', fontWeight: 'bold', marginBottom: 10 }}>
              Vị trí công việc:
            </Text>
            <Text style={{ fontSize: 20,
              fontWeight: 'bold',
              color: '#425166',
              marginBottom: 10 }}
            >
              Giảng viên
            </Text>

            <Text style={{ fontSize: 15, color: '#425166', fontWeight: 'bold', marginBottom: 10 }}>
              Kỳ đánh giá:
            </Text>
            <Text style={{ fontSize: 20,
              fontWeight: 'bold',
              color: '#425166',
              marginBottom: 10 }}
            >
              {semester[0].sem}
            </Text>

          </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10
    },
    button: {
      backgroundColor: '#3B82F6',
      borderRadius: 8, // Giảm bán kính để làm cho nút nhỏ hơn
      paddingHorizontal: 6, // Giảm giá trị để làm cho nút nhỏ hơn ngang
      paddingVertical: 8, // Giảm giá trị để làm cho nút nhỏ hơn dọc
      width: 160,
      marginLeft: 10,
      
    },
    buttonText: {
      color: '#FFFFFF', // text-white in Tailwind
      textAlign: 'center', // text-center in Tailwind
      fontSize: 16
    },
    legendContainer: {
      marginTop: 20,
      // flexDirection: 'row',
      justifyContent: 'space-between',
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 8
    },
    colorBox: {
      width: 20,
      height: 20,
      marginRight: 10,
      borderRadius: 20/2
    },
    legendText: {
      fontSize: 16,
      color: '#425166',
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      backgroundColor: 'white'
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    
  });