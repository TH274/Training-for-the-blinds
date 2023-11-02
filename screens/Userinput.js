import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'; 
import SpeechRecognition from '../components/SpeechRecognition';

const UserInput = () => {

  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const navigation = useNavigation();

  useLayoutEffect (() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  const handlePress = () => {
    if ( group === 'Mù' && gender === 'Nữ' && age === '7'){
    navigation.navigate("GA", { group, gender, age });
    } else if ( group === 'Lòa' && gender === 'Nam' && age === '8'){
      navigation.navigate("GA", { group, gender, age });
    } else if ( group === 'Mù' && gender === 'Nam' && age === '8'){
      navigation.navigate("Excercise2", { group, gender, age });
    } else if ( group === 'Mù' && gender === 'Nữ' && age === '8'){
      navigation.navigate("Excercise3", { group, gender, age });
    } else if ( group === 'Mù' && gender === 'Nam' && age === '7'){
      navigation.navigate("Excercise7", { group, gender, age });
    } else {
      navigation.navigate("Excercise10", { group, gender, age });
    }
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 30, paddingTop: 50, backgroundColor: '#FFF' }}>
      {/*first*/}
      <View style={{ flexDirection: 'row', paddingHorizontal: 5, marginTop: -10, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        </View>
        <Text style={{ color: '#2A2B4B', fontSize: 18, fontWeight: 'bold' }}>Training for the blind</Text>
      </View>

      {/*Second section*/}
      <View style={{ alignItems: 'center', paddingHorizontal: 6, marginTop: 25, marginBottom: 20 }}>
        <Text style={{ color: '#3C6072', fontSize: 34 }}>Điền Thông tin cá nhân</Text>
      </View>
      <View className=" mx-2 mt-7 space-y-5">
      <Text style={{ color: '#00BCC9', fontSize: 20 }}>Họ và tên:</Text>
        <TextInput value={name} onChangeText={setName} style={{ height: 40, borderColor: '#00BCC9', borderWidth: 1, paddingHorizontal: 5, marginBottom: 5 }} />
        <Text style={{ color: '#00BCC9', fontSize: 20 }}>Đối tượng:</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => setGender('Nữ')} style={{marginHorizontal: 10}}>
          <Text style={{color: '#2A2B4B', fontSize: 26, fontWeight: gender === 'Nữ' ? 'bold' : 'normal'}}>Nữ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('Nam')}>
          <Text style={{color: '#2A2B4B', fontSize: 26, fontWeight: gender === 'Nam' ? 'bold' : 'normal'}}>Nam</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: '#00BCC9', fontSize: 20 }}>Mức độ khiếm thị:</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => setGroup('Mù')} style={{marginHorizontal: 10}}>
          <Text style={{color: '#2A2B4B', fontSize: 26, fontWeight: group === 'Mù' ? 'bold' : 'normal'}}>Mù</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGroup('Lòa')}>
          <Text style={{color: '#2A2B4B', fontSize: 26, fontWeight: group === 'Lòa' ? 'bold' : 'normal'}}>Mù Lòa</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: '#00BCC9', fontSize: 20 }}>Tuổi:</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => setAge('7')} style={{marginHorizontal: 10}}>
          <Text style={{color: '#2A2B4B', fontSize: 26, fontWeight: age === '7' ? 'bold' : 'normal'}}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAge('8')}>
          <Text style={{color: '#2A2B4B', fontSize: 26, fontWeight: age === '8' ? 'bold' : 'normal'}}>8</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={{ paddingHorizontal: 8 }}>
        {/* Placeholder for your BoxwithText component */}
      </View>

      <View className="w-[360px] h-[360px] bg-[#5fda79] rounded-full absolute -top-36 left-48 -z-10"></View>

      <View style={{ paddingHorizontal: 8, marginTop: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircleo" size={48} color="#00BCC9" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={{ color: '#00BCC9', fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Submit</Text>
          </TouchableOpacity>
        </View>
        <SpeechRecognition/>
        </View>
        </View>
  )
}


export default UserInput