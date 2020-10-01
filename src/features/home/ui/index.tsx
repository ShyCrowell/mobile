import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/button';
import { EmptyList } from '../../../components/emptyList';
import { styles } from './styles';

export const Home = () => {
	const navigation = useNavigation();

	return(
		<View style={styles.container}>
			<EmptyList/>
			<View style={styles.botton}>
				<Button onPress={() => navigation.navigate('Details')} text='Продам гараж'/>
			</View>
		</View>
	)
}
