import { StyleSheet, Image, Platform, Text, View, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useRef } from 'react';
import Modal from 'react-native-modal';
import { TextInput } from '@/components/Themed';
import SelectDropdown from 'react-native-select-dropdown';
import RNPickerSelect from 'react-native-picker-select';

export default function BoardScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (

      <ScrollView>
        
          <View style={{ flexDirection: 'column', marginTop: 10 }}>
            <Button style={styles.button} title='Thêm task' onPress={toggleModal}/>
            <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
              
              <View style={styles.taskContainer}>
                {/* Card to do */}
                
                <Card containerStyle={[styles.taskCard, styles.taskCard1]}>
                  <View style={styles.subtitleContainer}>
                    <Card.FeaturedSubtitle style={{ 
                        color: '#42516D', 
                        backgroundColor: '#E0E0E5',
                        padding: 2,
                        fontWeight: 'bold'
                      }}>
                        VIỆC CẦN LÀM
                    </Card.FeaturedSubtitle>
                    <Card.FeaturedSubtitle style={{
                      color: '#42516D',
                      padding: 2,
                      fontSize: 15,
                      fontWeight: 'heavy'
                    }}>
                      10
                    </Card.FeaturedSubtitle>
                  </View>
                  <View style={styles.doCardContainer}>
                  <TouchableOpacity onPress={toggleModal}>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Thiết kế lại bài giảng tuần 2
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#306BFF', fontSize: 15, backgroundColor: '#F0F4FF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Giảng dạy
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Tổ chức Seminar tháng 10
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#33BFFF', fontSize: 15, backgroundColor: '#F0FAFF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Nghiên cứu
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Gặp gỡ lãnh đạo MB Bank
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#FF54EE', fontSize: 15, backgroundColor: '#FCE1FF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Phục vụ
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                  </TouchableOpacity>
                  </View>
                </Card>
                {/* Card in process */}
                <Card containerStyle={[styles.taskCard, styles.taskCard1]}>
                  <View style={styles.subtitleContainer}>
                    <Card.FeaturedSubtitle style={{ 
                        color: '#2784FF', 
                        backgroundColor: '#E3EFFF',
                        padding: 2,
                        fontWeight: 'bold'
                      }}>
                        ĐANG TIẾN HÀNH
                    </Card.FeaturedSubtitle>
                    <Card.FeaturedSubtitle style={{
                      color: '#42516D',
                      padding: 2,
                      fontSize: 15,
                      fontWeight: 'heavy'
                    }}>
                      6
                    </Card.FeaturedSubtitle>
                  </View>
                  <View style={styles.doCardContainer}>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Thiết kế lại bài giảng tuần 2
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#306BFF', fontSize: 15, backgroundColor: '#F0F4FF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Giảng dạy
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Tổ chức Seminar tháng 10
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#33BFFF', fontSize: 15, backgroundColor: '#F0FAFF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Nghiên cứu
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Gặp gỡ lãnh đạo MB Bank
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#FF54EE', fontSize: 15, backgroundColor: '#FCE1FF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Phục vụ
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Gặp gỡ lãnh đạo MB Bank
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#FF54EE', fontSize: 15, backgroundColor: '#FCE1FF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Phục vụ
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Gặp gỡ lãnh đạo MB Bank
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#FF54EE', fontSize: 15, backgroundColor: '#FCE1FF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Phục vụ
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                  </View>
                </Card>
                {/* CHO PHAN HOI */}
                <Card containerStyle={[styles.taskCard, styles.taskCard1]}>
                  <View style={styles.subtitleContainer}>
                    <Card.FeaturedSubtitle style={{ 
                        color: '#FF7553', 
                        backgroundColor: '#FFDFD7',
                        padding: 2,
                        fontWeight: 'bold'
                      }}>
                        CHỜ PHẢN HỒI
                    </Card.FeaturedSubtitle>
                    <Card.FeaturedSubtitle style={{
                      color: '#42516D',
                      padding: 2,
                      fontSize: 15,
                      fontWeight: 'heavy'
                    }}>
                      4
                    </Card.FeaturedSubtitle>
                  </View>
                  <View style={styles.doCardContainer}>
                  <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Gặp gỡ lãnh đạo MB Bank
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#FF54EE', fontSize: 15, backgroundColor: '#FCE1FF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Phục vụ
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Thiết kế lại bài giảng tuần 2
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#306BFF', fontSize: 15, backgroundColor: '#F0F4FF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Giảng dạy
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Tổ chức Seminar tháng 10
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#33BFFF', fontSize: 15, backgroundColor: '#F0FAFF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Nghiên cứu
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Gặp gỡ lãnh đạo MB Bank
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#FF54EE', fontSize: 15, backgroundColor: '#FCE1FF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Phục vụ
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                  </View>
                </Card>
                {/* DA HOAN THANH */}
                <Card containerStyle={[styles.taskCard, styles.taskCard1]}>
                  <View style={styles.subtitleContainer}>
                    <Card.FeaturedSubtitle style={{ 
                        color: '#59D9A4', 
                        backgroundColor: '#E4FFF4',
                        padding: 2,
                        fontWeight: 'bold'
                      }}>
                        ĐÃ HOÀN THÀNH
                    </Card.FeaturedSubtitle>
                    <Card.FeaturedSubtitle style={{
                      color: '#42516D',
                      padding: 2,
                      fontSize: 15,
                      fontWeight: 'heavy'
                    }}>
                      3
                    </Card.FeaturedSubtitle>
                  </View>
                  <View style={styles.doCardContainer}>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Thiết kế lại bài giảng tuần 2
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#306BFF', fontSize: 15, backgroundColor: '#F0F4FF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Giảng dạy
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Tổ chức Seminar tháng 10
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#33BFFF', fontSize: 15, backgroundColor: '#F0FAFF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Nghiên cứu
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                    <Card containerStyle={styles.doCard}>
                      <Card.FeaturedSubtitle style={{ color: '#42516D', fontSize: 15 }}>
                        Gặp gỡ lãnh đạo MB Bank
                      </Card.FeaturedSubtitle>
                      <Card.FeaturedSubtitle style={{ color: '#FF54EE', fontSize: 15, backgroundColor: '#FCE1FF', alignSelf: 'flex-start', fontWeight: 'bold' }}>
                        #Phục vụ
                      </Card.FeaturedSubtitle>
                      <View style={{ flexDirection:  'row' }}>
                        <Image source={require('@/assets/images/lich.png')} style={{ width: '8%', height: 20 }} />
                        <Text style={{ color: '#8F8F90', padding: 3, marginLeft: 3 }}>23/9/2024</Text>
                      </View>
                    </Card>
                  </View>
                </Card>
              </View>
              
              
            </ScrollView>
            {/* Modal */}
            <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
              <Card containerStyle={{
                borderRadius: 8
              }}>
                <Text>Tên công việc</Text>
                <TextInput style={styles.input}></TextInput>
                <Text>Ngày</Text>
                <TextInput style={styles.input} placeholder='01/01/2024'></TextInput>
                <Text>
                  Chọn tiêu chí đánh giá
                </Text>
                <View style={styles.input}>
                <RNPickerSelect 
                  onValueChange={(value) => setSelectedValue(value)}
                  placeholder={{}}
                  value={1}
                  items={[
                  { label: '#Giảng dạy', value: 1 },
                  { label: '#Nghiên cứu khoa học', value: 2 },
                  { label: '#Phục vụ', value: 3 },
                  ]}
                />
                </View>

                
                <Text style={{ marginTop: 10 }}>
                  Chọn tiến trình
                </Text>
                <View style={styles.input}>
                <RNPickerSelect
                  onValueChange={(value) => setSelectedValue(value)}
                  value={1}
                  items={[
                  { label: '#Việc cần làm', value: 1 },
                  { label: '#Đang tiến hành', value: 2 },
                  { label: '#Chờ phản hồi', value: 3 },
                  { label: '#Đã hoàn thành', value: 4 }
                  ]}
                />
                </View>
                <Text style={{ marginTop: 5 }}>
                  Mô tả
                </Text>
                <TextInput style={styles.des} placeholder='...'></TextInput>
                <Text>Điểm KPI</Text>
                <View style={styles.input}>
                <RNPickerSelect
                  onValueChange={(value) => setSelectedValue(value)}
                  value={1}
                  items={[
                  { label: '2', value: 1 },
                  { label: '5', value: 2 },
                  { label: '10', value: 3 },
                  { label: '15', value: 4 }
                  ]}
                />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                
                <TouchableOpacity
                    onPress={toggleModal}
                    // style={[style]}
                    style={styles.button3}
                  >
                    <Text style={styles.buttonText}>Hủy</Text>
                </TouchableOpacity>
                <Button title="Xác nhận" onPress={toggleModal} />
                </View>
                
              </Card>
              
                
              
            </Modal>
          </View>
          
          
      </ScrollView>

  );
}

const Button = ({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: () => void;
  style?: any;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      // style={[style]}
      style={styles.button2}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    
  },
  des: {
    height: 70,
    margin: 3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    
  },
  scrollViewContent: {
    justifyContent: 'flex-start', // Align items to the top
    
  },
  taskContainer: {
    flexDirection: 'row', // Arrange cards in a row
    alignItems: 'flex-start', // Align items to the start (top) of the container
    marginVertical: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 0
  },
  taskCard: {
    width: 300, // Set a fixed width for each card
    marginHorizontal: 10, // Add some horizontal margin between cards
    borderRadius: 5
  },
  subtitleContainer:{
    alignSelf: 'flex-start',
    flexDirection: 'row'
    
  },
  doCardContainer: {
    
  },
  taskCard1: {
    // backgroundColor: '#F4F5F7',
    
  },
  doCard:{
    
    marginLeft: 0,
    marginRight: 0
  },
  button: {
    width: 30
  },
  button2: {
    backgroundColor: '#3B82F6',
    borderRadius: 8, // Giảm bán kính để làm cho nút nhỏ hơn
    paddingHorizontal: 6, // Giảm giá trị để làm cho nút nhỏ hơn ngang
    paddingVertical: 8, // Giảm giá trị để làm cho nút nhỏ hơn dọc
    width: 100,
    marginLeft: 10
  },
  button3: {
    backgroundColor: '#DC3545',
    borderRadius: 8, // Giảm bán kính để làm cho nút nhỏ hơn
    paddingHorizontal: 6, // Giảm giá trị để làm cho nút nhỏ hơn ngang
    paddingVertical: 8, // Giảm giá trị để làm cho nút nhỏ hơn dọc
    width: 100,
    marginLeft: 10
  },
  buttonText: {
    color: '#FFFFFF', // text-white in Tailwind
    textAlign: 'center', // text-center in Tailwind
    fontSize: 16
  },
});
