
import { TouchableOpacity, View,Text } from 'react-native';


import { styles } from './styles';
  
 type Props = {
    title:string;
 }
export function Button({title}:Props) {
  return (
    <View style={styles.container}>
     
       <TouchableOpacity  >
        <Text style={styles.title}>{title}</Text>
       </TouchableOpacity>
     
    </View>
  );
}