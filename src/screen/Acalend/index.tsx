import React, { useState } from 'react';
import { View,ImageBackground,Image,Text, Platform, TouchableOpacity} from 'react-native';

import DateTimepicker from '@react-native-community/datetimepicker'


import PerfilImg from '../../assets/Rectangle1.png';
import { styles } from './styles';
import { Button } from '../../components/Button';


import { useNavigation } from '@react-navigation/native';

export function Acalend(){

    const navigation = useNavigation();
    function handle(){
        navigation.navigate('home')
    }

 function handleSet(){}

    const [] = useState (Platform.OS = 'ios' );
    const [dataset, setHora] = useState(new Date());
    return(

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
                 <View style={styles.card}>
                <Text style={styles.subtitle}>Manuela Pinto</Text>
                </View>
                <View style={styles.agenda}>
                    <TouchableOpacity onPress={handle}>
                <Button
                 title='Agendamentos'
                />
                </TouchableOpacity>
                </View>
                 <View>
                 <DateTimepicker
                            value={dataset}
                            mode="date"
                            display="calendar"
                            onChange={handleSet}
                            

                            />

                 </View>
            </View>
            
        </ImageBackground>
    )
}
   