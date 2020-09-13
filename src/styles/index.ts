import { Dimensions, Platform } from 'react-native';

const MOCK_WIDTH = 414; // width from zeplin mockup
export const entireScreenWidth = Dimensions.get('window').width;

export const rem = (remValue: number = 1): number => (remValue * entireScreenWidth) / MOCK_WIDTH; // MAGIC

export const colors = {
	primal: '#fff',
};
