import React from 'react';
import { View,Text,Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import { styles } from './styles';

import { Button } from '../../components/Button';


import { Galery } from '../../components/Galery';


import { useNavigation } from '@react-navigation/native';
 
export function Cadastro() {

const navigation = useNavigation();
 function handleCad (){
  navigation.navigate('acalend')
 }
  return (
    <ImageBackground
    style={{flex:1}}
     source={require('../../assets/cinza.png')}
     resizeMode='cover'
    >
      <View style={styles.card}>
     <Text style={styles.text}>manicure</Text>
     </View>

     <View style={styles.center}>
      <TouchableOpacity onPress={handleCad}>
      <Button
      title='Acrelicas'
      />
</TouchableOpacity> 

      <Button
      title='Semi Permante'
      />

      <Button
      title='Pintado Normal'
      />
     </View>
      <Galery/>

    </ImageBackground>
  );
}