import React from 'react';
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.purpleBox} />
			<View style={styles.orangeBox} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: '#28C4D9',
		justifyContent: 'center',
		alignItems: 'center',
	},
	purpleBox: {
		backgroundColor: '#6569c6',
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white',
		position: 'relative',
		top: 0,
	},
	orangeBox: {
		backgroundColor: '#F0A23B',
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white',
		top: 50,
		left: -100,
	},
	title: {
		fontSize: 25,
		textAlign: 'center',
	},
});
