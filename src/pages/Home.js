import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, FlatList, StyleSheet} from "react-native";
import {Button} from "../components/Button";
import {SkillCard} from "../components/SkillCard";
import HomeSkeletonPage from "../SkeletonPages/HomeSkeletonPage";

export default function Home(){

  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [loadedContent, setLoadedContent] = useState(false)

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoadedContent(true)
    }, 2000)
  }, [])

  return (
    loadedContent ?
    <View style={homeStyle.container}>
      <Text style={homeStyle.text}>Welcome João</Text>
      <TextInput
        onChangeText={setNewSkill}
        style={homeStyle.input}
        placeholder='New Skill'
        placeholderTextColor={"#555"}
      />
      <Button title={'Add'} onPress={handleAddNewSkill}/>
      <Text
        style={[homeStyle.text, {marginVertical: 50}]}>
        List:
      </Text>
      <FlatList
        data={mySkills}
        renderItem={ (skill) => (
          <SkillCard skill={skill.item} />
        ) }
      />
    </View> : <HomeSkeletonPage  backgroundColor='#121015' />
  )
}

const homeStyle = StyleSheet.create(
  {
    container:{
      backgroundColor: '#121015',
      flex:1,
      paddingHorizontal:30,
      paddingTop:70,
      paddingBottom: 20,
    },
    text:{
      color:'white',
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
    buttonText:{
      color:'white',
      fontSize:17,
      fontWeight: 'bold',
    },
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
