import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Theme from './Theme';

export default createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				header: () => null
			}
		},
		Theme: {
			screen: Theme,
			navigationOptions: ({ navigation }) => ({
				headerTitle: navigation.state.params.title
			})
		}
	},
	{
		headerMode: 'screen'
	}
);