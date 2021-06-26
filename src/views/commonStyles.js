import { StyleSheet } from "react-native";
import { Colors } from "../constants";

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
  }
});

export default styles;
