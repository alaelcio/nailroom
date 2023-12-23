import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  title:{
    color:'#fFF',
    fontFamily: fonts.complement,

    marginTop:45,
    fontSize:25,
    margin:10
  },
  subtitle:{
    marginLeft:65,
   color:'#fff',
   fontSize:19,
   fontFamily:''
  },
  card:{
    marginLeft:140,
    marginTop:-85
  },
  agenda:{
    marginTop:45,
    marginLeft:-58
  },
  date:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
  pink:{
   alignItems:'center',
   justifyContent:'center',

  

  }
  
});