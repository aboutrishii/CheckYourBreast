import React from "react";
import { Text , StyleSheet, View , Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Video from "react-native-video";

function App({}){
  const videoUri1=require('../assets/brPal1.mp4')
  const videoUri2=require('../assets/brPal2.mp4')
  const videoUri3=require('../assets/brPal3.mp4')
   return(
   <ScrollView style={styles.container}>
      <View style={styles.card}>
      <View>
         <Video
        source={videoUri1}
        style={styles.video}
        resizeMode="contain"
        controls={true}
        />
      </View>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Use the following search pattern to examine all of your breast tissue. Be sure to palpate carefully beneath the nipple. Women who have had any breast surgery should still examine the entire area and the scar. Any scar should also be carefully examined from end to end. Start in the armpit, proceed downward to the lower boundary. Move a fingerâ€™s width toward the middle and continue palpating at upward until you reach the collarbone. Repeat until you have covered all the breast tissue. Make at least 6 strokes before the nipple and 4 strokes after the nipple. You may need between 10 and 16 strokes to cover all of your breast tissue.</Text>
        </View>
    </View>

    <View style={styles.card}>
     <View>
         <Video
        source={videoUri2}
        style={styles.video}
        resizeMode="contain"
        controls={true}
        />
      </View>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Other search patterns can be used to cover the breast depending on the womanâ€™s personal choice. First alternative is in a circular pattern second is in a triangular pattern; Full coverage of both breasts, one by one, is very important. In this picture you can see the breast palpation in circle pattern.</Text>
        </View>
    </View>

    <View style={styles.card}>
    <View>
         <Video
        source={videoUri3}
        style={styles.video}
        resizeMode="contain"
        controls={true}
        />
      </View>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Breast palpation in triangle pattern.</Text>
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
     borderRadius:15
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
   },
   video: {
    width: '100%',
    height: 400,
  },
   });

export default App;