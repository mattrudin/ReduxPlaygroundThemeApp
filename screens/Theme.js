import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { primary, primaryBlue, primaryYellow } from '../components/colors';
import { changePrimaryColor } from '../components/actions';

class Theme extends React.Component {
	handleThemeChange = (color) => {
		//Output to store
		this.props.dispatch(changePrimaryColor(color));
		this.props.navigation.goBack();
	};
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.bigText}>Available Themes</Text>
				<View style={styles.themes}>
					<TouchableHighlight
						onPress={() => this.handleThemeChange(primary)}
						underlayColor='#bbbeee'
						style={styles.row}>
						<Text style={styles.text}>Default</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => this.handleThemeChange(primaryBlue)}
						underlayColor='#bbbeee'
						style={styles.row}>
						<Text style={styles.text}>Primary Blue</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => this.handleThemeChange(primaryYellow)}
						underlayColor='#bbbeee'
						style={styles.row}>
						<Text style={styles.text}>Primary Yellow</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	bigText: {
		fontSize: 32,
		fontWeight: 'bold',
		paddingHorizontal: 60
	},
	themes: {
		marginTop: 50,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	row: {
		margin: 10
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold'
	}
});

export default connect()(Theme);