import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

const Custominput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="placeholder" style={styles.input}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        padding: 15,
    },
    input: {},

});

export default Custominput