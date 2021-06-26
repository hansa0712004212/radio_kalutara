import { useNetInfo } from "@react-native-community/netinfo";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { WebView } from "react-native-webview";
import { BouncingLoader } from "../../components";
import { Colors, Urls } from "../../constants";
import { NoInternetConnection } from "../../container";
import styles from "../commonStyles";

const Radio = ({ navigation }) => {
  const webRef = useRef(null);
  const netInfo = useNetInfo();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      changeNavigationBarColor(Colors.BLUE_SKY);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (netInfo.isConnected) {
      webRef.current.reload();
    }
  }, [netInfo]);

  return (
    <View style={styles.container}>
      <WebView ref={webRef} source={{ uri: Urls.STREAMING }} mediaPlaybackRequiresUserAction={false} androidLayerType={"hardware"}
        mixedContentMode={"always"} overScrollMode={"never"} contentMode={"mobile"} scrollEnabled={false}
        startInLoadingState={true} renderLoading={() => <BouncingLoader />} allowsFullscreenVideo={true} />
      {!netInfo.isConnected &&
        <View style={styles.overlayNoInternet}>
          <NoInternetConnection backgroundColor={Colors.BLUE_SKY} />
        </View>
      }
    </View>
  );
};

export default Radio;