import { useNetInfo } from "@react-native-community/netinfo";
import React, { useEffect, useRef, useState } from "react";
import { BackHandler, View } from "react-native";
import "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { WebView } from "react-native-webview";
import { BouncingLoader } from "../../components";
import { Colors, Urls } from "../../constants";
import { NoInternetConnection } from "../../container";
import styles from "../commonStyles";

const Facebook = ({ navigation }) => {
  const webRef = useRef(null);
  const netInfo = useNetInfo();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      changeNavigationBarColor(Colors.BLUE_FACEBOOK);
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

  const INJECTED_JAVASCRIPT = `
  window.scrollTo(150, 150);
  document.getElementById('MChromeHeader').style.display='none';
  document.getElementById('mobile_login_bar').style.display='none';
  document.getElementById('u_0_20').style.display='none';
  document.getElementById('u_0_7o_DU').style.display='none';
  `;

  const onS = `
  document.getElementById('popup_xout').click();
  `;

  return (
    <View style={styles.container}>
      {netInfo.isConnected ?
        <WebView ref={webRef} source={{ uri: Urls.FACEBOOK }} injectedJavaScript={INJECTED_JAVASCRIPT}
          onScroll={() => webRef.current.injectJavaScript(onS)}
          overScrollMode={"never"} contentMode={"mobile"} scrollEnabled={false}
          onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
          startInLoadingState={true} renderLoading={() => <BouncingLoader />} />
        :
        <NoInternetConnection backgroundColor={Colors.BLUE_FACEBOOK} />
      }
    </View>
  );
};

export default Facebook;