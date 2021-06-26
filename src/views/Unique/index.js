import { useNetInfo } from "@react-native-community/netinfo";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { WebView } from "react-native-webview";
import { Colors, Urls } from "../../constants";
import { NoInternetConnection } from "../../container";
import styles from "../commonStyles";

const Unique = ({ navigation }) => {
  const netInfo = useNetInfo();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      changeNavigationBarColor(Colors.BLACK);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.fakeTop} />
      {netInfo.isConnected ?
        <WebView source={{ uri: Urls.UNIQUE }} mediaPlaybackRequiresUserAction={true}
          mixedContentMode={"always"} overScrollMode={"never"} contentMode={"mobile"} scrollEnabled={false}
          startInLoadingState={true} renderLoading={() => <View style={styles.loader}><ActivityIndicator size="large" color={Colors.BLACK} animating={true} /></View>} />
        :
        <NoInternetConnection backgroundColor={Colors.BLACK} />
      }
    </View>
  );
};

export default Unique;