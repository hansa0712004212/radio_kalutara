import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { WebView } from "react-native-webview";
import { Colors, Urls } from "../../constants";
import styles from "../commonStyles";

const Unique = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      changeNavigationBarColor(Colors.BLACK);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.fakeTop} />
      {isLoading && <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.BLACK} animating={true} />
      </View>}
      <WebView source={{ uri: Urls.UNIQUE }} mediaPlaybackRequiresUserAction={true}
        mixedContentMode={"always"} overScrollMode={"never"} contentMode={"mobile"} scrollEnabled={false}
        onLoadEnd={() => setIsLoading(false)} />
    </View>
  );
};

export default Unique;