import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { primary, primaryBlue, primaryYellow } from '../components/colors';
import { changePrimaryColor } from '../components/actions';
import TouchableText from '../components/TouchableText';

class Theme extends React.Component {
	handleThemeChange = (color) => {
		//Output to store
		this.props.dispatch(changePrimaryColor(color));
		this.props.navigation.goBack();
	};
	render() {

		const touchableTextInformation = [	{color: primary, text: 'Default'}, 
											{color: primaryBlue, text: 'Primary Blue'}, 
											{color: primaryYellow, text: 'Primary Yellow'} ];

		const touchableText = touchableTextInformation.map((component, index) => {
			return <TouchableText 
						onPress={() => this.handleThemeChange(component.color)}
						color={component.color}
						text={component.text}
						key={index} />
		});

		return(
			<View style={styles.container}>
				<Text style={styles.bigText}>Available Themes</Text>
				<View style={styles.themes}>
					{touchableText}
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
	text: {
		fontSize: 16,
		fontWeight: 'bold'
	}
});

export default connect()(Theme);