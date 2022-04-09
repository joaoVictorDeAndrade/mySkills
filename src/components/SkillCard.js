import React, { useEffect, useState } from "react";
import {Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import homeStyle from "../pages/homeStyle";

export function SkillCard({skill, ...rest}){
  return(
    <TouchableOpacity {...rest}  style={homeStyle.buttonSkill}>
      <Text style={homeStyle.textSkill}>{skill}</Text>
    </TouchableOpacity>
  )
}
