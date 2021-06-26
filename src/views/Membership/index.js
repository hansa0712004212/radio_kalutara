import { useNetInfo } from "@react-native-community/netinfo";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { WebView } from "react-native-webview";
import { Colors, Urls } from "../../constants";
import { NoInternetConnection } from "../../container";
import styles from "../commonStyles";

const Membership = ({ navigation }) => {
  const netInfo = useNetInfo();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      changeNavigationBarColor(Colors.ORANGE_DARK);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.fakeTop} />
      {netInfo.isConnected ?
        <WebView source={{ uri: Urls.MEMBERSHIP }}
          overScrollMode={"never"} contentMode={"mobile"} scrollEnabled={false}
          startInLoadingState={true} renderLoading={() => <View style={styles.loader}><ActivityIndicator size="large" color={Colors.ORANGE_DARK} animating={true} /></View>} />
        :
        <NoInternetConnection backgroundColor={Colors.ORANGE_DARK} />
      }
    </View>
  );
};

export default Membership;