import { useNetInfo } from "@react-native-community/netinfo";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, BackHandler, View } from "react-native";
import "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { WebView } from "react-native-webview";
import { Colors, Urls } from "../../constants";
import { NoInternetConnection } from "../../container";
import styles from "../commonStyles";

const Youtube = ({ navigation }) => {
  const webRef = useRef(null);
  const netInfo = useNetInfo();
  const [canGoBack, setCanGoBack] = useState(false);

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

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      changeNavigationBarColor(Colors.RED);
    });
    return unsubscribe;
  }, [navigation]);

  const INJECTED_JAVASCRIPT = `
  document.getElementById('header-bar').style.display='none';
  document.getElementsByClassName('scbrr-tabs cbox')[0].style.display='none';
  document.getElementsByClassName('section')[0].style.display='none';
  window.scrollTo(50, 50);
  `;

  const onS = `
  document.getElementById('popup_xout').click();
  `;

  return (
    <View style={styles.container}>
      {netInfo.isConnected ?
        <WebView ref={webRef} source={{ uri: Urls.YOUTUBE }} injectedJavaScript={INJECTED_JAVASCRIPT}
          onScroll={() => webRef.current.injectJavaScript(onS)}
          overScrollMode={"never"} contentMode={"mobile"} scrollEnabled={false}
          onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
          startInLoadingState={true} renderLoading={() => <View style={styles.loader}><ActivityIndicator size="large" color={Colors.RED} animating={true} /></View>} />
        :
        <NoInternetConnection backgroundColor={Colors.RED} />
      }
    </View>
  );
};

export default Youtube;