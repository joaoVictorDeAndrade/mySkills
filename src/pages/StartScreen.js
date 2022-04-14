import React, { useState } from "react";
import {StyleSheet, Text, TextInput, View } from "react-native";
import {Button} from "../components/Button";

export default function StartScreen({ navigation }) {
  const [name, setName] = useState("")

  return (
    <View style={homeStyle.container}>
      <Text style={homeStyle.text} >Start Screen</Text>
      <View>
        <TextInput
          placeholder={"Type your name"}
          placeholderTextColor={"#CFF"}
          style={{
            backgroundColor: "#1f1e25",
            color: 'white',
            fontSize:18,
            padding:15,
            marginTop:30,
            borderRadius:7,
          }}
          onChangeText={setName}
        />
        <Button
          title="LOGIN"
          onPress={() => navigation.navigate('MainApp', {name})}
        />
      </View>
    </View>
  );
}

const homeStyle = StyleSheet.create(
  {
    container:{
      backgroundColor: '#121015',
      flex:1,
      paddingHorizontal:30,
      paddingTop:70,
      paddingBottom: 20,
      justifyContent: "space-around"
    },
    text:{
      alignSelf: "center",
      color:'#a370f7',
      fontSize:24,
      fontWeight:'bold',
    },
    input:{
      backgroundColor: "#1f1e25",
      color: 'white',
      fontSize:18,
      padding:15,
      marginTop:30,
      borderRadius:7,
    },
    button:{
      backgroundColor:'#a370f7',
      padding:15,
      borderRadius: 7,
      alignItems:'center',
      marginTop: 20,
    },
  }
)
