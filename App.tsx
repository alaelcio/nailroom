
import {useFonts,

  Inter_400Regular,
  Inter_800ExtraBold,
 
} from '@expo-google-fonts/inter';

import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
   
    Inter_800ExtraBold
  });

    if( !fontsLoaded)
      return null
  
  return (
    <Routes/>

    
  );
}


