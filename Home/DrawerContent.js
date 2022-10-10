import React,{ useState,useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    ImageBackground
} from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app";

function DrawerContent ({navigation}) {
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
        <View style={styles.container}>
            <View  style={{marginTop:13,marginLeft:12}}>
                <Image style={{width:34,height:34}} source={require('../assets/net.png')}/>

            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:40}}>
                <ImageBackground style={{width:84,height:84}} source={require('../assets/user1.png')}>
           <Image style={{width:'100%',height:'100%',borderRadius:100}} source={{uri:img}}/>
                </ImageBackground>
               <Text style={{color:'#fff',fontSize:17,marginTop:14,fontWeight:'bold'}}>Gokulkrishna.S</Text>
            </View>
            <View style={{alignItems:'center',marginTop:56}}>
           <TouchableOpacity style={{backgroundColor:'black',width:"100%",alignItems:'center',borderWidth:1,borderColor:'#fff'}}>
              <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>Profile</Text>            
           </TouchableOpacity>
           <TouchableOpacity onPress={()=> navigation.navigate('MyTabs')} style={{backgroundColor:'black',width:"100%",alignItems:'center',borderWidth:1,borderColor:'#fff',marginTop:18}}>
              <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>Movies</Text>            
           </TouchableOpacity>
           <TouchableOpacity style={{backgroundColor:'black',width:"100%",alignItems:'center',borderWidth:1,borderColor:'#fff',marginTop:18}}>
              <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>TV Shows</Text>            
           </TouchableOpacity>
           <TouchableOpacity style={{backgroundColor:'black',width:"100%",alignItems:'center',borderWidth:1,borderColor:'#fff',marginTop:18}}>
              <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>Live Shows</Text>            
           </TouchableOpacity>
           <TouchableOpacity style={{backgroundColor:'black',width:"100%",alignItems:'center',borderWidth:1,borderColor:'#fff',marginTop:18}}>
              <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>Downloads</Text>            
           </TouchableOpacity>
           <TouchableOpacity style={{backgroundColor:'black',width:"100%",alignItems:'center',borderWidth:1,borderColor:'#fff',marginTop:18}}>
              <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>My List</Text>            
           </TouchableOpacity>
           <TouchableOpacity style={{backgroundColor:'black',width:"100%",alignItems:'center',borderWidth:1,borderColor:'#fff',marginTop:18}}>
              <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>Search</Text>            
           </TouchableOpacity>
           <TouchableOpacity style={{backgroundColor:'black',width:"100%",alignItems:'center',borderWidth:1,borderColor:'#fff',marginTop:18}}>
              <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>Soon</Text>            
           </TouchableOpacity>
           </View>
           <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{alignItems:'center',marginTop:20,borderWidth:3,borderColor:'red',width:233,height:45,borderRadius:10,justifyContent:'center'}}>
                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Logout</Text>
            </TouchableOpacity>
           </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'black'
    }
})


export default DrawerContent;