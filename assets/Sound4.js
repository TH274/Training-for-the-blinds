import { useState, useEffect, soundObject } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';

const Sound4 = () => {
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    async function playSound() {
      console.log('Loading Sound');
      const soundObject = new Audio.Sound();
    const uri = require('./N7GA1/4.mp3');
    try {
      await soundObject.loadAsync(uri);
      setSound(soundObject);
      setIsPlaying(true);
  
      console.log('Playing Sound');
      await soundObject.playAsync();
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
    useEffect(() => {
      return () => {
        if (sound) {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      };
    }, [sound]);
  
    async function stopSound() {
      console.log('Stopping Sound');
      if (sound) {
        await sound.stopAsync();
        setIsPlaying(false);
      }
    }
  
  
    return (
      <>
      <TouchableOpacity onPress={isPlaying ? stopSound : playSound}>
        <AntDesign
          name={isPlaying ? 'pausecircle' : 'caretright'}
          size={56}
          color="#00BCC9"
        />
      </TouchableOpacity>
    </>
    );
  };

export default Sound4;