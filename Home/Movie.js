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
    SafeAreaView
} from 'react-native';
import {URLS,POPULAR_W,POPULAR_MOVIES} from '../url';
import Icon from 'react-native-vector-icons/MaterialIcons';
function Movie ({navigation}) {
    const [movies , setMovies] = useState([])
    const [movies1, setMovies1] = useState([])
    const [movies2, setMovies2] = useState([])
    const [movies3 , setMovies3] = useState([])
    const [movies4 , setMovies4] = useState([])
    const [movies5 , setMovies5] = useState([])
    const [movies6 , setMovies6] = useState([])
    const [movies7 , setMovies7] = useState([])
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    useEffect(()=>{
        APIS()

    },[])
    const APIS = () =>{
        POPULAR_MOVIES.then((res)=>{
            console.log("Moivie tap page: ",res.data.results);
            setMovies(res.data.results[7])
            setMovies1(res.data.results[12])
            setMovies2(res.data.results[16])
            setMovies3(res.data.results[17])
            setMovies4(res.data.results[19])
            setMovies5(res.data.results[13])
            setMovies6(res.data.results[11])
            setMovies7(res.data.results[2])
            
        
        })
    }
    return(
   <View style={styles.container}>
    <SafeAreaView>
        <ScrollView horizontal={true}  pagingEnabled={true}
        showsHorizontalScrollIndicator={false}  >
            <View style={{alignItems:'center',marginTop:12,flexDirection:'row'}}>
             
                    <TouchableOpacity  style={{width:345,height:208,borderWidth:2,borderColor:'#fff',marginLeft:20,borderRadius:12}}>
               <Image  style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+movies.poster_path}`}}/>
               </TouchableOpacity>

               <TouchableOpacity  style={{width:345,height:208,borderWidth:2,borderColor:'#fff',marginLeft:20,borderRadius:12}}>
               <Image  style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+movies1.poster_path}`}}/>
               </TouchableOpacity>

               <TouchableOpacity   style={{width:345,height:208,borderWidth:2,borderColor:'#fff',marginLeft:20,borderRadius:12}}>
               <Image  style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+movies2.poster_path}`}}/>
               </TouchableOpacity>


               <TouchableOpacity   style={{width:345,height:208,borderWidth:2,borderColor:'#fff',marginLeft:20,borderRadius:12}}>
               <Image  style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+movies3.poster_path}`}}/>
               </TouchableOpacity>
              

            </View>
        </ScrollView>
        <View>
            <View style={{marginLeft:20,marginTop:20,flexDirection:'row'}}>
                <Text style={{color:'grey',fontSize:23}}>CHECK ALL</Text>
                <Text style={{color:'#fff',marginLeft:15,fontSize:23}}>MOVIES</Text>
                <Icon style={{marginLeft:54}} name="east" color="#fff" size={34} />
            </View>
        </View>
        <ScrollView horizontal={true}>
            <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{width:234,height:336,borderWidth:2,borderColor:'#fff',marginTop:20,marginLeft:20,borderRadius:5}}>
                <Image style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+movies1.poster_path}`}}/>
          </TouchableOpacity>

          <TouchableOpacity style={{width:234,height:336,borderWidth:2,borderColor:'#fff',marginTop:20,marginLeft:20,borderRadius:5}}>
                <Image style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+movies5.poster_path}`}}/>
          </TouchableOpacity>


          <TouchableOpacity style={{width:234,height:336,borderWidth:2,borderColor:'#fff',marginTop:20,marginLeft:20,borderRadius:5}}>
                <Image style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+movies6.poster_path}`}}/>
          </TouchableOpacity>


          <TouchableOpacity style={{width:234,height:336,borderWidth:2,borderColor:'#fff',marginTop:20,marginLeft:20,borderRadius:5}}>
                <Image style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+movies4.poster_path}`}}/>
          </TouchableOpacity>


          <TouchableOpacity style={{width:234,height:336,borderWidth:2,borderColor:'#fff',marginTop:20,marginLeft:20,borderRadius:5}}>
                <Image style={{width:'100%',height:'100%'}} source={{uri:`${IMAGE_BASE_URL+movies7.poster_path}`}}/>
          </TouchableOpacity>
         
        </View>
        </ScrollView>
    </SafeAreaView>
   </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'black',
        
    }
})

export default Movie;