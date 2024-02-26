import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import InstagramHomePage from '../screens/InstagramHomePage';

const StackNav=createNativeStackNavigator();
export function HomeStackNavigation(){
    return(
        <StackNav.Navigator>
            <StackNav.Screen
                name="Login"
                component={Login}
                options={{headerShown:false,}}/>

                <StackNav.Screen
                  name="Home Page"
                  component={InstagramHomePage}
                  options={{headerShown:false,}}/>

        </StackNav.Navigator>
    );
}