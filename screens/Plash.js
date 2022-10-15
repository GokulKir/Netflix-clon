import React ,{useState,useEffect} from 'react'

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Alert,
    ScrollView,
    ImageBackground
} from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import storage from '@react-native-firebase/storage';
import firebase from "@react-native-firebase/app";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Slider} from '.Slider';
export default  function Plash({navigation}) {
     useEffect(()=>{
      onAuthStateChanged()
     },[navigation])
     function onAuthStateChanged(){
      setTimeout(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user != null){
                navigation.reset({
                    index:0,
                    routes:[{name:'Slider'}]
                })
            }else{
                navigation.reset({
                    index:0,
                    routes:[{name:'MyDrawer'}]
                })
            }
        })
      }, 2500);
    
    }
    return(
  <View style={styles.container}>
    <ImageBackground style={{flex:1}} source={require('../assets/NET.jpg')}>
      
    <SkypeIndicator style={{marginTop:297}} color='white' />
   
    </ImageBackground>
    

 
  </View>
    )
    
}

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})
