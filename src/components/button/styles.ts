import { StyleSheet, ViewStyle } from 'react-native';
import { rem } from '../../styles';

export const styles = StyleSheet.create({
	container: {
		height: rem(50),
		width: rem(375),
		borderRadius: rem(12),
		backgroundColor: '#761AEC',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingRight: rem(10),
		paddingLeft: rem(10),
	},
	icon: {
		color: '#FFFFFF',
		fontSize: rem(30),
	},
	textView: {
		flex: 1,
		alignItems: 'center',
		paddingRight: rem(30),
	},
	text: {
		color: '#FFFF',
		fontSize: rem(17),
		fontWeight: 'bold',
	},
});
