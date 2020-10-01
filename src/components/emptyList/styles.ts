import { StyleSheet, ViewStyle } from 'react-native';

interface IStyle {
	container: ViewStyle;
}

export const styles = StyleSheet.create<IStyle>({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
})
