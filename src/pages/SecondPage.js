import  React from "react";
import { Text, View } from "react-native";

export default function SecondScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#121015"}}>
      <Text style={{
        fontSize:24,
        fontWeight:'bold',
        color: "white"
      }}>
        Just a  Screen
      </Text>
      <Text style={{
        marginTop: 15,
        fontSize: 16,
        color: "white"
      }}>
        This is just a screen to test TabNavigation
      </Text>
    </View>
  );
}
