import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons'; 
import * as Speech from 'expo-speech';

const SpeechRecognition = () => {
  const [recognizedText, setRecognizedText] = useState('');

  const startSpeechRecognition = async () => {
    try {
      await Speech.requestPermissionsAsync();
      await Speech.startListeningAsync({ language: 'en-US' }, (result) => {
        setRecognizedText(result.transcription);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={startSpeechRecognition}>
      <AntDesign name="sound" size={32} color="#00BCC9" />
      </TouchableOpacity>
      <Text>{recognizedText}</Text>
    </View>
  );
};

export default SpeechRecognition;
