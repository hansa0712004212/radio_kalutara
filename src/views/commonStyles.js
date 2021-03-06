import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  fakeTop: {
    height: 36,
    backgroundColor: "#222222"
  },
  loader: {
    flex: 1,
    zIndex: 9999,
    height: "100%",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center"
  },
  loaderDance: {
    flex: 1,
    zIndex: 8888,
    alignSelf: "center",
    justifyContent: "flex-end",
    backgroundColor: Colors.WHITE
  },
  noInternetContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  noInternetText: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.WHITE
  },
  overlayNoInternet: {
    width: windowWidth,
    height: windowHeight,
    position: "absolute",
    backgroundColor: Colors.WHITE
  }
});

export default styles;
