# ReduxPlaygroundThemeApp
Playground app for Redux in a React-Native app

Tags: *reactjs*, *react-native*, *react-redux*


## Index

[1. Instructions](#1-instructions/) 

[2. Lessons learned](#2-lessons-learned)



## 1. Instructions
[Simple Recipe to Build a Theme App in React Native](https://hackernoon.com/simple-recipe-to-build-a-theme-app-in-react-native-8e2456f81bc5)  


## 2. Lessons learned
### react-native
#### TouchableHighlight
[@React-native documentation](https://facebook.github.io/react-native/docs/touchablehighlight)    
### redux
#### workflow
types --> actions --> Component
types --> reducers --> store  
```javascript
//types.js
const CHANGE_PRIMARY_COLOR = 'CHANGE_PRIMARY_COLOR';

export { CHANGE_PRIMARY_COLOR };

//actions.js
import { CHANGE_PRIMARY_COLOR } from './types';

const changePrimaryColor = (color) => ({
	type: CHANGE_PRIMARY_COLOR,
	color
});

export { changePrimaryColor };

//reducers.js
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

//Theme.js
import { changePrimaryColor } from '../components/actions';

handleThemeChange = (color) => {
	//Output to store
	this.props.dispatch(changePrimaryColor(color));
};

```