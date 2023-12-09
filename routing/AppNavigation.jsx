import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'twrnc'

import useAuth from '../providers/AuthProvider';

import { View, Text } from 'react-native';

import HomeScreen from '../screens/home/HomeScreen';
import BottonNavigationBar from '../components/BottonNavigationBar/BottonNavigationBar';





const Stack = createStackNavigator()




function AppNavigation(){

    const { user, logIn, logOut } = useAuth()

    const isAuth = user !== null ? 'Home' : 'Onboarding'


    return(
        <View style={tw`w-full h-full`}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={isAuth} screenOptions={{headerShown: false, }}>
                    <Stack.Screen name="Onboarding"  component={HomeScreen} />
                    <Stack.Screen name="Auth"  component={HomeScreen}/>
                    <Stack.Screen name="Home"  component={HomeScreen}/>
                    <Stack.Screen name="Search"  component={HomeScreen}/>
                    <Stack.Screen name="Shop"  component={HomeScreen}/>
                    <Stack.Screen name="Profile"  component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
            <BottonNavigationBar/>
        </View>
        
    )
}

export default AppNavigation