import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';

class Home extends React.Component {
	handleSettingsPress = () => {
		this.props.navigation.navigate('Theme', { title: 'Theme'});
	};

	render() {
		return (
			<View style={[styles.container, { backgroundColor: this.props.primaryColor }]} >
				<View style={styles.headerContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={this.handleSettingsPress} >
						<FontAwesome 
							name='gear'
							size={24}
							color='red' /> 
					</TouchableOpacity>
				</View>
				<Text>Home</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0
	},
	button: {
		alignSelf: 'flex-end',
		paddingVertical: 50,
		paddingHorizontal: 20
	}
});

const mapStateToProps = (state) => {
	return {
		primaryColor: state.theme.primaryColor
	};
};

export default connect(mapStateToProps)(Home);