import React,{ useState,useEffect } from "react";

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    ScrollView,
    FlatList,
    ImageBackground,
    Image
} from 'react-native';
import ImageSlider from "innovare-react-native-image-slider-banner";
import Carousel from 'react-native-snap-carousel';
import { SliderBox } from "react-native-image-slider-box";
import axios from "axios";
import Icon from "react-native-vector-icons";

function Home (){


    return(
        <View style={styles.container}>
   <ImageBackground style={{width:'100%',height:255}} source={require('../assets/DR.png')}>
  
   </ImageBackground>
   <ScrollView style={{flex:1,backgroundColor:'black'}}>
    <View style={{alignItems:'center',marginTop:34}}>
    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',width:123,height:34,borderRadius:34,borderWidth:2,borderColor:'#fff',flexDirection:'row'}}>
     <Image style={{width:23,height:23,marginRight:12}} source={require('../assets/play.png')}/>
     <Text style={{color:'#fff',fontSize:15,fontWeight:'bold',marginRight:18}}>Play</Text>
    </TouchableOpacity>
    </View>

   </ScrollView>



        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    }
})

export default Home;