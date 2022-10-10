import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    
} from 'react-native';

function LogoTitle() {
    return (
      <Image
        style={{ width: 80, height: 80,marginLeft:0,marginRight:23 }}
        source={require('../assets/NETFLIX.png')}
      />
    
    );
  }
  export default LogoTitle;