import React,{useEffect,useState} from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground
    
} from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app";
function Logo() {
    const currentUser= firebase.auth().currentUser;
    const [img , setImg] = useState()
    useEffect(()=>{
       
        (async () =>{
            const imageURL= await storage().ref('users/'+currentUser.uid  + 'png').getDownloadURL();
            console.log(imageURL)
             setImg(imageURL)
          })();
    })
    
    return (
        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <Image style={{width:26,height:26,marginRight:68}}  source={require('../assets/list.png')}/>
      <Image
        style={{ width: 100, height: 100,marginLeft:13,marginRight:28}}
        source={require('../assets/NETFLIX.png')}
      />
      <ImageBackground style={{width:33,height:33,backgroundColor:'black',marginLeft:37,borderRadius:38,marginRight:56}}>
        {img !== null ?
    <Image style={{width:'100%',height:'100%',borderRadius:100}}  source={{uri:img}}/>
    :  <Image style={{width:'100%',height:'100%'}}  source={require('../assets/user.png')}/>
        }
      </ImageBackground>
      </View>
    );
  }
  export default Logo;