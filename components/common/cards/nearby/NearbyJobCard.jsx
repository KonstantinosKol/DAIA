import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";


const NearbyJobCard = ({ Color,Title, Description,filePath }) => {

  return (
    <TouchableOpacity style={styles.container(Color)} >

    
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={filePath}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {Title}
        </Text>

        <Text style={styles.jobType}>{Description}</Text>
      </View>
      
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
