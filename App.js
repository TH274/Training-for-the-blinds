import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Excercise2 from './screens/Excercise2';
import Excercise3 from './screens/Excercise3';
import Excercise4 from './screens/Excercise4';
import Excercise5 from './screens/Excercise5';
import userinput from './screens/Userinput';
import Excercise7 from './screens/Excercise7';
import Excercise9 from './screens/Excercise9';
import Excercise10 from './screens/Excercise10';
import Excercise11 from './screens/Excercise11';
import Excercise12 from './screens/Excercise12';
import Excercise13 from './screens/Excercise13';
import UserInfo from './screens/UserInfo';
import Excercise1 from './screens/Excercise1';
import GA from './screens/GA';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
         <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserInput" component={userinput} />
        <Stack.Screen name="GA" component={GA} />
        <Stack.Screen name="Excercise1" component={Excercise1} />
        <Stack.Screen name="Excercise2" component={Excercise2} />
        <Stack.Screen name="Excercise3" component={Excercise3} />
        <Stack.Screen name="Excercise4" component={Excercise4} />
        <Stack.Screen name="Excercise5" component={Excercise5} />
        <Stack.Screen name="Excercise7" component={Excercise7} />
        <Stack.Screen name="Excercise9" component={Excercise9} />
        <Stack.Screen name="Excercise10" component={Excercise10} />
        <Stack.Screen name="Excercise11" component={Excercise11} />
        <Stack.Screen name="Excercise12" component={Excercise12} />
        <Stack.Screen name="Excercise13" component={Excercise13} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
root: {
  flex: 1,
  backgroundColor: '#F9FBFC'
},
});

