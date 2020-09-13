import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Details } from '../features/details/ui';
import { Home } from '../features/home/ui';

const Stack = createStackNavigator();

export default () => {

	return(
		<Stack.Navigator>
		<Stack.Screen name='Home' component={Home} />
		<Stack.Screen name='Details' component={Details} />
		</Stack.Navigator>
	)
}
