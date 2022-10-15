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
    ScrollView,
    SafeAreaView,
    TextInput

} from 'react-native';
import {URLS,POPULAR_W,POPULAR_MOVIES} from '../url';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app";
function House ({navigation}) {
    const user = firebase.auth().currentUser;
    const [movie, setMovie] = useState([])
    const [popular , setPopular] = useState([])
    const [rent , setRent] = useState([])
    const [rate , setRate] = useState([])
    const [move , setMove] = useState([])
    const [movie1 , setMovie1] = useState([])
    const [movie2 , setMovie2] = useState([])
    const [movie3 ,  setMovie3] = useState([])
    const [fire , setFire] = useState([])
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
    useEffect(()=>{
     PopularMovies()
     firestore().collection(user.uid).get().then((snapshot)=>{
        const Allpost = snapshot.docs.map((product)=>{
            return {
                ...product.data(),
                id:product.id
            }
        })
        console.log(Allpost)
        setFire(Allpost)
     })
     
    },[])

    const PopularMovies = () =>{
        POPULAR_MOVIES.then((res)=>{
            console.log("House Page",res)
            setMovie(res.data.results[16])
            setPopular(res.data.results[17])
            setRent(res.data.results[18])
            setRate(res.data.results[19])
            setMove(res.data.results[6])
            setMovie1(res.data.results[7])
            setMovie2(res.data.results[8])
            setMovie3(res.data.results[9])
          
        })
    }

const Movies = () =>{
    const Allmovies = firestore().collection(user.uid).add({
        image:movie.backdrop_path,
        title:movie.title,

      })
}
const MovieRemove = async () =>{
firestore().collection(user.uid).remove().then(()=>{
    console.log('Deleted movie')
})
  
}
     
    
    return(
   <View style={styles.container}>
    <SafeAreaView>
        <ScrollView >
        <ScrollView  horizontal={true}>
            <View  style={{alignItems:'center',marginTop:26,flexDirection:'row'}}>
                <TouchableOpacity style={{width:334,height:126,borderRadius:10,marginLeft:28,borderWidth:2,borderColor:'#fff'}}>
               <Image style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+movie.backdrop_path}`}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width:334,height:126,borderRadius:10,marginLeft:28,borderWidth:2,borderColor:'#fff'}}>
               <Image style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+popular.backdrop_path}`}}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={{width:334,height:126,borderRadius:10,marginLeft:28,borderWidth:2,borderColor:'#fff'}}>
               <Image style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+rent.backdrop_path}`}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width:334,height:126,borderRadius:10,marginLeft:28,borderWidth:2,borderColor:'#fff'}}>
               <Image style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+rate.backdrop_path}`}}/>
                </TouchableOpacity>
                
                
       

            </View>
        </ScrollView>
        <View style={{marginLeft:34,marginTop:42,flexDirection:'row'}}>
            <Text style={{color:'grey',fontSize:18,fontWeight:'bold'}}>CONTINUE </Text>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold',marginLeft:10}}>WATCHING </Text>
            <Icon style={{marginLeft:45}} color="#fff" name="east" size={24}/>
        </View>
        <View style={{alignItems:'center',marginTop:33}}>
            <View style={{width:'90%',height:33,backgroundColor:'#fff',borderRadius:34,flexDirection:'row',alignItems:'center'}}>
                <Icon style={{marginLeft:13}} name="search" size={30}/>
                
                <TextInput style={{width:"70%",height:43,fontSize:18,fontWeight:'bold',paddingLeft:12}}  placeholder="Search"/>


            </View>
            
        </View>
        <View>
            <View style={{flexDirection:'row',marginLeft:34,marginTop:33}}>
                <Text style={{color:'grey',fontSize:18,fontWeight:'bold'}}>NOW</Text>
                <Text style={{color:'#fff',fontSize:18,fontWeight:'bold',marginLeft:10}}>All</Text>
                <Icon style={{marginLeft:175}} color="#fff" name="east" size={24}/>
            </View>
            <ScrollView  horizontal={true}>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={() => navigation.navigate('Movies',{movieID:movie.id,Image:movie.backdrop_path,title:movie.title,intro:movie.overview},Movies()) } style={{width:154,height:226,borderWidth:2,marginTop:23,borderRadius:12,borderColor:'#fff'}}>
                    <Image style={{width:'98%',height:'98%'}}  source={{uri:`${IMAGE_BASE_URL+movie.poster_path}`}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Movies',{movieID:move.id,Image:move.backdrop_path,title:move.title,intro:move.overview}) } style={{width:154,height:226,borderWidth:2,marginTop:23,borderRadius:12,borderColor:'#fff',marginLeft:12}}>
                  <Image style={{width:'98%',height:'98%'}}  source={{uri:`${IMAGE_BASE_URL+move.poster_path}`}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Movies',{movieID:movie2.id,Image:movie2.backdrop_path,title:movie2.title,intro:movie2.overview}) } style={{width:154,height:226,borderWidth:2,marginTop:23,borderRadius:12,borderColor:'#fff',marginLeft:12}}>
                  <Image style={{width:'98%',height:'98%'}}  source={{uri:`${IMAGE_BASE_URL+movie2.poster_path}`}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Movies',{movieID:movie1.id,Image:movie1.backdrop_path,title:movie1.title,intro:movie1.overview}) } style={{width:154,height:226,borderWidth:2,marginTop:23,borderRadius:12,borderColor:'#fff',marginLeft:12}}>
                  <Image style={{width:'98%',height:'98%'}}  source={{uri:`${IMAGE_BASE_URL+movie1.poster_path}`}}/>
                  </TouchableOpacity>
                  
                </View>
            </ScrollView>
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:18,color:'grey',marginLeft:34,marginTop:10}}>SELECTED</Text>
                    <Text style={{fontSize:18,color:'#fff',marginLeft:10,marginTop:10}}>MOVIES</Text>
                    <Icon style={{marginLeft:98,marginTop:12}} color="#fff" name="east" size={24}/>
                </View>
            </View>
        </View>
        <View style={{flexDirection:'row',marginLeft:0,flex:1}}>
        {fire.map((product)=>{
            return(
                
                <ScrollView horizontal={true}  key={product.id}>
                <View style={{marginLeft:0}} >
                 
                    <TouchableOpacity style={{width:154,height:226,borderWidth:2,marginTop:23,borderRadius:12,borderColor:'#fff',marginLeft:12}}>
                        <ImageBackground style={{width:'98%',height:'98%'}} source={{uri:`${IMAGE_BASE_URL+product.image}`}}>
                            <TouchableOpacity  onPress={MovieRemove} style={{marginTop:5,marginLeft:5}}>
                                <Icon style={{color:'#fff'}} size={24} name="clear"/>
                            </TouchableOpacity>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
          
            )
            })}
            
            </View>
            
        </ScrollView>
    </SafeAreaView>
    

  

   </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'black'
    }
})

export default House;