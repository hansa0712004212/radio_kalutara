import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { WebView } from "react-native-webview";
import { Colors, Urls } from "../../constants";
import styles from "../commonStyles";

const Facebook = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const webRef = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      changeNavigationBarColor(Colors.BLUE_FACEBOOK);
    });
    return unsubscribe;
  }, [navigation]);

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
      {isLoading && <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.BLUE_FACEBOOK} animating={true} />
      </View>}
      <WebView ref={webRef} source={{ uri: Urls.FACEBOOK }} injectedJavaScript={INJECTED_JAVASCRIPT}
        onScroll={() => webRef.current.injectJavaScript(onS)}
        overScrollMode={"never"} contentMode={"mobile"} scrollEnabled={false} onLoadEnd={() => setIsLoading(false)} />
    </View>
  );
};

export default Facebook;