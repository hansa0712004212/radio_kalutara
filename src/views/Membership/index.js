import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { WebView } from "react-native-webview";
import { Colors, Urls } from "../../constants";
import styles from "../commonStyles";

const Membership = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      changeNavigationBarColor(Colors.ORANGE_DARK);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.fakeTop} />
      {isLoading && <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.ORANGE_DARK} animating={true} />
      </View>}
      <WebView source={{ uri: Urls.MEMBERSHIP }}
        overScrollMode={"never"} contentMode={"mobile"} scrollEnabled={false} onLoadEnd={() => setIsLoading(false)} />
    </View>
  );
};

export default Membership;