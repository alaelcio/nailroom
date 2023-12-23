import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Semi } from "../screen/Semi";
import {Feather} from '@expo/vector-icons';
import { Cadastro } from "../screen/Cadastro";
import {Platform} from 'react-native';
 const AppTab = createBottomTabNavigator();

 const AuthRoutes = () =>{

    return(
        <AppTab.Navigator 
        screenOptions={{
            headerShown:false,
            tabBarLabelPosition:'beside-icon',
            tabBarActiveTintColor:'#FFF',
            tabBarInactiveTintColor:"#FFF",
            tabBarStyle:{
                position:'absolute',
                height:50,
                borderWidth:0,
                backgroundColor:'#918a72'

            },
            tabBarItemStyle:{
                position:'relative',
                top: Platform.OS ==='android' ? -10 :0
            }
        }}
        >
            <AppTab.Screen
            name="semi"
            component={Semi}
            options={{
                tabBarIcon:()=> <Feather name="home" 
                size={25}
                color="#FFF"/>
            }}
           
            />

<AppTab.Screen
            name="cadastro"
            component={Cadastro}
            options={{
                tabBarIcon:()=> <Feather name="user" 
                size={25}
                color="#FFF"/>
            }}
           
            />
        </AppTab.Navigator>
    )
 }

 export default AuthRoutes;
 