import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonCustom = ({
  title,
  onPress,
  style,
  textStyle,
}: {
  title: string;
  onPress: () => void;
  style?: any;
  textStyle?: any;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: '#3B82F6',
          borderRadius: 8, // Giảm bán kính để làm cho nút nhỏ hơn
          paddingHorizontal: 6, // Giảm giá trị để làm cho nút nhỏ hơn ngang
          paddingVertical: 8, // Giảm giá trị để làm cho nút nhỏ hơn dọc
          width: 100,
          marginLeft: 10,
        },
        style, // Truyền style từ props vào đây
      ]}
    >
      <Text
        style={[
          {
            color: '#FFFFFF', // text-white in Tailwind
            textAlign: 'center', // text-center in Tailwind
            fontSize: 16,
          },
          textStyle, // Truyền textStyle từ props vào đây
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
