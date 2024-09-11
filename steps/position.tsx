import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";

function App({}){
   return(
     <ScrollView style={styles.container}>
     <View>
      <View style={styles.card}>
        <Image style={styles.image}
        source={{uri:"https://screening.iarc.fr/breast/position1.jpg"}}/>
        <View style={styles.cardText}>
          <Text style={styles.textDec}>One important component during breast examination is the position. Depending on whether looking at or feeling their breast, women should select different options. Use of a mirror and a proper light system facilitate detection of abnormalities. Breast self examination can be done either in the sitting or lying down position (dusting the hand with powder or using cream).
          In this picture the subject has both arms folded down.</Text>
        </View>
    </View>
    <View style={styles.card}>
        <Image style={styles.image}
        source={{uri:"https://screening.iarc.fr/breast/position2.jpg"}}/>
        <View style={styles.cardText}>
          <Text style={styles.textDec}>Both arms placed over your waist: Place your hands on your waist and press inward, and turn side to side to note any changes.</Text>
        </View>
    </View>
    <View style={styles.card}>
        <Image style={styles.image}
        source={{uri:"https://screening.iarc.fr/breast/position3.jpg"}}/>
        <View style={styles.cardText}>
          <Text style={styles.textDec}>Both arms raised above head: Place your hands behind your head and press forward. Again, turn side to side an look for changes.</Text>
        </View>
    </View>
    <View style={styles.card}>
        <Image style={styles.image}
        source={{uri:"https://screening.iarc.fr/breast/position4.jpg"}}/>
        <View style={styles.cardText}>
          <Text style={styles.textDec}>Slightly bending forward with arms over waist: Place your hands at your waist and bow toward the mirror, letting the breasts fall forward. Note any change in shape.</Text>
        </View>
    </View>
    <View style={styles.card}>
        <Image style={styles.image}
        source={{uri:"https://screening.iarc.fr/breast/position5.jpg"}}/>
        <View style={styles.cardText}>
          <Text style={styles.textDec}>Woman in sitting position.</Text>
        </View>
    </View>
    <View style={styles.card}>
        <Image style={styles.image}
        source={{uri:"https://screening.iarc.fr/breast/position6.jpg"}}/>
        <View style={styles.cardText}>
          <Text style={styles.textDec}>Lie flat on your back with a pillow or folded towel under the shoulder of the breast to be examined and use the opposite hand of the breast you would like to examined.</Text>
        </View>
    </View>
  </View>
     </ScrollView>
   );
}


const styles = StyleSheet.create({
container:{
  backgroundColor:"#fc77ba",
},
image:{
  height:370,
  width:'100%',
  borderRadius:0
},
card:{
  alignSelf: 'center', 
  backgroundColor: '#fff',
  borderRadius: 10,
  overflow: 'hidden',
  marginVertical: 10,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  width: '94%',
  paddingHorizontal: 11,
  paddingVertical: 20, 
},
cardText:{
  margin:8
},
textDec:{
  color:'black',
  fontFamily:'bold',
  fontSize:18
}
});

export default App;