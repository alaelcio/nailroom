import React from 'react';
import { ImageBackground,View,Text,TextInput, Image,FlatList } from 'react-native';

import { styles } from './styles';
import PerfilImg from '../../assets/Rectangle1.png';

import PerImg from '../../assets/unha10.png';

import {Feather,MaterialIcons} from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const data=[
    {
        id:'1',
        title:'alalla',
    }
]

export function Profile() {

    const navigation = useNavigation()
    
    function handleCalend(){
        navigation.navigate('semi')
    }
  return (
    <ImageBackground 
    style={styles.container}
    source={require('../../assets/Rectangle.png')}
    resizeMode='cover'
    >
        <View  style={styles.container}>
            <Text style={styles.title}>Perfil de Manuela</Text>
           
            <Image
            source={PerfilImg}
            style={{margin:20}}
            />
            <View style={styles.star}>
            <Text style={styles.subtitle}>Manuela Pinto</Text>
                <Feather
                name="star"
                color='#FFF'
                size={25}
                />
                
            </View>
            <View style={styles.galery}>
                    <Image
                     source={PerImg}
                    />
                     <Image
                     source={PerImg}
                    />
                     <Image
                     source={PerImg}
                    />
                </View>

                <View>
                    <Text style={styles.rec}>Recomendações</Text>
                </View>
                <View style={styles.sta}>
                <Feather
                name="star"
                color='#f1d10f'
                size={25}
                />
                <Feather
                name="star"
                color='#f1d10f'
                size={25}
                />
                 <Feather
                name="star"
                color='#f1d10f'
                size={25}
                
                />

                <View style={styles.card}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iste, ducimus consequatur, commodi, molestiae enim odio possimus quas eveniet cum quo. 
                        Autem laboriosam quis velit sequi ipsum corrupti quam eius.
                    </Text>
                    <View style={styles.calen}>
                    <MaterialIcons
                    name='calendar-today'
                    size={25}
                    color='#fff'
                    onPress={handleCalend}
                    />
                    </View>
                </View>
                
                </View>
        </View>
       
    </ImageBackground>
  );
}