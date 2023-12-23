import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screen/Home";
import { Profile } from "../screen/Profile";
import { Semi } from "../screen/Semi";
import { SigIn } from "../screen/SigIn";
import { Cadastro } from "../screen/Cadastro";
import { Acalend } from "../screen/Acalend";
import AuthRoutes from "./tab.routes";


const { Navigator, Screen } = createNativeStackNavigator();


export function AppRoutes() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="profile"
                component={Profile}
            />
            <Screen
                name="semi"
                component={AuthRoutes}
            />

            <Screen
                name="sigin"
                component={SigIn}
            />

            <Screen
                name="cadastro"
                component={AuthRoutes}
            />

            <Screen
                name="acalend"
                component={Acalend}
            />

        </Navigator>
    )
}