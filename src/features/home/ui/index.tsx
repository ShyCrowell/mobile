import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/button';
import { EmptyList } from '../../../components/emptyList';

export const Home = () => {
	const navigation = useNavigation();

	return(
		<View style={{ flex: 1 }}>
			<Button onPress={() => navigation.navigate('Details')} text='go detaild'/>
			<EmptyList/>
		</View>
	)
}
