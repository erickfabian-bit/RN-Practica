import React from 'react';
import { SafeAreaView } from 'react-native';
// import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
// import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
// import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
// import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
// import { PositionScreen } from './src/presentation/screens/PositionScreen';
import { FlexScreen } from './src/presentation/screens/FlexScreen';

export const App = () => {
	return (
		<PaperProvider
			settings={{
				icon: props => <MaterialIcon {...props} />,
			}}
		>
			<SafeAreaView style={{ flex: 1 }}>
				{/* <HelloWorldScreen name="Erick Smash" /> */}
				{/* <CounterScreen /> */}
				{/* <CounterM3Screen /> */}
				{/* <BoxObjectModelScreen /> */}
				{/* <DimensionScreen /> */}
				{/* <PositionScreen /> */}
				<FlexScreen />
			</SafeAreaView>
		</PaperProvider>
	);
};
