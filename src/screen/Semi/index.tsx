import React from 'react';
import { View,Text,Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import { styles } from './styles';

import { Button } from '../../components/Button';
import { Galery } from '../../components/Galery';

import { useNavigation } from '@react-navigation/native';

 
export function Semi() {
const Navigation =useNavigation();

function handleAgenda(){
  Navigation.navigate('cadastro')
}

  return (
    <ImageBackground
    style={{flex:1}}
     source={require('../../assets/cinza.png')}
     resizeMode='cover'
    >
      <View style={styles.container}>
      <Text style={styles.title}>
       <TouchableOpacity onPress={handleAgenda}>
        <Text style={styles.pert}>Permanente</Text>
        
      </TouchableOpacity>
        </Text>
      <Galery/>
      <Galery/>
      <Galery/>
      <Galery/>
      </View>

    </ImageBackground>
  );
}