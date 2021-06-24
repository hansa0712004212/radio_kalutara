import { StyleSheet } from "react-native";

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
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center"
  }
});

export default styles;
