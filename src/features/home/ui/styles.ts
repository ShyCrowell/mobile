import { StyleSheet } from 'react-native';
import { rem } from '../../../styles';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	botton: {
		position: 'absolute',
		bottom: rem(15),
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
})
