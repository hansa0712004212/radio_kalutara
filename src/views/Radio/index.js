import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { WebView } from "react-native-webview";
import { Colors, Urls } from "../../constants";
import styles from "../commonStyles";

const Radio = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      changeNavigationBarColor(Colors.BLUE_SKY);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      {isLoading && <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.BLUE_SKY} animating={true} />
      </View>}
      <WebView source={{ uri: Urls.STREAMING }} mediaPlaybackRequiresUserAction={false} androidLayerType={"hardware"}
        mixedContentMode={"always"} overScrollMode={"never"} contentMode={"mobile"} scrollEnabled={false} onLoadEnd={() => setIsLoading(false)} />
    </View>
  );
};

export default Radio;