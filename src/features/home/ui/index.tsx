import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/button';

export const Home = () => {
	const navigation = useNavigation();

	return(
		<View>
			<Button onPress={() => navigation.navigate('Details')} text='go detaild'/>
		</View>
	)
}
