import { View, Text, SafeAreaView, Image,} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { kid } from '../components'
import ContactInfo from '../assets/ContactInfo'

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect (() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <View>
      <SafeAreaView className="mt-10 relative"> 
        {/*first section*/}
        <View className="flex-row px-7 justify-between items-center">
        <View className="mt-5 space-y-4">
      <Text className="text-[40px] text-[#08646B] font-bold">Training for the blind</Text>
      <Text className="text-[#527283] text-[36px]">Công cụ giúp đỡ</Text>
      <Text className="text-[#08646B] text-[36px]">Trẻ Khiếm Thị</Text>
      <Text className="text-[#527283] text-base">Đây là công cụ hỗ trợ những trẻ em từ 7 đến 8 Tuổi. 
      Gồm các bài tập tăng cường khả năng cảm giác không gian cho trẻ khiếm thị nhằm Rèn luyện ý chí, tinh thần,
      cố gắng trong tập luyện, khả năng cảm giác không gian thông qua nhiều trò chơi khác nhau,  
      nâng cao sự nhận biết của trẻ khiếm thị về năng lực cảm nhận không gian </Text>
      <ContactInfo/>
      </View>
      </View>

      {/*circle*/}
      <View className="w-[350px] h-[350px] -z-10 bg-[#00BCC9] rounded-full absolute bottom-44 left-56"></View>
      <View className="w-[360px] h-[360px] bg-[#e99265] rounded-full absolute top-96 right-64 -z-10"></View>

      {/*image*/}
      <View className="flex-1 relative items-center justify-center">
        <Image source={kid} className="w-full h-full object-cover"/>
      </View>

      {/*go section*/}
        <View className="flex-1 relative items-center justify-center">
          <View className="absolute -bottom-60 w-24 h-24 border-l-2 border-r-2 border-t-4 rounded-full items-center justify-center">
            <TouchableOpacity onPress={() => navigation.navigate("UserInput")}>
            <View className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
            <Text className='text-gray-50 text-[30px] font-semibold'>Go</Text>
          </View>
          </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
    </View>
  )
}



export default HomeScreen