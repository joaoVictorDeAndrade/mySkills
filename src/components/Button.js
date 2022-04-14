import React from  'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export function Button({title,...rest}){
  return(
    <TouchableOpacity
      {...rest}
      style={buttonStyle.button}>
      <Text style={buttonStyle.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const buttonStyle = StyleSheet.create(
  {
    button:{
      backgroundColor:'#a370f7',
      padding:15,
      borderRadius: 7,
      alignItems:'center',
      marginTop: 20,

    },
    buttonText:{
      color:'white',
      fontSize:17,
      fontWeight: 'bold',
    },
  }
)
