import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './src/navigation';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default () => {
	return (
		<View style={{ flex: 1 }}>
			<StatusBar style='auto' />
			<NavigationContainer>
				<Navigator />
			</NavigationContainer>
		</View>
	);
}
