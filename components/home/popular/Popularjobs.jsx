import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES,icons } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";


const Popularjobs = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>

        <ScrollView horizontal={true} contentContainerStyle={{ columnGap: SIZES.medium }}>

           {/* --AD 1 -- */}
            <PopularJobCard
              filePath={icons.AD_1}
              AD_Link={'http://google.com'}
            >
            </PopularJobCard>

            {/* --AD 2 -- */}
            <PopularJobCard 
              filePath={icons.AD_2}
              AD_Link={'http://google.com'}
            >
            </PopularJobCard>

            {/* --AD 3-- */}
            <PopularJobCard 
              filePath={icons.AD_3}
              AD_Link={'http://google.com'}
            >
            </PopularJobCard>
           
          </ScrollView >
       
      </View>
    </View>
  );
};

export default Popularjobs;
