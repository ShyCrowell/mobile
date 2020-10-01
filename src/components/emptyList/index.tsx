import React from 'react';
import { View } from 'react-native';
import NoTasks from '../../assets/NoTasks.svg';
import { styles } from './styles';

export const EmptyList = () => {
	return(
		<View
			style={styles.container}
		>
			<NoTasks/>
		</View>
	)
}
