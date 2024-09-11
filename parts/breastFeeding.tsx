import React from "react";
import { Text , StyleSheet, View , Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function App({}){
   return(
   <ScrollView style={styles.container}>
      <View style={styles.card}>
         <Image style={styles.image}
         source={{uri:"https://www.moffitt.org/contentassets/d9e7f0f7fc9749ed9bcc4c609f88494b/nursing-baby-mom-1440.jpg"}}/>
         <View style={styles.cardText}>
          <Text style={styles.textDec}>One very large study showed a 4.3% reduction in relative risk of breast cancer development for every 12 months a woman breastfeeds ” . “Another large review demonstrated a 14% lower risk in women who had breastfed, compared to those who never breastfed.</Text>
        </View>
    </View>

    <View style={styles.Bcontainer}>

      <Text style={styles.Btext}> ~ Breastfeeding has enormous benefits for both the mother and child. Babies who are breastfed have a reduced risk of death from infectious diseases,hospitalisation for diarrhoea,and fewer respiratory and ear infections.</Text>


      <Text style={styles.Btext}> ~ Children who were breastfed may have a reduced risk of asthma and allergic rhinitis but the evidence for this is not as strong</Text>


      <Text style={styles.Btext}> ~ Children and adults who were breastfed have a reduced risk of obesity and type 2 diabetes. </Text>

      <Text style={styles.Btext}> ~ Mothers who breastfeed have a reduced long‐term risk of cardiovascular disease, diabetes, breast and ovarian cancer. </Text>


      <Text style={styles.Btext}> ~ The longer the duration of breastfeeding the greater the reduction in risk of disease.</Text>
    </View>

    <View>
      <Text style={styles.text}>There are a variety of risk factors for the development of breast cancer, many of which a woman cannot control. When it comes to reproductive risk factors, breastfeeding has been shown to reduce a woman’s risk</Text>
    </View>

    <Text style={styles.headText}>How about other cancers?</Text>
    <Text style={styles.text}>
    A recent review of over 40 studies revealed a 30% reduction in the risk of ovarian cancer when comparing women who breastfed with those who did not. “When breastfeeding, a woman will have less cycles of ovulation,” said Hoover, “which is thought to reduce the risk for potential cellular and genetic mistakes that could lead to ovarian cancer.” Just like with breast cancer, the longer a woman breastfeeds, the lower her risk becomes.
    </Text>

    <Text style={styles.headText}>Can I get breast cancer while breastfeeding?</Text>
    <Text style={styles.text}>
    Although a woman can develop breast cancer at any time in her life – including while breastfeeding or pumping – there is no known increase in risk during that time. Since women may be more keen to changes happening in their breasts during the time of breastfeeding, they may be more likely to notice potential warning signs of cancer. In general, a nursing mother’s breasts will feel ‘lumpy’ due to the production of milk or even blocked milk ducts. However, a lump that does not get smaller or disappear after about a week should be checked by a doctor.
    </Text>

    <Text style={styles.headText}>Can I breastfeed during cancer treatment?</Text>
    <Text style={styles.text}>
    Many therapies used to treat breast cancer can be passed on to the nursing baby through breastmilk.
    </Text>

    <Text style={styles.text}>
   It's generally not recommend breastfeeding while receiving chemotherapy, due to the risk of excretion into breastmilk,
   “In addition, we advise against breast feeding when taking certain oral treatments for breast cancer, like tamoxifen. It is important to ask your doctor about breast feeding prior to starting any treatments.”
    </Text>

   </ScrollView>
   );
}

const styles = StyleSheet.create({
   container:{
    flex:1
   },
   image:{
     height:350,
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
     shadowRadius: 3,
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
     fontSize:16
   },
   headText:{
    color:'red',
     fontFamily:'600',
     fontSize:23,
     textDecorationLine:'underline',
     padding:5,
     marginLeft:12,
   },
   text:{
    color:'black',
     fontFamily:'bold',
     fontSize:18,
     marginLeft:12,
     padding:7
   },
   bullet: {
    fontSize: 20, // Adjust bullet size as needed
    marginRight: 10, // Adjust space between bullet and text
  },
  Bcontainer: { 
    marginLeft: 8, 
  },
  Btext:{
    marginBottom: 10,
    marginLeft:10,
    marginRight:4,
    color:'green',
    fontSize:20,
    fontFamily:'bold',
  }
   });

export default App;