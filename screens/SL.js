import React ,{useState,useEffect} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Button,
    Alert,
    ImageBackground
    
} from 'react-native';

function SL ({navigation}) {
     return(
<View style={styles.container}>
    <ImageBackground style={styles.ImageContainer} source={require('../assets/dark.jpg')}>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:165}}>
        <Image style={{width:205,height:205}} source={require('../assets/NETFLIX.png')}/>
        </View>
        <View style={{alignItems:'center',marginBottom:0}}>
        <Text style={{color:'#fff',marginBottom:6}}>L E T ' S   G E T   S T A R T E D</Text>
        </View>
        
        <View style={{alignItems:'center',marginTop:125}}>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{width:276,height:36,backgroundColor:'red',alignItems:'center',justifyContent:'center',borderRadius:100}}>
                <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sign')} style={{width:276,height:36,alignItems:'center',justifyContent:'center',borderRadius:100,marginTop:36,borderWidth:3,borderColor:'red'}}>
                <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Sign Up</Text>
            </TouchableOpacity>
        </View>

    </ImageBackground>
</View>
     )
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    ImageContainer:{
    flex:1
    }
})

export default SL;