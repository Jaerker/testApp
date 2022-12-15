import { ParamListBase, RouteProp } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React from 'react';
import {Alert, Button, Text, useColorScheme, View } from 'react-native';
import Test from '../../features/test/Test';
import { useStore } from '../../stores/store';

interface Props {
  route: RouteProp<ParamListBase, string>,
  navigation: any
}

interface token {
    _id: string
}

export default observer( function AuthenticationScreen ({ navigation }: Props) {
  const text = {
    color: useColorScheme() === 'dark' ? '#000000' : '#ffffff'
  }
  const { testStore } = useStore();
  const { testInfo, loading, loadTest, setToken, getToken, deleteToken } = testStore;

  const btnPress = async() =>{
    const msg = await getToken();

    const jsonMsg:token = JSON.parse(msg);

    Alert.alert("Message", jsonMsg._id);
  }

  return (<>
    <Button title='Get Token' onPress={()=>{btnPress()}} />
    <Button title='Set Token' onPress={()=>{setToken('token')}} />
    <Button title='Delete Token' onPress={()=>{deleteToken()}} />
    <Test />
  
  </>);
});


