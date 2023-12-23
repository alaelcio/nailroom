import React from 'react';
import { View,Image,Text } from 'react-native';

import FotoImg from "../../assets/unha10.png"


import FotImg from "../../assets/unha11.png"

import FoImg from "../../assets/unha12.png"

import { styles } from './styles';

export function Galery() {
  return (
    <View style={styles.container}>

    
       <Image
             source={FotoImg}
             style={{width:110, height:110}}
            />
            <Image
             source={FotImg}
             style={{width:110, height:110}}
            />
             <Image
             source={FoImg}
             style={{width:110, height:110}}
            />
    </View>
  );
}