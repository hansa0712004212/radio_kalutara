import { useNetInfo } from "@react-native-community/netinfo";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, BackHandler, View } from "react-native";
import "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { WebView } from "react-native-webview";
import { Colors, Urls } from "../../constants";
import { NoInternetConnection } from "../../container";
import styles from "../commonStyles";

const Unique = ({ navigation }) => {
  const webRef = useRef(null);
  const netInfo = useNetInfo();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      changeNavigationBarColor(Colors.BLACK);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const backAction = () => {
      if (canGoBack && webRef.current) {
        webRef.current.goBack();
      } else {
        navigation.goBack();
      }
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [canGoBack]);

  return (
    <View style={styles.container}>
      {netInfo.isConnected && <View style={styles.fakeTop} />}
      {netInfo.isConnected ?
        <WebView ref={webRef} source={{ uri: Urls.UNIQUE }} mediaPlaybackRequiresUserAction={true}
          onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
          mixedContentMode={"always"} overScrollMode={"never"} contentMode={"mobile"} scrollEnabled={false}
          startInLoadingState={true} renderLoading={() => <View style={styles.loader}><ActivityIndicator size="large" color={Colors.BLACK} animating={true} /></View>} />
        :
        <NoInternetConnection backgroundColor={Colors.BLACK} />
      }
    </View>
  );
};

export default Unique;