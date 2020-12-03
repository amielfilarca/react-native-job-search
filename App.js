import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Search, Post } from './screens';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={'Search'}>
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Post" component={Post} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
