import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import BoxwithText from '../components/BoxwithText';
import { AntDesign } from '@expo/vector-icons'; 
import Sound2 from '../assets/Sound2';

const Excercise2 = () => {

  const navigation = useNavigation();

useLayoutEffect (() => {
  navigation.setOptions({
    headerShown: false,
  })
})

  return (
    <SafeAreaView>
      {/*first*/}
        <View className= "flex-row px-5 - mt-5 items-center space-x-64">
          <View className="items-center justify-center">
          </View>
          <Text className="text-[#2A2B4B] text-l font-semibold">Training for the blind</Text>
        </View>

        {/*Second section*/}
        <View className="items-center px-6 mt-5 space-y-4">
          <Text className=" text-[#3C6072] text-[30px]">Bài tập 2: Bài tập kéo dãn cơ</Text>
          </View>
          <View className=" px-6 mt-4 space-y-5">
          <Text className="text-[#00BCC9] text-[26px]"> Nhóm: mù </Text>
          <Text className="text-[#00BCC9] text-[26px]"> Đối tượng: Nữ </Text>
          <Text className="text-[#00BCC9] text-[26px]"> Tuổi: 7 </Text>
        </View>

        <View className="px-8 mt-3">
         <BoxwithText></BoxwithText>
         </View>

         <View className="px-5 mt-8 space-x-10 flex-row items-center justify-center">
          <TouchableOpacity onPress={() => navigation.navigate("Excercise1")}>
         <AntDesign name="banckward" size={56} color="#00BCC9" />
         </TouchableOpacity>
         <View className=" space-x-3">
          <Sound2/>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Excercise3")}>
         <AntDesign name="forward" size={56} color="#00BCC9" />
         </TouchableOpacity>         
         </View>
    </SafeAreaView>
  )
}

export default Excercise2