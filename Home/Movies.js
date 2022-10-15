import React,{ useEffect , useState } from "react";
import {
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,
    ImageBackground,
    Image

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {URLS,POPULAR_W,GET_MOVIE_DETAILES} from '../url';
import axios from 'axios';
function Movies({route , navigation}) {
    const [movies , setMovies] = useState([])
    const [set , setSet] = useState([])
    const [dream , setDream] = useState([])
    const [rech , setRech] = useState([])
    const [move , setMove] = useState([])
    const API_KEY = "f15afd7ae1d0b5ff16ce11ce965e05fb";
    const {movieID,Image,title,intro} = route.params;
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
    useEffect(()=>{
      
    API()
       

    },[])
 const API = () =>{
 POPULAR_W.then((res)=>{
    console.log("Movies Page :",res.data.results[0])
    setMovies(res.data.results[7])
    setSet(res.data.results[10])
    setDream(res.data.results[6])
    setRech(res.data.results[9])
    setMove(res.data.results[14])
 })
 }
    
 
    return(
        <View style={styles.container}>
            <ScrollView>
            <ImageBackground style={{width:"100%",height:346}} source={{uri:`${IMAGE_BASE_URL+Image}`}}>
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
            <View style={{alignItems:'center',marginBottom:53}}>
            <ScrollView style={{width:'100%',height:"100%",backgroundColor:'#fff',borderTopLeftRadius:36,borderTopRightRadius:36}}>
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
            <ScrollView   
            horizontal={true}
            >
                <View style={{flexDirection:'row'}}>
           <TouchableOpacity onPress={() => navigation.navigate('Cinema',{image:movies.poster_path,title:movies.title,intro:movies.overview})} style={{width:135,height:207,backgroundColor:'black',marginLeft:5,borderRadius:45,marginTop:12}}>
              <ImageBackground  style={{width:'100%',height:'100%',borderRadius:45}}  source={{uri:`${IMAGE_BASE_URL+movies.poster_path}`}}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('Cinema',{image:set.poster_path,title:set.title,intro:set.overview})} style={{width:135,height:207,backgroundColor:'black',marginLeft:5,borderRadius:45,marginTop:12}}>
              <ImageBackground style={{width:'100%',height:'100%',borderRadius:45}}  source={{uri:`${IMAGE_BASE_URL+set.poster_path}`}}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('Cinema',{image:dream.poster_path,title:dream.title,intro:dream.overview})} style={{width:135,height:207,backgroundColor:'black',marginLeft:5,borderRadius:45,marginTop:12}}>
              <ImageBackground style={{width:'100%',height:'100%',borderRadius:45}}  source={{uri:`${IMAGE_BASE_URL+dream.poster_path}`}}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('Cinema',{image:rech.poster_path,title:rech.title,intro:rech.overview})} style={{width:135,height:207,backgroundColor:'black',marginLeft:5,borderRadius:45,marginTop:12}}>
              <ImageBackground style={{width:'100%',height:'100%',borderRadius:45}}  source={{uri:`${IMAGE_BASE_URL+rech.poster_path}`}}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('Cinema',{image:move.poster_path,title:move.title,intro:move.overview})} style={{width:135,height:207,backgroundColor:'black',marginLeft:5,borderRadius:45,marginTop:12}}>
              <ImageBackground style={{width:'100%',height:'100%',borderRadius:45}}  source={{uri:`${IMAGE_BASE_URL+move.poster_path}`}}/>
           </TouchableOpacity>
           
           
                </View>

            </ScrollView>
            </ScrollView>
            </View>
            </ScrollView>
           

        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black'

    }
})

export default Movies;