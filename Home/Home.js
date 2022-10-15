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
    Image,
    SafeAreaView,
 
} from 'react-native';
import ImageSlider from "innovare-react-native-image-slider-banner";
import Carousel from 'react-native-snap-carousel';
import { SliderBox } from "react-native-image-slider-box";
import axios from "axios";
import {array} from '../Data/data/';
import {UPCOMING_MOVIES} from '../Axios/AX.js';
import { useSelector, useDispatch } from 'react-redux'
import {GET_TOP_RATED} from '../Movie/movie';
import {URLS,POPULAR_W} from '../url';
import Icon from 'react-native-vector-icons/MaterialIcons';
function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
  }
function Home ({navigation}){
    const DATA = useSelector(state => state.state)
    const dispatch = useDispatch()
    const API_KEY = "f15afd7ae1d0b5ff16ce11ce965e05fb";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    const [movies ,setMovies] = useState([])
    const [actions,setActions] = useState([])
    const [urls , setUrls] = useState([])
    const [trend , setTrend] = useState([])
    const [fetch , setFetch] = useState([])
    const [miltery , setMiltery] = useState([])
    const [fet ,setFet] = useState([])
    const [popular ,setPopular] = useState([])
   useEffect(()=>{

axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=5`).then((res)=>{
    console.log(res.data)
    setMovies(res.data.results[14])
    setMiltery(res.data.results[5])
})

Actions()
Urls()
Fetch()
POPULAR()
},[])


const MovieActions = () =>{

}

const POPULAR = () =>{
    POPULAR_W.then((res)=>{
        console.log(res.data.results[0])
        setPopular(res.data.results[3])
    })
}


const Actions = () =>{
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=7`).then((res)=>{
           console.log(res.data.results[0])
           setActions(res.data.results[0])
    })
}


const Urls = () =>{
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=5`).then((res)=>{
        console.log("res",res.data)
        setUrls(res.data.results[9])
        setFetch(res.data.results[1])
    })
}

const trnding = () =>{
    axios.get(GET_TOP_RATED).then((res)=>{
        console.log("Res",res.data)
        setTrend(res.data.results[0])
    })
}

const Fetch = () =>{
    axios.get(URLS).then((res)=>{
        console.log("resf",res.data)
        setFet(res.data.results[4])
    })
}
    return(
        <SafeAreaView style={styles.container}>
<ImageBackground style={{width:'100%',height:303,alignItems:'center'}} source={{uri:`${IMAGE_BASE_URL+movies.backdrop_path}`}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <Text style={{color:'#fff',fontSize:16,fontWeight:'bold',marginRight:56,marginTop:10}}>TV Shows</Text>
    <Text style={{color:'#fff',fontSize:16,fontWeight:'bold',marginRight:6,marginTop:10}}>Movies</Text>

    </View>
    
 {/* <Text style={{color:'#fff',fontSize:25,fontWeight:'bold',marginTop:46}}>{movies.title}</Text> */}
 <TouchableOpacity style={{width:'30%',height:32,marginTop:135,borderWidth:3,borderColor:'#fff',borderRadius:1,alignItems:'center',flexDirection:'row'}}>
<Image style={{width:24,height:24,marginLeft:16}} source={require('../assets/play.png')}/>
<Text style={{color:'#fff',marginLeft:10,fontSize:15,fontWeight:'bold'}}>Play</Text>
 </TouchableOpacity>
 <Text style={{color:'#fff',marginTop:46,fontSize:23,fontWeight:'bold',}}>{movies.title}</Text>
</ImageBackground>
<ScrollView
  horizontal={true}
>
    <View  style={{flexDirection:'row'}}>
        <TouchableOpacity style={{width:124,height:44,backgroundColor:'black',alignItems:'center',justifyContent:'center',borderRadius:100,borderColor:'red',borderWidth:1}}>
    <Text style={{color:'#fff',fontSize:17,fontWeight:'bold'}}>Action</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:124,height:44,backgroundColor:'black',alignItems:'center',justifyContent:'center',borderRadius:100,borderColor:'red',borderWidth:1}}>
    <Text style={{color:'#fff',fontSize:17,fontWeight:'bold'}}>Comedy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:124,height:44,backgroundColor:'black',alignItems:'center',justifyContent:'center',borderRadius:100,borderColor:'red',borderWidth:1}}>
    <Text style={{color:'#fff',fontSize:17,fontWeight:'bold'}}>Romance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:124,height:44,backgroundColor:'black',alignItems:'center',justifyContent:'center',borderRadius:100,borderColor:'red',borderWidth:1}}>
    <Text style={{color:'#fff',fontSize:17,fontWeight:'bold'}}>Horror</Text>
        </TouchableOpacity>
      
    </View>
   
</ScrollView>
<View style={{flexDirection:'row'}}> 
<Text style={{color:'#fff',fontSize:17,fontWeight:'bold'}}>Trending Now</Text>
<Icon style={{marginLeft:198}} name="east" size={25} color="#fff"/>
</View>

<ScrollView   
 horizontal={true}
>
    <View style={{flexDirection:'row',marginTop:34}}>
     {/* <FlatList
     data={DATA}
     keyExtractor={item => item.id.toString()}
     ItemSeparatorComponent={() => Separator()}
     renderItem={({item})=>(
        <View style={{width:45,height:56,backgroundColor:'red'}}>
            <Text style={{color:'#fff'}}>{item.title}</Text>
            <Image style={{width:67,height:56}} source={{uri:`${IMAGE_BASE_URL+item.poster_path}`}}/>
        </View>
     )}
     /> */}
      
        <TouchableOpacity onPress={() => navigation.navigate('Movies',{movieID:actions.id,Image:actions.backdrop_path,title:actions.title,intro:actions.overview}) } style={{width:165,height:236,backgroundColor:'#fff',marginBottum:45,borderRadius:12}}>
         <ImageBackground style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}} source={{uri:`${IMAGE_BASE_URL+actions.backdrop_path}`}}>

            
         </ImageBackground>
       
        </TouchableOpacity>
         
        <TouchableOpacity onPress={() => navigation.navigate('Movies',{movieID:urls.id,Image:urls.backdrop_path,title:urls.title,intro:urls.overview}) } style={{width:165,height:236,backgroundColor:'#fff',marginBottum:45,borderRadius:6,marginLeft:5}}>
         <ImageBackground style={{width:'100%',height:'100%',alignItems:'center'}} source={{uri:`${IMAGE_BASE_URL+urls.backdrop_path}`}}>
           
            
         </ImageBackground>
       
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Movies',{movieID:fetch.id,Image:fetch.backdrop_path,title:fetch.title,intro:fetch.overview}) }  style={{width:165,height:236,backgroundColor:'#fff',marginBottum:45,borderRadius:6,marginLeft:5}}>
         <ImageBackground style={{width:'100%',height:'100%',alignItems:'center'}} source={{uri:`${IMAGE_BASE_URL+fetch.backdrop_path}`}}>
           
            
         </ImageBackground>
       
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Movies',{movieID:miltery.id,Image:miltery.backdrop_path,title:miltery.title,intro:miltery.overview}) }  style={{width:165,height:236,backgroundColor:'#fff',marginBottum:45,borderRadius:6,marginLeft:5}}>
         <ImageBackground style={{width:'100%',height:'100%',alignItems:'center'}} source={{uri:`${IMAGE_BASE_URL+miltery.backdrop_path}`}}>
           
            
         </ImageBackground>
       
        </TouchableOpacity>



        <TouchableOpacity onPress={() => navigation.navigate('Movies',{movieID:popular.id,Image:popular.backdrop_path,title:popular.title,intro:popular.overview}) }  style={{width:165,height:236,backgroundColor:'#fff',marginBottum:45,borderRadius:6,marginLeft:5}}>
         <ImageBackground style={{width:'100%',height:'100%',alignItems:'center'}} source={{uri:`${IMAGE_BASE_URL+popular.backdrop_path}`}}>
           
            
         </ImageBackground>
       
        </TouchableOpacity>



        <TouchableOpacity onPress={() => navigation.navigate('Movies',{movieID:fet.id,Image:fet.backdrop_path,title:fet.title,intro:fet.overview}) }  style={{width:165,height:236,backgroundColor:'#fff',marginBottum:45,borderRadius:6,marginLeft:5}}>
         <ImageBackground style={{width:'100%',height:'100%',alignItems:'center'}} source={{uri:`${IMAGE_BASE_URL+fet.backdrop_path}`}}>
           
            
         </ImageBackground>
       
        </TouchableOpacity>



        
    
        
        
      

    </View>
 
    
</ScrollView>
<View>
    <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Action</Text>
</View>






<ScrollView>
    <View>
   





    </View>
</ScrollView>

   
          

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'black'


    }
})

export default Home;