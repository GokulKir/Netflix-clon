import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View,Text,Image,ImageBackground,TouchableOpacity,Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';



const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'L E T   S T A R T ',
      text1:'T O',
      text2:'G A M E',
   
      image: require('../assets/DER.jpg'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'W A T C H ',
      text1:'E V E R Y   W H E R E',
      image: require('../assets/Enj.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      text: 'E N J O Y ',
      text1: 'A L L    M I N U T E S',
      image: require('../assets/La.jpg'),
      backgroundColor: '#22bcb5',
    }
  ];
 
  export default class Slider extends React.Component {
    constructor(props) {
         super(props)
         this.state = {
            showRealApp: false
          }
    }
  
    _renderItem = ({ item }) => {
      return (
        <View >
        
          <ImageBackground style={{width:"100%",height:'100%',alignItems:'center'}} source={item.image} >
          <Text style={{color:'#fff',fontSize:34,marginTop:323,fontWeight:'bold'}} >{item.text}</Text>
          <Text style={{color:'#fff',fontSize:34,marginTop:13,fontWeight:'bold'}}>{item.text1}</Text>
          <Text style={{color:'#fff',fontSize:34,marginTop:13,fontWeight:'bold'}}>{item.text2}</Text>
          </ImageBackground>
        </View>
      );
    }
    _onDone = () => {
      // User finished the introduction. Show real app through
      // navigation or simply by controlling state
      this.setState({ showRealApp: true });
    }
    _renderNextButton = () => {
      return (
        <View style={styles.buttonCircle}>
       <View style={styles.buttonCircle}>
      <TouchableOpacity >
     <Icon color="#fff" size={24} name="md-arrow-redo"/>
      </TouchableOpacity>
        </View>
        </View>
      );
    };
    _renderDoneButton = () => {
      return (
        <View  >
      <TouchableOpacity style={styles.buttonCircle} onPress={() => this.props.navigation.navigate('SL')} >
<Icon size={24} color="#fff" name="md-cloud-done-outline"/>
      </TouchableOpacity>
        </View>
      );
    };
    render() {
      
        return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}
        renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}/>;
      
    }
  }
  const styles = StyleSheet.create({
      buttonCircle: {
        width: 90,
        height: 40,
        borderWidth:3,
        borderColor:'red',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      Next:{
        width:"20%",
  
      },
      Touchable:{
        width:142,
        height:45,
        backgroundColor:'#530a73',
        alignItems:'center',
        justifyContent:'center',
         borderRadius:54
      }
   
    });
     
    // slides = [...]