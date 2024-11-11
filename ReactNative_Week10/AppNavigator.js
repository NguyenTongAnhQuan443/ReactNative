import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from './components/Screen01';
import Screen02 from './components/Screen02';
import Screen03 from './components/Screen03';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Screen01} options={{ title: 'Home', headerShown: false }} />
            <Stack.Screen name="Products" component={Screen02} options={{ title: 'Products', headerShown: false }} />
            <Stack.Screen name="ProductDetails" component={Screen03} options={{ title: 'Product Details', headerShown: false }} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
