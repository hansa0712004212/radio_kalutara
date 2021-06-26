import React from "react";
import { View } from "react-native";
import BouncingPreloader from 'react-native-bouncing-preloader';
import { Images } from '../../constants';
import styles from "../../views/commonStyles";

const BouncingLoader = () => {
  return (
    <View style={styles.loaderDance}>
      <BouncingPreloader
        icons={[Images.LOADER_1, Images.LOADER_2, Images.LOADER_3, Images.LOADER_4, Images.LOADER_5, Images.LOADER_6]}
        size={64} speed={1250} leftDistance={-400} rightDistance={-400}
        leftRotation="-720deg" rightRotation="360deg" />
    </View>
  );
}

export default BouncingLoader;