import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface IProps {
	text: string;
	onPress: () => void;
}

export const Button = ({ text, onPress }: IProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={styles.container}
		>
			<Text>{text}</Text>
		</TouchableOpacity>
	)
}
