import React from 'react';
import { View, StyleSheet } from 'react-native';

export const HomeWorkScreen = () => {
	return (
		<View style={styles.container}>
			<View style={[styles.box, styles.purpleBox]} />
			<View style={[styles.box, styles.orangeBox]} />
			<View style={[styles.box, styles.blueBox]} />
		</View>
	);
};

// Todo : imagen 10

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e0b1b1',
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
	},
	box: {
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white',
	},
	purpleBox: {
		backgroundColor: '#ac1d9b',
	},
	orangeBox: {
		backgroundColor: '#d26a0e',
		top: 50,
	},
	blueBox: {
		backgroundColor: '#1993ae',
	},
});

// Todo : imagen 9

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#e0b1b1',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white',
// 	},
// 	purpleBox: {
// 		backgroundColor: '#ac1d9b',
// 		top: 100,
// 	},
// 	orangeBox: {
// 		backgroundColor: '#d26a0e',
// 		left: 100,
// 	},
// 	blueBox: {
// 		backgroundColor: '#1993ae',
// 	},
// });

// Todo : imagen 8

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#e0b1b1',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white',
// 	},
// 	purpleBox: {
// 		backgroundColor: '#ac1d9b',
// 	},
// 	orangeBox: {
// 		backgroundColor: '#d26a0e',
// 		left: 100,
// 	},
// 	blueBox: {
// 		backgroundColor: '#1993ae',
// 	},
// });

// Todo : imagen 7

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#e0b1b1',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white',
// 	},
// 	purpleBox: {
// 		backgroundColor: '#ac1d9b',
// 	},
// 	orangeBox: {
// 		backgroundColor: '#d26a0e',
// 	},
// 	blueBox: {
// 		backgroundColor: '#1993ae',
// 	},
// });

// Todo : imagen 6

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#e0b1b1',
// 	},
// 	box: {
// 		// width: 100,
// 		// height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white',
// 	},
// 	purpleBox: {
// 		backgroundColor: '#ac1d9b',
// 		flex: 1,
// 	},
// 	orangeBox: {
// 		backgroundColor: '#d26a0e',
// 		flex: 1,
// 	},
// 	blueBox: {
// 		backgroundColor: '#1993ae',
// 		flex: 2,
// 	},
// });

// Todo : imagen 5

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#e0b1b1',
// 		flexDirection: 'row',
// 		justifyContent: 'space-between',
// 		alignItems: 'stretch',
// 	},
// 	box: {
// 		width: 100,
// 		height: '100%',
// 		borderWidth: 10,
// 		borderColor: 'white',
// 	},
// 	purpleBox: {
// 		backgroundColor: '#ac1d9b',
// 	},
// 	orangeBox: {
// 		backgroundColor: '#d26a0e',
// 	},
// 	blueBox: {
// 		backgroundColor: '#1993ae',
// 	},
// });

// Todo : imagen 4

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#e0b1b1',
// 		justifyContent: 'space-between',
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white',
// 	},
// 	purpleBox: {
// 		backgroundColor: '#ac1d9b',
// 		alignSelf: 'flex-end',
// 	},
// 	orangeBox: {
// 		backgroundColor: '#d26a0e',
// 		alignSelf: 'center',
// 	},
// 	blueBox: {
// 		backgroundColor: '#1993ae',
// 	},
// });

// Todo : imagen 3

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#e0b1b1',
// 		justifyContent: 'center',
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white',
// 	},
// 	purpleBox: {
// 		backgroundColor: '#ac1d9b',
// 		alignSelf: 'flex-end',
// 	},
// 	orangeBox: {
// 		backgroundColor: '#d26a0e',
// 	},
// 	blueBox: {
// 		backgroundColor: '#1993ae',
// 		alignSelf: 'center',
// 	},
// });

// Todo : imagen 2

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#e0b1b1',
// 		flexDirection: 'column',
// 		justifyContent: 'center',
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white',
// 	},
// 	purpleBox: {
// 		backgroundColor: '#ac1d9b',
// 	},
// 	orangeBox: {
// 		backgroundColor: '#d26a0e',
// 	},
// 	blueBox: {
// 		backgroundColor: '#1993ae',
// 		width: '100%',
// 	},
// });

// Todo : imagen 1

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#e0b1b1',
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white',
// 	},
// 	purpleBox: {
// 		backgroundColor: '#ac1d9b',
// 	},
// 	orangeBox: {
// 		backgroundColor: '#d26a0e',
// 		flex: 1,
// 	},
// 	blueBox: {
// 		backgroundColor: '#1993ae',
// 	},
// });
