import React,{ useEffect,useState } from "react";
import { View , Button , TouchableOpacity, Text } from 'react-native'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
function Success(props) {
    return (
<AlertNotificationRoot>
  <View>
    // dialog box
    <Button
      title={'dialog box'}
      onPress={() =>
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Congrats! this is dialog box success',
          button: 'close',
        })
      }
    />
    // toast notification
    <Button
      title={'toast notification'}
      onPress={() =>
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Congrats! this is toast notification success',
        })
      }
    />
  </View>
</AlertNotificationRoot>
    )

    }
    export default Success;