import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GA = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const handleBoxPress = (label) => {
    // Handle box press here
    if (label === 'GA1') {
      navigation.navigate('Excercise1');
    } else {
      console.log('Selected Box:', label);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}></View>
        <Text style={styles.headerText}>Training for the blind</Text>
      </View>

      <View style={styles.backgroundView}></View>
      <View style={styles.backgroundView2}></View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>Chọn Giáo Án(GA): Nữ - Mù - 7</Text>
      </View>

      <View style={styles.boxesContainer}>
        <View style={styles.boxRow}>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA1')}>
            <Text style={styles.boxLabel}>GA1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA2')}>
            <Text style={styles.boxLabel}>GA2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA3')}>
            <Text style={styles.boxLabel}>GA3</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxRow}>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA4')}>
            <Text style={styles.boxLabel}>GA4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA5')}>
            <Text style={styles.boxLabel}>GA5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA6')}>
            <Text style={styles.boxLabel}>GA6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxRow}>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA7')}>
            <Text style={styles.boxLabel}>GA7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA8')}>
            <Text style={styles.boxLabel}>GA8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA9')}>
            <Text style={styles.boxLabel}>GA9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxRow}>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA10')}>
            <Text style={styles.boxLabel}>GA10</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA11')}>
            <Text style={styles.boxLabel}>GA11</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA12')}>
            <Text style={styles.boxLabel}>GA12</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxRow}>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA13')}>
            <Text style={styles.boxLabel}>GA13</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA14')}>
            <Text style={styles.boxLabel}>GA14</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA15')}>
            <Text style={styles.boxLabel}>GA15</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxRow}>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA16')}>
            <Text style={styles.boxLabel}>GA16</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA17')}>
            <Text style={styles.boxLabel}>GA17</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA18')}>
            <Text style={styles.boxLabel}>GA18</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxRow}>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA19')}>
            <Text style={styles.boxLabel}>GA19</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA20')}>
            <Text style={styles.boxLabel}>GA20</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA21')}>
            <Text style={styles.boxLabel}>GA21</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxRow}>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA22')}>
            <Text style={styles.boxLabel}>GA22</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA23')}>
            <Text style={styles.boxLabel}>GA23</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA24')}>
            <Text style={styles.boxLabel}>GA24</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxRow}>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA25')}>
            <Text style={styles.boxLabel}>GA25</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA26')}>
            <Text style={styles.boxLabel}>GA26</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA27')}>
            <Text style={styles.boxLabel}>GA27</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxRow}>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA28')}>
            <Text style={styles.boxLabel}>GA28</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA29')}>
            <Text style={styles.boxLabel}>GA29</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('GA30')}>
            <Text style={styles.boxLabel}>GA30</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginTop: -10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#2A2B4B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    alignItems: 'center',
    paddingHorizontal: 6,
    marginTop: 50,
    marginBottom: 20,
  },
  sectionText: {
    color: '#3C6072',
    fontSize: 36,
  },
  boxesContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  boxRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#00BCC9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  boxLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundView: {
    width: 360,
    height: 360,
    backgroundColor: '#e99265',
    borderRadius: 180,
    position: 'absolute',
    top: -80,
    right: 154,
    zIndex: -1,
  },
  backgroundView2: {
    width: 350,
    height: 350,
    backgroundColor: '#c779ba',
    borderRadius: 175,
    position: 'absolute',
    bottom: -80,
    left: 120,
    zIndex: -1,
  },
});

export default GA;


