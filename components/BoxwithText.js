import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoxwithText = () => {
  return (
    <View style={styles.container}>
      <View className="space-y-3">
        <Text className="text-[25px] text-[#3C6072] ">Transcript:</Text>
        <Text className="text-[18px] text-[#3C6072]">Đây là công cụ hỗ trợ những trẻ em từ 7 đến 8 Tuổi. 
      Gồm các bài tập tăng cường khả năng cảm giác không gian cho trẻ khiếm thị nhằm Rèn luyện ý chí, tinh thần,
      cố gắng trong tập luyện, khả năng cảm giác không gian thông qua nhiều trò chơi khác nhau,  
      nâng cao sự nhận biết của trẻ khiếm thị về năng lực cảm nhận không gian</Text>
      </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#fff',
    width: 350, 
    height: 320, 
    borderWidth: 1, 
    borderColor: '#000', 
    },
  });

export default BoxwithText