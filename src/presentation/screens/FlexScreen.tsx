import React from 'react';
import { StyleSheet, View } from 'react-native';

export const FlexScreen = () => {
	return (
		<View style={Styles.container}>
			<View style={Styles.box1} />
			<View style={Styles.box2} />
			<View style={Styles.box3} />
		</View>
	);
};

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gray',
	},
	box1: {
		backgroundColor: '#cf4848',
		flex: 1,
	},
	box2: {
		backgroundColor: '#4861cf',
		flex: 2,
	},
	box3: {
		backgroundColor: '#48cf9b',
		flex: 3,
	},
});
