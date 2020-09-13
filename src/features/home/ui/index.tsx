import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
	const navigation = useNavigation();

	return(
		<View>
			<TouchableOpacity onPress={() => navigation.navigate('Details')}>
				<Text>hjgthgh</Text>
			</TouchableOpacity>
		</View>
	);
};
