import { combineReducers } from 'redux';
import { CHANGE_PRIMARY_COLOR } from './types';

const initialState = {
	primaryColor: '#ebebeb'
};

const theme = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_PRIMARY_COLOR:
			return {
				...state,
				primaryColor: action.color
			};
		default:
			return state;
	}
};

export default combineReducers({
	theme
});