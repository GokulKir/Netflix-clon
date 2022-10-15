import React,{ useState,useEffect } from "react";

import {
    View,
    TouchableOpacity,
    Button,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Alert,
    ImageBackground,
    ActivityIndicator
   
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import auth from '@react-native-firebase/auth';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import {SkypeIndicator} from 'react-native-indicators';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firebase from "@react-native-firebase/app";


function Sign({navigation}) {
    const [email,setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [ loading , setLoding] = useState(false)
    const [img , setImg] = useState()
    const [name,setName] = useState('')
    const currentUser= firebase.auth().currentUser;
   /*/User Sign UP Method/*/
    const Signup = () =>{
     if (email != "" && password != "") {
        auth().createUserWithEmailAndPassword(email , password).then((response)=>{
            console.log("User Created ID_S :", response)
          setLoding(true)
         
         Alert.alert('Successfully Creted')
         navigation.navigate('Signup')   
        })
        .catch((error)=>{
            setLoding(false)
           
            console.log("Error :", error)
        })
        
     }else{
        setLoding(false)
      
        Alert.alert('Both feald are mantatory')
      
     }
    }
   
    

    return(
<View style={styles.container}>
    <ImageBackground  style={{width:'100%',height:'100%'}} source={require('../assets/DR.jpg')}>
        <View style={{alignItems:'center',marginTop:53}}>
            
           
        </View>
       
        
  <View style={{alignItems:'center',justifyContent:'center',marginTop:105}}>
 
    <View style={{width:'85%',height:43,backgroundColor:'grey',alignItems:'center',justifyContent:'center',borderRadius:100,flexDirection:'row',marginTop:52}}>
        <Icon  name="email" size={24}/>
 <TextInput value={email} onChangeText={setEmail} style={{width:"80%",height:43,backgroundColor:'grey',fontSize:15 }} placeholder=" Enter email" keyboardType="email-address"/>
    </View>
    <View style={{width:'85%',height:43,backgroundColor:'grey',alignItems:'center',justifyContent:'center',borderRadius:100,flexDirection:'row',marginTop:52}}>
        <Icon  name="lock" size={24}/>
 <TextInput value={password} onChangeText={setPassword} style={{width:"80%",height:43,backgroundColor:'grey',fontSize:15}} placeholder="Enter password" secureTextEntry={true}/>
    </View>
  </View>
  <View style={{alignItems:'center',justifyContent:'center',marginTop:107}}>
    <TouchableOpacity onPress={Signup} style={{width:"60%",height:46,alignItems:'center',justifyContent:'center',borderWidth:3,borderColor:'#fff'}}>
        <Text style={{color:'#fff',fontSize:17,fontWeight:'bold'}}>Sign Up</Text>
    </TouchableOpacity>
  </View>
    </ImageBackground>

</View>
    )
    
}

const styles = StyleSheet.create({
    flex:1,
 
})



export default Sign;