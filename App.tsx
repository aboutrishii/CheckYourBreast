import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//home pages
import Home from './Home'
import HomeScreen1 from "./HomeScreen1";
import HomeScreen2 from "./HomeScreen2";

//female section
import selfInspection from './parts/selfInspection'
import learnResources from './parts/learnResources'
import breastFeeding from "./parts/breastFeeding"
import prevention from './parts/prevention'

//male section

//parts of  Breast self inspection
import position from './steps/position'
import palpationParameter from './steps/PalpationParameter';
import pressureLevel from './steps/PressureLevel'
import handMov from './steps/HandMovements';
import nippleDischarge from './steps/CheckNippleDischarge'
import breastPalapation from './steps/BreastPalpation'
import breastrAbnormalities from './steps/BreastAbnormalities'
import axlExamination from './steps/AxillaryExamination'


const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name ="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name ="Female Breast Cancer" component={HomeScreen1}/>
      <Stack.Screen name ="Male Breast Cancer" component={HomeScreen2}/>
      <Stack.Screen name="Breast Feeding" component={breastFeeding} />
      <Stack.Screen name="Breast Self Inspection" component={selfInspection} />
      <Stack.Screen name="Learning" component={learnResources} />
      <Stack.Screen name="What Can I do To Reduce Risk Of BreastCancer" component={prevention}/>
      <Stack.Screen name="Position" component={position}/>
      <Stack.Screen name="Hand Movement"  component={handMov}/>
      <Stack.Screen name="Palpation Parameter"  component={palpationParameter}/>
      <Stack.Screen name="Pressure Level"  component={pressureLevel}/>
      <Stack.Screen name="Breast Palpation"  component={breastPalapation}/>
     <Stack.Screen name="Axillary Examination"  component={axlExamination}/>
     <Stack.Screen name="Check For Nipple Discharge"  component={nippleDischarge}/>
     <Stack.Screen name="Breast Abnormalities"  component={breastrAbnormalities}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;