import React,{ useState , useEffect } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
    ActivityIndicator,
    Alert,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native';

function House ({navigation}) {
    return(
   <View style={styles.container}>
       <ImageBackground style={{width:'100%',height:336}} source={require('../assets/Av.jpg')}>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('MyDrawer')}>
            <Image style={{width:35,height:35,marginLeft:15,marginTop:12}} source={require('../assets/Aro.png')} />
            </TouchableOpacity>
        </View>
      <View  style={{alignItems:'center',justifyContent:'center',marginTop:165}}>
      <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:123,height:34,borderRadius:34,borderWidth:2,borderColor:'#fff',flexDirection:'row'}}>
     <Image style={{width:23,height:23,marginRight:12}} source={require('../assets/play.png')}/>
     <Text style={{color:'#fff',fontSize:15,fontWeight:'bold',marginRight:18}}>Play</Text>
    </TouchableOpacity>

      </View>
       </ImageBackground>
       <ScrollView style={{flex:1,backgroundColor:'black'}}>

       </ScrollView>

   </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex:1,
    }
})

export default House;