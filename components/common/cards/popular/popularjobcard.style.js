import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 150,
    // padding: SIZES.xLarge,
    backgroundColor: "white",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    overflow: 'hidden',
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },


  logoImage: {
    flex:1 , 
    width: undefined, 
    height: undefined

  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: "black",
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "black",
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
