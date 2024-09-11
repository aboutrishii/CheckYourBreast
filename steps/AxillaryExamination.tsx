import React from "react";
import { Text , StyleSheet, View , Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Video from "react-native-video";

function App({}){
  const videoUri = require('../assets/axExam.mp4')
   return(
   <ScrollView style={styles.container}>
      <View style={styles.card}>
      <View>
         <Video
        source={videoUri}
        style={styles.video}
        resizeMode="contain"
        controls={true}
        />
      </View>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Examination of the armpits.</Text>
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
    height:400
  }
   });

export default App;