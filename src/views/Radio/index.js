import { useNetInfo } from "@react-native-community/netinfo";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { WebView } from "react-native-webview";
import { Colors, Urls } from "../../constants";
import { NoInternetConnection } from "../../container";
import styles from "../commonStyles";

const Radio = ({ navigation }) => {
  const webRef = useRef(null);
  const netInfo = useNetInfo();
  const [alreadyLoaded, setAlreadyLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      changeNavigationBarColor(Colors.BLUE_SKY);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (netInfo.isConnected && !alreadyLoaded) {
      webRef.current.reload();
    }
  }, [netInfo]);

  return (
    <View style={styles.container}>
      <WebView ref={webRef} source={{ uri: Urls.STREAMING }} mediaPlaybackRequiresUserAction={false} androidLayerType={"hardware"}
        mixedContentMode={"always"} overScrollMode={"never"} contentMode={"mobile"} scrollEnabled={false} onLoadEnd={() => setAlreadyLoaded(true)}
        startInLoadingState={true} renderLoading={() => <View style={styles.loader}><ActivityIndicator size="large" color={Colors.RED} animating={true} /></View>} />
      {!netInfo.isConnected &&
        <View style={{ position: "absolute", flex: 1, height: "100%", width: "100%" }}>
          <NoInternetConnection backgroundColor={Colors.BLUE_SKY} />
        </View>
      }
    </View>
  );
};

export default Radio;