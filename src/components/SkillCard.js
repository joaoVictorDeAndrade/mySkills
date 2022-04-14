import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function SkillCard({skill, ...rest}){
  return(
    <TouchableOpacity {...rest}  style={skillStyle.buttonSkill}>
      <Text style={skillStyle.textSkill}>{skill}</Text>
    </TouchableOpacity>
  )
}

const skillStyle = StyleSheet.create(
  {
    textSkill:{
      color:'white',
      fontSize:22,
      fontWeight:'bold',
    },
    buttonSkill:{
      backgroundColor:'#1f1e25',
      padding:15,
      borderRadius:50,
      alignItems: 'center',
      marginVertical:10,
    },
  }
)
