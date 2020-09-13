import { StyleSheet, ViewStyle } from 'react-native';
import { rem } from '../../styles';

interface IStyle {
	container: ViewStyle;
}

export const styles = StyleSheet.create<IStyle>({
	container: {
		height: rem(15),
	},
});
