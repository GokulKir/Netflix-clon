import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

     /*/Open Screens/*/
import Plash from './screens/Plash';
import Signup from './screens/Signup';
import LogoTitle from './screens/LogoTitle';
import SL from './screens/SL';
import Sign from './screens/Sign';
import Slider from './screens/Slider';
import Logo from './screens/Logo';
     /*/Open Screens/*/
     /*/Home Screens/*/
import Home from './Home/Home';
import DrawerContent from './Home/DrawerContent';
      /*/Home Screens/*/
      /*/Tab Screens/*/
import House from './Home/House';
import Movie from './Home/Movie';
       /*/Tab Screens/*/

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="House" component={House} options={{headerShown:false ,
  tabBarIcon: () => <Icon name="home" size={34}/>  
  }}
  
    />
    <Tab.Screen name="Movie" component={Movie} options={{headerShown:false,
    tabBarIcon : () => <Icon name="movie" size={32}/>
    }}/>
    </Tab.Navigator>
  );
}

function MyDrawer(route) {
  return(
    <Drawer.Navigator
    drawerContent = {({...props})=>{
    
      return(
          <DrawerContent {...props} route = {route}></DrawerContent>
      )
  }}
    >
      <Drawer.Screen name="Home" component={Home} options={{headerTitle : (props) => <Logo {...props}/> , headerStyle :{ backgroundColor: 'black',}}}/>
      </Drawer.Navigator>
  )
  
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Plash" component={Plash} options={{headerShown:false }}/>
        <Stack.Screen name="Slider" component={Slider}  options={{headerShown:false}}/>
        <Stack.Screen name="SL"     component={SL}      options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signup}  options={{headerTitle : (props) => <LogoTitle {...props}/> , headerStyle :{ backgroundColor: 'grey',}}} />
        <Stack.Screen name="Sign"   component={Sign}    options={{headerTitle : (props) => <LogoTitle {...props}/> , headerStyle :{ backgroundColor: 'grey',}}}/>
        <Stack.Screen name="MyDrawer" component={MyDrawer} options={{headerShown:false}}/>
        <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}









