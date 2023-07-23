// import { SafeAreaView } from 'react-native';
// import { MiMapView } from '@mappedin/react-native-sdk';

// // See Trial API key Terms and Conditions
// // https://developer.mappedin.com/guides/api-keys
// const options = {
//   clientId: '5eab30aa91b055001a68e996',
//   clientSecret: 'RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1',
//   venue: 'mappedin-demo-mall',
//   perspective: 'Website',
// };

// const App = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <MiMapView
//         style={{ flex: 1 }}
//         key="mappedin"
//         options={options}
//       />
//     </SafeAreaView>
//   );
// };

// export default App;

import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, WelcomeScreen} from '../components'

const Home = ()=>{

  // return(
  //   <View>
  //     <Text>sdfvsfv</Text>
  //   </View>
  // )

  const router = useRouter();

  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>


      {/* -------- Notification Button / Profile photo ----------------- */}
      {/* <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: "vhnnghvn",
        }}
      /> */}

        {/* -------- Rest of the screen content ----------------- */}
      <ScrollView showsVerticalScrollIndicator = {false}>
        <View
          style={{
            flex:1,
            padding:SIZES.medium
          }}
        >
            <WelcomeScreen
            
            />

            <Popularjobs/>

            
            <Nearbyjobs/>

          
        </View>
      </ScrollView>

    </SafeAreaView> 
  )
}

export default Home;