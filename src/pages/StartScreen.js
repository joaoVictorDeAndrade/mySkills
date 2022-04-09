import React from 'react';
import { Button, Text, View } from "react-native";

export default function StartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Start Screen</Text>
      <Button
        title="Faça LOGIN"
        onPress={() => navigation.navigate('MainApp')}
      />
    </View>
  );
}
