import React from "react";
import { Text, View } from "react-native";
import "react-native-gesture-handler";
import { Strings } from "../../constants";
import styles from "../../views/commonStyles";

const NoInternetConnection = ({ backgroundColor }) => (
  <View style={[styles.noInternetContainer, { backgroundColor: backgroundColor }]}>
    <Text style={styles.noInternetText}>{Strings.NO_INTERNET}</Text>
  </View>
);

export default NoInternetConnection;