import React,{ useState , useEffect } from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Alert,
    Platform,
    ImageBackground,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firebase from "@react-native-firebase/app";
import auth from '@react-native-firebase/auth';
import { GoogleSignin , statusCodes } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
function Signup({navigation}) {
    const [email,setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [img , setImg] = useState()
    const [name,setName] = useState('')
    const currentUser= firebase.auth().currentUser;
    useEffect(()=>{
        GoogleSignin.configure();
      
    },[])
  const user = () =>{
    const usersCollection = firestore()
    .collection('Users').add({
        email:email,
        password:password,
        name:name,
        image:img,

    })
  }
 
    
    
     /*/Google Signin/*/
    const googleLogin = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          await GoogleSignin.signOut()
          const userInfo = await GoogleSignin.signIn();
          console.log(userInfo)
          navigation.navigate('MyDrawer');
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };
    /*/Google Signin/*/
      /*/Email and Password/*/
    const SignIn = () =>{
         if (email != "" && password != "") {
            firebase.auth().signInWithEmailAndPassword(email , password).then((res)=>{
                console.log(res);
                Alert.alert('Successfully signed')
                navigation.navigate('MyDrawer')
            })
            
         }  else {
        Alert.alert('Invalid email or password')
         }
    }
   
/*/Email and Password/*/
    const ImagePic = () =>{
        const currentUser= firebase.auth().currentUser;
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then( async image => {
            console.log(image);
            setImg(image.path);
            let imageName = image.path.substring(image.path.lastIndexOf('/')+1);
            console.log(imageName)
            const reference = storage().ref('users/'+currentUser.uid  + 'png');
            console.log(reference)
             
           try {
            const task = reference.putFile(image.path);

            task.on('state_changed', taskSnapshot => {
                console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
              
              });
              
              task.then(() => {
                console.log('Image uploaded to the bucket!');
              });
           } catch (error) {
            console.log("error is :",error);
            
           }
          })
    }
    
    return(
        <View style={styles.container}>
            <ImageBackground style={{flex:1,alignItems:'center',justifyContent:'center'}} source={require('../assets/DR.jpg')}>
            <View style={{width:80,height:80,backgroundColor:'grey',borderRadius:100,marginTop:60}}>
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={ImagePic}>
                    {img != null ?
      
    <Image style={{width:'100%',height:'100%',borderRadius:100}} source={{uri:img}}/>
 
 :  <Image style={{width:'100%',height:'100%'}} source={require('../assets/PRO.png')}/>
                    }
             </TouchableOpacity>
            
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:0}}>
            <View style={{width:345,height:43,backgroundColor:'grey',alignItems:'center',justifyContent:'center',borderRadius:100,flexDirection:'row',marginTop:42}}>
        <Icon  name="person" size={24}/>
 <TextInput style={{width:"80%",height:43,backgroundColor:'grey',fontSize:15 }} placeholder=" Enter name" keyboardType="email-address"/>
    </View>
    <View style={{width:345,height:43,backgroundColor:'grey',alignItems:'center',justifyContent:'center',borderRadius:100,flexDirection:'row',marginTop:52}}>
        <Icon  name="email" size={24}/>
 <TextInput onChangeText = {setEmail} style={{width:"80%",height:43,backgroundColor:'grey',fontSize:15 }} placeholder=" Enter email" keyboardType="email-address"/>
    </View>
    <View style={{width:345,height:43,backgroundColor:'grey',alignItems:'center',justifyContent:'center',borderRadius:100,flexDirection:'row',marginTop:52}}>
        <Icon  name="lock" size={24}/>
 <TextInput onChangeText = {setPassword} style={{width:"80%",height:43,backgroundColor:'grey',fontSize:15}} placeholder="Enter password" secureTextEntry={true}/>
    </View>
  </View>
 
           <TouchableOpacity onPress={SignIn} style={{width:'80%',height:44,alignItems:'center',justifyContent:'center',borderWidth:2,borderColor:'#fff',marginTop:73}}>
            <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Sign In</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={googleLogin} style={{width:'80%',height:44,alignItems:'center',justifyContent:'center',borderWidth:2,borderColor:'#fff',marginTop:33,flexDirection:'row',marginBottom:90}}>
            <Image style={{width:35,height:35}} source={require('../assets/google.png')}/>
            {/* <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Sign In with google</Text> */}
           </TouchableOpacity>
            </ImageBackground>
            

        </View>

    )
    
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default Signup;