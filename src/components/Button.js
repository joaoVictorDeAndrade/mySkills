import React from  'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import homeStyle from "../pages/homeStyle";

export function Button({title,...rest}){
  return(
    <TouchableOpacity
      {...rest}
      style={homeStyle.button}>
      <Text style={homeStyle.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
