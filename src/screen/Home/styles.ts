import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {
    flex:1,
   
  },
  title:{
    marginTop:50,
    margin:35,
    fontSize:25,
    color:'#FFF',
    textTransform:'uppercase',
    
  },
  subtitle:{
    textAlign:'center',
    marginTop:-25,
    fontSize:23,
    color:'#fff',
    fontFamily:fonts.complement,
  }
 
});