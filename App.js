import * as React from 'react';
import {SvgCss} from "react-native-svg";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StartScreen from "./src/pages/StartScreen";
import Home from "./src/pages/Home"
import SecondScreen from "./src/pages/SecondPage";

//Icons
import IconList from "./src/icons/IconList"
import IconSecondScreen from "./src/icons/IconSecondScreen";
import { Platform, StatusBar } from "react-native";
import { useEffect } from "react";


const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function HomeStackScreen({name, navigation, route}) {
  return (
    <HomeStack.Navigator screenOptions={{
        headerShown: false
    }}>
      <HomeStack.Screen
        name="Home"
        children={() =>
          <Home
            name={name}
          />}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <SettingsStack.Screen name="Settings" component={SecondScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MainApp({route, navigation}) {
  const { itemId } = route.params;
  console.log("MainApp", itemId)

  useEffect(() => {
    navigation.setParams({
      itemId: 'someText',
    });
  }, [])

  console.log("MainApp", itemId)

  return (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#a370f7",
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: "#121015",
        paddingBottom: Platform.OS === "ios" ? 30 : 10
      }
    }}
    backBehavior={"order"}
  >
    <Tab.Screen
      name="Dashboard"
      children={() =>
        <HomeStackScreen
          name={route.params.name}
          initialParams={{ itemId:  99 }}
        />}
      options={{
        tabBarIcon: (({size, color}) =>
            <IconList
              tintColor={color}
              size={size}
            />
        )
      }}
    />
    <Tab.Screen
      name="SettingsStack"
      component={SettingsStackScreen}
      options={{
        title: "Other Screen",
        tabBarIcon: (({size, color}) =>
            <IconSecondScreen
              tintColor={color}
              size={size}
            />
        )}}
    />
  </Tab.Navigator>)
}

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false
          }}>
          <MainStack.Screen
            name="StartScreen"
            component={StartScreen}
          />
          <MainStack.Screen
            name="MainApp"
            component={MainApp}
            options={{gestureEnabled: false}}
            initialParams={{ itemId: 42 }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
}


