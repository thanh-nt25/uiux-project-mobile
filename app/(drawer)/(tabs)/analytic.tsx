import { StyleSheet, Image, Platform, Text, View } from 'react-native';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';

const lineData = [{value: 65, label: '2021.2', dataPointText: '65'},
                  {value: 50, label: '2022.1', dataPointText: '50'}, 
                  {value: 75, label: '2022.2', dataPointText: '75'}, 
                  {value: 90, label: '2023.1', dataPointText: '90'}
                ];

const pieData = [
  {value: 30, color: '#306BFF', text: '54%'},
  {value: 25, color: '#33BFFF', text: '30%'},
  {value: 15, color: '#FF54EE', text: '26%'},
  {value: 30, color: '#C6CCD1', text: '26%'}
];

const barData = [
  {value: 5, label: '13', frontColor: '#306BFF', spacing: 0},
  {value: 10, frontColor: '#33BFFF', spacing: 0},
  {value: 0, frontColor: '#FF54EE'},
  {value: 5, label: '14', frontColor: '#306BFF', spacing: 0},
  {value: 5, frontColor: '#33BFFF', spacing: 0},
  {value: 5, frontColor: '#FF54EE'},
  {value: 10, label: '15', frontColor: '#306BFF', spacing: 0},
  {value: 5, frontColor: '#33BFFF', spacing: 0},
  {value: 5, frontColor: '#FF54EE'},
  {value: 5, label: '16', frontColor: '#306BFF', spacing: 0},
  {value: 5, frontColor: '#33BFFF', spacing: 0},
  {value: 5, frontColor: '#FF54EE'}

]

export default function AnalyticScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row' }}>
          <Text style={{ fontSize: 18 }}>Cần </Text>
          <Text style={{ fontSize: 20, color: '#ff0000', fontWeight: 'bold', borderRadius: 10 }}>10 điểm</Text>
          <Text style={{ fontSize: 18 }}> nữa để đạt loại xếp hạng: </Text>
        </View>
        <Text style={{ 
          fontSize: 20,
          fontWeight: 'bold',
          color: '#FF0000',
          textAlign: 'center'
        }}>Hoàn thành xuất sắc nhiệm vụ</Text>
        {/* line chatr */}
        <Card containerStyle={styles.cardLineChartContainer}>
          <Card.FeaturedTitle style={{ color: '#425166' }}>
            Thống kê điểm KPI các kỳ
          </Card.FeaturedTitle>
          <Card.FeaturedSubtitle style={{ color: '#425166', fontSize: 16 }}>
            Điểm KPI các kỳ theo thang điểm 100
          </Card.FeaturedSubtitle>
          <View style={styles.lineChartContainer}>
            <LineChart 
            data={lineData}
            color={'#177AD5'}
            thickness={3}
            dataPointsColor={'red'}
            maxValue={100}
            dataPointsHeight={10}
            textFontSize={15}
            textShiftX={-1}
            spacing={80}
            
            />
          </View>
        </Card>
        {/* pie chat */}
        <Card containerStyle={styles.pieChatContainer}>
          <Card.FeaturedTitle style={{ color: '#425166' }}>
            Tổng điểm hiện tại
          </Card.FeaturedTitle>
          <Card.FeaturedSubtitle style={{ color: '#425166', fontSize: 16 }}>
            Kỳ 2023.2
          </Card.FeaturedSubtitle>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 0}}>
            <PieChart 
              donut
              textColor="black"
              radius={100}
              textSize={15}
              showTextBackground
              textBackgroundRadius={15}
              data={pieData}
              innerRadius={80
              }
              focusOnPress
              centerLabelComponent={() => (
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>70 Điểm</Text>
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
                <Text style={styles.legendText}>30</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[styles.colorBox, { backgroundColor: '#33BFFF' }]} />
                  <Text style={styles.legendText}>Nghiên cứu khoa học</Text>
                </View>
                <Text style={styles.legendText}>25</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[styles.colorBox, { backgroundColor: '#FF54EE' }]} />
                  <Text style={styles.legendText}>Phục vụ</Text>
                </View>
                <Text style={styles.legendText}>15</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[styles.colorBox, { backgroundColor: '#C6CCD1' }]} />
                  <Text style={styles.legendText}>Chưa đạt</Text>
                </View>
                <Text style={styles.legendText}>30</Text>
              </View>
              <View style={styles.legendItem}>
                <Card.FeaturedTitle style={{ color: '#425166' }}>Tổng điểm đạt</Card.FeaturedTitle>
                <Card.FeaturedTitle style={{ color: '#425166' }}>70</Card.FeaturedTitle>
              </View>
          </View>
        </Card>
        {/* chi tiet */}
        <Card containerStyle={styles.detailContainer}>
          <Card.FeaturedTitle style={{ color: '#425166' }}>
            Chi tiết điểm của các tiêu chí
          </Card.FeaturedTitle>
          <Card.FeaturedSubtitle style={{ color: '#425166', fontSize: 16 }}>
            Điểm của từng tiêu chí theo từng tuần
          </Card.FeaturedSubtitle>

          <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginBottom: 20, marginTop: 20 }}>
            <View style={{ flexDirection:'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#306BFF', width: 20, height: 20, borderRadius: 20/2 }}/>
              <Text style={{ marginLeft: 5 }}>Giảng dạy</Text>
            </View>
            <View style={{ flexDirection:'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#33BFFF', width: 20, height: 20, borderRadius: 20/2 }}/>
              <Text style={{ marginLeft: 5 }}>Nghiên cứu</Text>
            </View>
            <View style={{ flexDirection:'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#FF54EE', width: 20, height: 20, borderRadius: 20/2 }}/>
              <Text style={{ marginLeft: 5 }}>Phục vụ</Text>
            </View>
          </View>

          <View>
            <BarChart
                frontColor={'#306BFF'}
                data={barData}
                spacing={30}
                maxValue={50}
                barWidth={12}
                width={275}
                labelWidth={20}
                />
          </View>
            {/* <Card containerStyle={styles.barChart}>
            <Card.FeaturedTitle style={{ color: '#425166' }}>
                Nghiên cứu
              </Card.FeaturedTitle>
              <BarChart
                frontColor={'#33BFFF'}
                barWidth={22}
                data={barData2}
                spacing={30}
                maxValue={35}
                
              />
            </Card>
            <Card containerStyle={styles.barChart}>
            <Card.FeaturedTitle style={{ color: '#425166' }}>
                Phục vụ
              </Card.FeaturedTitle>
              <BarChart
                frontColor={'#FF54EE'}
                barWidth={22}
                data={barData3}
                spacing={30}
                maxValue={15}
                
              />
            </Card> */}
          
        </Card>        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10
    },
    detailContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderRadius: 10
    },
    barChart: {
      width: 320, // Set a fixed width for each card
      marginHorizontal: 10, // Add some horizontal margin between cards
      borderRadius: 5
    },
    pieChatContainer: {
      borderRadius: 8
    },
    cardLineChartContainer: {
      borderRadius: 8,
      display: 'flex',
      justifyContent: 'center'
    
    },
    lineChartContainer: {
      
      alignSelf: 'center'
    },
    text: {
      fontSize: 24,
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
  });