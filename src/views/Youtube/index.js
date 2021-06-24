import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { WebView } from "react-native-webview";
import { Colors, Urls } from "../../constants";
import styles from "../commonStyles";

const Youtube = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const webRef = useRef(null);

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
      {isLoading && <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.RED} animating={true} />
      </View>}
      <WebView ref={webRef} source={{ uri: Urls.YOUTUBE }} injectedJavaScript={INJECTED_JAVASCRIPT}
        onScroll={() => webRef.current.injectJavaScript(onS)}
        overScrollMode={"never"} contentMode={"mobile"} scrollEnabled={false} onLoadEnd={() => setIsLoading(false)} />
    </View>
  );
};

export default Youtube;