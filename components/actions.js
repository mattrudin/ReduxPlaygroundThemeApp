import { CHANGE_PRIMARY_COLOR } from './types';

const changePrimaryColor = (color) => ({
	type: CHANGE_PRIMARY_COLOR,
	color
});

export { changePrimaryColor };