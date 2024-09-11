import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';


import SelfInspection from './parts/selfInspection';
import prevention from './parts/prevention'
import learnResources from './parts/learnResources'
import breastFeeding from './parts/breastFeeding';

function Homescreen1 ({navigation}){
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Breast Self Inspection')}>
      <Text  style={styles.buttonText}>Breast Self Inspection</Text>
    </TouchableOpacity>

    <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('What Can I do To Reduce Risk Of BreastCancer')}>
      <Text  style={styles.buttonText}>How Can I reduce risk Of Breast Cancer</Text>
    </TouchableOpacity>

    <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Learning')}>
      <Text  style={styles.buttonText}>Learn</Text>
    </TouchableOpacity>

    <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Breast Feeding')}>
      <Text  style={styles.buttonText}>Importance of Breast Feeding</Text>
    </TouchableOpacity>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fc77ba'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin:10
  }
});

export default Homescreen1;
