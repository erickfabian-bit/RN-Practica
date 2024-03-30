import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
// import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {
	const [number, setNumber] = useState(0);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{number}</Text>

			{/* <PrimaryButton
				label="Incrementar"
				onPress={() => setNumber(number + 1)}
				onLongPress={() => setNumber(0)}
			/> */}

			<Button
				onPress={() => setNumber(number + 1)}
				onLongPress={() => setNumber(0)}
				icon="save"
				mode="contained"
			>
				Incrementar
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 80,
		color: 'black',
		fontWeight: '300',
	},
	button: {
		backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
	},
	buttonPressed: {
		backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
	},
});
