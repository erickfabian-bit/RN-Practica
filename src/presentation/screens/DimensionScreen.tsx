import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

export const DimensionScreen = () => {
	const { width, height } = useWindowDimensions();

	return (
		<View>
			<View style={styles.container}>
				<View
					style={{
						...styles.purpleBox,
						width: width * 0.5,
					}}
				/>
			</View>
			<Text style={styles.title}>
				w: {width}, h: {height}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 300,
		backgroundColor: 'red',
	},
	purpleBox: {
		backgroundColor: 'purple',
		width: '50%',
		height: '50%',
	},
	title: {
		fontSize: 25,
		textAlign: 'center',
	},
});
