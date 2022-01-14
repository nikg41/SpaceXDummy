import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from './container/InitialScreen';
import RegisterScreen from "./container/RegisterScreen";
import SignInScreen from './container/SignInScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </Stack.Navigator>
    );
}

export { RootStack };