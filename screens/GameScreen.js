import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { PanGestureHandler, State, ScrollView, } from 'react-native-gesture-handler';

import GameBall from '../components/GameBall';

const { height, width } = Dimensions.get('window');

export default class GameScreen extends Component {
	render() {
		return (
			<View style={[pageStyles.container]}>
				<GameBall />
			</View>
		)
	}
}

// export default class GameScreen extends Component {
// 	render() {
// 		return (
// 			<View style={styles.scrollView}>
// 				<DraggableBox />
// 			</View>
// 		);
// 	}
// }

const pageStyles = StyleSheet.create({
	container: {
		height: height,
		width: width,
		backgroundColor: '#336699',
		flex: 1,
	},
})