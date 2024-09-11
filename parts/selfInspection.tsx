import React from "react";
import { SafeAreaView, StyleSheet, Text, View   } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


function SelfInspection({navigation}){
  return(
  <SafeAreaView>
   <ScrollView style={styles.mcontainer}>
     <View style={styles.container}>
     <View>
     <Text style={styles.paraText}>
       Breast self-examination (BSE) is a routine examination that should be carried out at the same time each month to physically check for any lumps or other changes. It entails two important components, i.e. looking and feeling. With this method, women should learn what is normal for them, so that they can recognise any changes immediately.
       </Text>
     </View>
       <View>
       <Text style={styles.paraText}>
       Though scientists have concluded that breast self examination is not an effective method of reducing mortality from breast cancer and the vast majority of changes found during breast self-examination are not cancerous, in many countries it may be the only alternative and women should be encouraged to be aware of what is normal breast and recognize changes in their breast, size, shape, skin and nipples as soon as possible by self-examination once in a month or two basis. Most of the breast lumps are detected when women take bath.
       </Text>
       </View>
       <View>
       <Text style={styles.paraText}>
       W.H.O says that National Cancer Control programmes should not recommend mass screening by breast self-examination and physical examinations of the breast. Rather, programmes should encourage breast awareness and early diagnosis of breast cancer, especially for women aged 40-69 years attending primary health care centres or hospitals for other reasons, by offering them clinical breast examinations.
     </Text>
       </View>
    </View>
    <Text style={styles.highlight}>FOLLOW ALL 8 STEPS SINCERELY  : </Text>
    <View>
       <TouchableOpacity style={styles.button} onPress={() =>  navigation.navigate('Position')}>
        <Text style={styles.buttonText}>1.Position</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.button} onPress={() =>  navigation.navigate('Hand Movement')}>
        <Text style={styles.buttonText}>2.Hand Movement</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.button} onPress={() =>  navigation.navigate('Palpation Parameter')}>
        <Text style={styles.buttonText}>3.Palpation Parameter</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() =>  navigation.navigate('Pressure Level')}>
        <Text style={styles.buttonText}>4.Pressure Level</Text>
      </TouchableOpacity>

      
     
      <TouchableOpacity  style={styles.button} onPress={() =>  navigation.navigate('Breast Palpation')}>
        <Text style={styles.buttonText}>5.Breast Palpation</Text>
      </TouchableOpacity>
      
      <TouchableOpacity  style={styles.button} onPress={() =>  navigation.navigate('Axillary Examination')}>
        <Text style={styles.buttonText}>6.Axillary Examination</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.button} onPress={() =>  navigation.navigate('Check For Nipple Discharge')}>
        <Text style={styles.buttonText}>7.Check For Nipple Discharge on nipple</Text>
      </TouchableOpacity>
         
      <TouchableOpacity  style={styles.button} onPress={() =>  navigation.navigate('Breast Abnormalities')}>
        <Text style={styles.buttonText}>8.Breast Abnormalities</Text>
      </TouchableOpacity>

      
       </View>
    </ScrollView>
    
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 mcontainer:{
  backgroundColor:'#fc77ba'
 },
  button: {
    backgroundColor: '#007BFF',
    margin:5,
    paddingVertical:5,
    borderRadius: 10,
     alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight:'bold'
  },
  paraText:{
     color:'black',
     fontSize:18
  },
  container:{
    marginLeft:10,
    padding:11,
  },
  highlight:{
   paddingLeft:4,
   margin:10,
   fontSize: 20,
   fontWeight:'bold',
   color:'red',
   textDecorationLine:"underline"
    },
});

export default SelfInspection;