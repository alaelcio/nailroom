import React from 'react';
import { ImageBackground,View,Text,TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { useNavigation } from '@react-navigation/native';

export function Home() {

  const navigation = useNavigation();

  function handlerStar(){
    navigation.navigate('profile');
  }
  return (
    <ImageBackground 
    style={styles.container}
    source={require('../../assets/back.png')}
    >
        <View  style={styles.container}>
            <Text style={styles.title}>open nails</Text>
            <Text style={styles.subtitle}>Vamos na sua casa</Text>
            
            <Input/>
        <TouchableOpacity 
        onPress={handlerStar}
        >
        <Button
         title='Entrar'
         
        />
        </TouchableOpacity>

        
        </View>
        
    </ImageBackground>
  );
}