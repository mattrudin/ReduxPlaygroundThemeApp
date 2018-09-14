import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { primary, primaryBlue, primaryYellow } from '../components/colors';
import { changePrimaryColor } from '../components/actions';

const TouchableText = (props) => {
	const color = props.color;
	const text = props.text;
	const onPress = props.onPress;

	return(
		<TouchableHighlight
			onPress={onPress}
			underlayColor='#bbbeee'
			style={styles.row}>
			<Text style={styles.text}>{text}</Text>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	row: {
		margin: 10
	}
});

export default TouchableText;