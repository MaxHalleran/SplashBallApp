import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { PanGestureHandler, State, ScrollView, } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');

export default class GameBall extends Component {
	constructor(props) {
		super(props);
		this._translateX = new Animated.Value(0);
		this._translateY = new Animated.Value(0);
		this._lastOffset = { x: 0, y: 0 };
		this._onGestureEvent = Animated.event(
			[
				{
					nativeEvent: {
						translationX: this._translateX,
						translationY: this._translateY,
					},
				},
			],
			{ useNativeDriver: true }
		);
	}
	_onHandlerStateChange = event => {
		if (event.nativeEvent.oldState === State.ACTIVE) {
			this._lastOffset.x += event.nativeEvent.translationX;
			this._lastOffset.y += event.nativeEvent.translationY;
			this._translateX.setOffset(this._lastOffset.x);
			this._translateX.setValue(0);
			this._translateY.setOffset(this._lastOffset.y);
			this._translateY.setValue(0);
		}
	};
	render() {
		return (
			<PanGestureHandler
				{...this.props}
				onGestureEvent={this._onGestureEvent}
				onHandlerStateChange={this._onHandlerStateChange}>
				<Animated.View
					style={[
						pageStyles.box,
						{
							transform: [
								{ translateX: this._translateX },
								{ translateY: this._translateY },
							],
						},
						this.props.boxStyle,
					]}
				/>
			</PanGestureHandler>
		);
	}
}

const pageStyles = StyleSheet.create({
	gameBall: {
		height: 250,
		width: 250,
		borderRadius: 500,
		justifyContent: 'center',
		alignItems: 'center',
	},
	box: {
		width: 250,
		height: 250,
		alignSelf: 'center',
		backgroundColor: '#ffcc44',
		borderRadius: 500,
		margin: 10,
		zIndex: 200,
		top: (height - 250) / 2,
	},
})