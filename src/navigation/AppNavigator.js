import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import "react-native-gesture-handler";
import { Colors, Images, Strings } from "../constants";
import { Facebook, Membership, Radio, Unique, Youtube } from "../views";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        elevation: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        shadowOffset: {
          width: 0,
          height: 0
        }
      },
      tabBarActiveTintColor: Colors.WHITE,
      tabBarActiveBackgroundColor: Colors.BLUE_SKY
    }}>
      <Tab.Screen name={Strings.RADIO} component={Radio}
        options={{
          tabBarActiveBackgroundColor: Colors.BLUE_SKY,
          tabBarIcon: () => (<Image source={Images.RADIO} style={{ height: 32 }} resizeMethod={"resize"} resizeMode={"contain"} alt="" />)
        }} />
      <Tab.Screen name={Strings.UNIQUE} component={Unique}
        options={{
          tabBarActiveBackgroundColor: Colors.BLACK,
          tabBarIcon: ({ focused }) => (<Image source={!focused ? Images.UNIQUE_DARK : Images.UNIQUE_LIGHT} style={{ height: 26 }} resizeMethod={"resize"} resizeMode={"contain"} alt="" />)
        }} />
      <Tab.Screen name={Strings.FACEBOOK} component={Facebook}
        options={{
          tabBarActiveBackgroundColor: Colors.BLUE_FACEBOOK,
          tabBarIcon: () => (<Image source={Images.FACEBOOK} style={{ height: 26 }} resizeMethod={"resize"} resizeMode={"contain"} alt="" />)
        }} />
      <Tab.Screen name={Strings.YOUTUBE} component={Youtube}
        options={{
          tabBarActiveBackgroundColor: Colors.RED, tabBarActiveTintColor: Colors.WHITE,
          tabBarIcon: () => (<Image source={Images.YOUTUBE} style={{ height: 32 }} resizeMethod={"resize"} resizeMode={"contain"} alt="" />)
        }} />
      <Tab.Screen name={Strings.MEMBERSHIP} component={Membership}
        options={{
          tabBarActiveBackgroundColor: Colors.ORANGE_DARK, tabBarActiveTintColor: Colors.BLACK,
          tabBarIcon: () => (<Image source={Images.MEMBERSHIP} style={{ height: 32 }} resizeMethod={"resize"} resizeMode={"contain"} alt="" />)
        }} />
    </Tab.Navigator>
  );
}

export default AppNavigator;