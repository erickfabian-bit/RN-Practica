import React from 'react';
import { StyleSheet, View } from 'react-native';

export const FlexDirectionScreen = () => {
	return (
		<View style={Styles.container}>
			<View style={[Styles.box, Styles.box1]} />
			<View style={[Styles.box, Styles.box2]} />
			<View style={[Styles.box, Styles.box3]} />
		</View>
	);
};

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#bbb4b4',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},
	box: {
		// flex: 1,
		width: 100,
		height: 100,
	},
	box1: {
		backgroundColor: '#cf4848',
	},
	box2: {
		backgroundColor: '#4861cf',
		alignSelf: 'flex-end',
		position: 'absolute',
		right: 0,
	},
	box3: {
		backgroundColor: '#48cf9b',
		alignSelf: 'center',
	},
});
