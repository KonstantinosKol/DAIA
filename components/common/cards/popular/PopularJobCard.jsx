import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ filePath ,AD_Link}) => {
  return (

    <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(AD_Link)}> 
      <Image 
        source={filePath}
        resizeMode='cover'
        style={styles.logoImage}
      >
      </Image>
    </TouchableOpacity>

  );
};

export default PopularJobCard;
