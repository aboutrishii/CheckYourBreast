import React from "react";
import {StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native'
import { useNavigation } from "@react-navigation/native"

import HomeScreen1 from "./HomeScreen1";
import HomeScreen2 from './HomeScreen2';


function Home({navigation}){
   return (
   <View style={styles.container}>
     <View>
     <View>
      <TouchableOpacity onPress={() => navigation.navigate('Female Breast Cancer')}>
         <Image style={styles.logo}
         source={{uri:'https://cdn-icons-png.flaticon.com/128/6997/6997662.png'}}
         />
       </TouchableOpacity>
       <Text style={styles.buttonText}>Female</Text>
       </View>
    
       <View>
      <TouchableOpacity onPress={() => navigation.navigate('Male Breast Cancer')}>
      <Image style={styles.logo}
         source={{uri:'https://cdn-icons-png.flaticon.com/128/6997/6997551.png'}}
         />
      </TouchableOpacity>
      <Text style={styles.buttonText} >Male</Text>
       </View>
    </View>
 </View>
   );
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
       backgroundColor:'#fc77ba',

   },
   buttonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf:'center'
    },
    
    logo:{
     height:150,
     width:150,
     margin:20
     
    }
    
});

export default Home;