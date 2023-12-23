import React from 'react';
import { View,Text,Image, ImageBackground, ScrollView } from 'react-native';

import { styles } from './styles';
import PeImg from '../../assets/pe.png';

import { Button } from '../../components/Button';





 
export function SigIn() {
  return (
    <ImageBackground
    style={{flex:1}}
     source={require('../../assets/cinza.png')}
     resizeMode='cover'
    >
      <View style={styles.card}>
     <Text style={styles.text}>bienveind@!</Text>
    <Text style={styles.subtitle}>Nustro Modelos</Text>
     </View>
      
     <Image
     source={PeImg}
     style={{marginLeft:75}}
     />
     
    <View style={styles.marc}>
      <Button
      title='Manicure'
      />
    </View>
    <View style={styles.man}>
    <Image
     source={ManImg}
     style={{width:120, height:120, marginLeft:120}}
     />

     <Button
     title='Manicure Marcia'
     />
   
    
    </View>
    </ImageBackground>
  );
}