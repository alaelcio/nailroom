import React from 'react';
import { View,TextInput  } from 'react-native';

import { styles } from './styles';



export function Input() {
  return (
    <View style={styles.container}>
         <TextInput
         placeholder='nails@gmail.com'
         placeholderTextColor="#fff"
         style={styles.input}
         />

    <TextInput
         placeholder='*****'
         placeholderTextColor="#fff"
         style={styles.input}
         />
    </View>
    
  );
}