import { Image, StyleSheet, SafeAreaView, Text, FlatList, View, Platform, Dimensions, ScrollView } from 'react-native';
import { Card } from '@rneui/themed';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function OverviewScreen() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.row}>
          <Card containerStyle={[styles.card, styles.card1]}>
            <View style={styles.cardContainer}>
              <Image 
                style={styles.cardImage} 
                source={require('@/assets/images/card1.png')}
                resizeMode="contain" 
              /> 
              <Card.FeaturedTitle style={{ color: '#3CD856' }}>
                3 Đã xong
              </Card.FeaturedTitle>
              <Card.FeaturedSubtitle style={{ color: '#8F8F90', fontSize: 12 }}>
                Trong vòng 7 ngày qua 🎉
              </Card.FeaturedSubtitle>
            </View>
          </Card>
          <Card containerStyle={[styles.card, styles.card2]}>
            <View style={styles.cardContainer}>
                <Image 
                  style={styles.cardImage} 
                  source={require('@/assets/images/card2.png')}
                  resizeMode="contain" 
                /> 
                <Card.FeaturedTitle style={{ color: '#61D3F1' }}>
                  3 Đã cập nhật
                </Card.FeaturedTitle>
                <Card.FeaturedSubtitle style={{ color: '#8F8F90', fontSize: 12 }}>
                  Trong vòng 7 ngày qua
                </Card.FeaturedSubtitle>
              </View>
          </Card>
        </View>
        <View style={styles.row}>
          <Card containerStyle={[styles.card, styles.card3]}>
            <View style={styles.cardContainer}>
                <Image 
                  style={styles.cardImage} 
                  source={require('@/assets/images/card3.png')}
                  resizeMode="contain" 
                /> 
                <Card.FeaturedTitle style={{ color: '#859BFF' }}>
                  3 Đã tạo mới
                </Card.FeaturedTitle>
                <Card.FeaturedSubtitle style={{ color: '#8F8F90', fontSize: 12 }}>
                  Trong vòng 7 ngày qua
                </Card.FeaturedSubtitle>
              </View>
          </Card>
          <Card containerStyle={[styles.card, styles.card4]}>
            <View style={styles.cardContainer}>
                <Image 
                  style={styles.cardImage} 
                  source={require('@/assets/images/card4.png')}
                  resizeMode="contain" 
                /> 
                <Card.FeaturedTitle style={{ color: '#425166' }}>
                  2 Quá hạn
                </Card.FeaturedTitle>
                <Card.FeaturedSubtitle style={{ color: '#8F8F90', fontSize: 12 }}>
                  Trong vòng 7 ngày qua
                </Card.FeaturedSubtitle>
              </View>
          </Card>
        </View>
        <Card containerStyle={styles.card}>
          <Card.FeaturedTitle style={{ color: '#425166' }}>Tổng quan trạng thái</Card.FeaturedTitle>
          <Card.FeaturedSubtitle style={{ color: '#8F8F90', fontSize: 12 }}>
                  Trong 14 ngày qua
          </Card.FeaturedSubtitle>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ resizeMode:'contain', aspectRatio: 1, width: '80%', height: undefined }} source={require('@/assets/images/bieudotron.png')}/>
          </View>
          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.colorBox, { backgroundColor: '#59D9A4' }]} />
                <Text style={styles.legendText}>Đã hoàn thành</Text>
              </View>
              <Text style={styles.legendText}>3</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.colorBox, { backgroundColor: '#FF7553' }]} />
                <Text style={styles.legendText}>Chờ phản hồi</Text>
              </View>
              <Text style={styles.legendText}>4</Text>
            </View>

            <View style={styles.legendItem}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.colorBox, { backgroundColor: '#2784FF' }]} />
                <Text style={styles.legendText}>Đang tiến hành</Text>
              </View>
              <Text style={styles.legendText}>6</Text>
            </View>

            <View style={styles.legendItem}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.colorBox, { backgroundColor: '#C6CCD1' }]} />
                <Text style={styles.legendText}>Việc cần làm</Text>
              </View>
              <Text style={styles.legendText}>10</Text>
            </View>
            <View style={styles.legendItem}>
              <Card.FeaturedTitle style={{ color: '#425166' }}>Tổng</Card.FeaturedTitle>
              <Card.FeaturedTitle style={{ color: '#425166' }}>23</Card.FeaturedTitle>
            </View>
            
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    // marginTop: 5
    
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 8,
    height: '80%'
  },
  cardContainer: {
    
    justifyContent: 'flex-start'
    
  },
  card1: {
    backgroundColor: '#DCFCE7'
  },
  card2: {
    backgroundColor: '#E1F4F9'
  },
  card3: {
    backgroundColor: '#CFD6F6'
  },
  card4: {
    backgroundColor: '#C6CCD1'
  },
  cardImage: {
    width: '100%',
    height: 30, // Adjust the height as needed
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
