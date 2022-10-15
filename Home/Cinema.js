import React,{ useEffect , useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    ScrollView,
    ImageBackground,

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import POPULAR_MOVIES from '../url'
function Cinema({route , navigation}) {
    const [fetch , setFetch] = useState([])
    useEffect(()=>{

    },[])
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
    const {image,title,intro} = route.params;
   
    const API = () =>{
  POPULAR_MOVIES.then((res)=>{
    console.log(res.data.results[0])
    setFetch(res.data.results[0])
  })
    }
    return(
        <View style={styles.container}>
          <ScrollView>
            <View>
                <ImageBackground style={{width:"100%",height:346}} source={{uri:`${IMAGE_BASE_URL+image}`}}>
                <View style={{alignItems:'center',marginTop:15,flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                    <Icon style={{marginLeft:25}} name="west" size={34} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon style={{marginLeft:265}} name="favorite" size={34} color="#fff"/>
                   
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center',marginTop:86}}>
                    <Icon name="play-circle-outline" size={81} color="#fff"/>
                </View>
                
             
                
                </ImageBackground>
                <ScrollView>
                <View style={{width:"100%",height:545,backgroundColor:'#fff',borderTopLeftRadius:15,borderTopRightRadius:15}}>
                <View style={{alignItems:'center',marginTop:26,marginRight:147,flexDirection:'row'}}>
            <Text style={{color:'black',fontSize:28,fontWeight:'bold',marginLeft:13}}>{title}</Text>
            <Icon style={{marginLeft:45}} name="star" size={20} color="orange" />
            <Icon style={{marginLeft:5}} name="star" size={20} color="orange" />
            <Icon style={{marginLeft:5}} name="star" size={20} color="orange" />
            <Icon style={{marginLeft:5}} name="star" size={20} />
            </View>
            <View style={{alignItems:'center',marginTop:34}}>
            <Text style={{fontSize:19,fontWeight:'bold',color:'red'}}>Introduction</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:14,marginTop:23,fontWeight:'bold',color:'grey'}}>{intro}</Text>
            </View>
            <View style={{marginTop:23,marginLeft:12,flexDirection:'row'}}>
                <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>Popular on Netflix</Text>
                <Icon style={{marginLeft:25,marginLeft:156}} name="east" size={25} color="black"/>
            </View>
</View>

</ScrollView>


    
            </View>
            
         
   
            
     
          </ScrollView>

        </View>
    )
    
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'black'

    }
})

export default Cinema;