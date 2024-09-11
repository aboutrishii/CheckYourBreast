import React from 'react';
import { View, Text, Button, StyleSheet , TouchableOpacity } from 'react-native';


function Homescreen2 ({ navigation }){
   return (
     <View>
        <Text>male braest cancer</Text>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
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
 
 export default Homescreen2;
 