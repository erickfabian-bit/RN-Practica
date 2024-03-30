import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
	return (
		<View style={styles.conatainer}>
			{/* <Text style={styles.title}>BoxObjectScreen</Text> */}
			{/* <View style={styles.purpleBox}></View> */}
			<View style={styles.purpleBox}>
				<Text style={{ color: 'white' }}>Hola erick</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	conatainer: {
		flex: 1,
		backgroundColor: 'red',
	},
	title: {
		fontSize: 30,
		paddingHorizontal: 30,
		paddingVertical: 10,
		borderWidth: 10,
	},
	purpleBox: {
		height: 30,
		backgroundColor: 'purple',
		// margin: 20,
		marginHorizontal: 20,
		marginVertical: 50,
		padding: 5,
	},
});
