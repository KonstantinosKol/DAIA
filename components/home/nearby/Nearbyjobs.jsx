import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS ,icons} from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {

  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {/* {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => ( */}
            <NearbyJobCard 
              Color={"#eb7662"}
              Title={"Indoor Map"}
              Description={`zdvdf dfghdhb tfdyjhgf rdhdh`}
              filePath={icons.navigation_icon}
            />

            <NearbyJobCard 
              Color={"#5cbfcd"}
              Title={"Arrivals"}
              Description={`dfgfgd dfghgdfh tdhyf`}
              filePath={icons.arrival}
            />

            <NearbyJobCard 
              Color={"#5961cc"}
              Title={"Departures"}
              Description={`fdgh fghdhfgh fghnhgngngh`}
              filePath={icons.departure}
            />
          {/* ))
        )} */}
      </View>
    </View>
  );
};

export default Nearbyjobs;
