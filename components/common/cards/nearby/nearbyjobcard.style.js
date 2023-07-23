import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container:(Color) => ( {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: Color,
  }),
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.large,
    // fontFamily: "DMBold",
    color: COLORS.white,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    // fontFamily: "DMRegular",
    color:COLORS.white,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
