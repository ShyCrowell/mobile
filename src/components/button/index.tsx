import React from 'react';
import { TouchableOpacity, Text, View, ViewStyle } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';

interface IProps {
	text: string;
	onPress: () => void;
	style?: ViewStyle;
}

export const Button = ({ text, onPress, style }: IProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.container, style]}
		>
			<Feather name={'plus'} style={styles.icon}/>
			<View style={styles.textView}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableOpacity>
	)
}
