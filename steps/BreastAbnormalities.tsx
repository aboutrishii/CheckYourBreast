import React from "react";
import { Text , StyleSheet, View , Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function App({}){
   return(
   <ScrollView style={styles.container}>
      <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/lump.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Lumps, bumps or thickening: Feel for a lump, bump or thickening that has not been there before.</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/lump2.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Lumps, bumps or thickening: Feel for a lump, bump or thickening that has not been there before.</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/lump3.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>	Lumps, bumps or thickening: Feel for a lump, bump or thickening that has not been there before.</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/pain.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Pain (only when it is a new and persistent pain report to doctor).</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/peauorange.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Change in skin color or texture: Peau d'orange.</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/redness1.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Change in skin color or texture: redness / eczema (beginning).</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/redness2.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Change in skin color or texture: redness / eczema (advanced).</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/blooddischarge.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Leaking: Look for dripping, leaking or discharge from a nipple (blood discharge).</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/blooddischarge.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Leaking: Look for dripping, leaking or discharge from a nipple (Greenish discharge).</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/aerolachange.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>	Nipple change: Look for a change in the way your nipple is pointing: Aerola change.</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/aerolachange2.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Nipple change: Look for a change in the way your nipple is pointing: Another aerola change.</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/retraction.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>	Nipple change: Look for a change in the way your nipple is pointing: nipple retraction (beginning).</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/retraction2.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Nipple change: Look for a change in the way your nipple is pointing: nipple retraction (advanced).</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/dimpling.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Dimpling/puckering: Look for any dimpling or puckering in the breast.</Text>
        </View>
    </View>

    <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://screening.iarc.fr/breast/dimpling2.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>Dimpling/puckering: Look for any dimpling or puckering in the breast.</Text>
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