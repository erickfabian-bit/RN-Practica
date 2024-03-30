import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../theme/global.styles';

import { FAB } from 'react-native-paper';

export const CounterM3Screen = () => {
	const [number, setNumber] = useState(0);

	return (
		<View style={globalStyles.centerContainer}>
			<Text style={globalStyles.title}>{number}</Text>

			{/* <Icon name="filter-9-plus" size={30} /> */}

			<FAB
				onPress={() => setNumber(number + 1)}
				onLongPress={() => setNumber(0)}
				style={globalStyles.fab}
				icon="add"
			/>
		</View>
	);
};
