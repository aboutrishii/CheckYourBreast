import React from "react";
import { Text , StyleSheet, View , Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function App({}){
   return(
   <ScrollView style={styles.container}>
      <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/handmov.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Use the pads of three middle fingers (pink areas) to examine every inch of your breast tissue. Move your fingers in small circular and regular movement to cover the entire breast, part by part. Do not lift your fingers from your breast between palpations. You can use powder,lotion or soap to help your fingers glide from one spot to the next.</Text>
        </View>
    </View>

    <View style={styles.card}>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>If you have difficulty using or feeling with the finger pads of one of both hands, try using the thumb, the palm of your hand.
          </Text>
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
     height:350,
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
     paddingHorizontal: 10,
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