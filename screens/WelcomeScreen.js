import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default class WelcomeScreen extends Component {
	render() {
		return (
			<View style={[pageStyles.container]}>
				<LinearGradient
					colors={['rgba(255, 87, 3, 1)', 'rgba(3, 171, 255, 1)', 'rgba(171, 3, 255, 1)', 'rgba(255, 213, 2, 1)']}
					style={[pageStyles.gradient,]}
					start={[1, 0]}
					end={[0, 1]}
				>
					<Text style={[pageStyles.title]}>Splash Ball!</Text>
					<View style={[pageStyles.seperator]}></View>
					<TouchableOpacity
						style={[pageStyles.button]}
						onPress={() => { this.props.navigation.navigate('Game') }}
					>
						<Text style={[pageStyles.buttonText]}>Play!</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
		)
	}
};

const pageStyles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: height,
		width: width,
	},
	gradient: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		opacity: 0.8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 60,
		color: '#03ff25',
		fontFamily: 'concert-one',
		textAlign: 'center',
	},	
	button: {
		borderRadius: 15,
		backgroundColor: '#ffae00',
		borderColor: '#b57c00',
		borderWidth: 3,
		paddingHorizontal: 75,
		paddingVertical: 15,
	},
	buttonText: {
		color: '#ffffff',
		fontSize: 35,
	},	
	seperator: {
		height: 50,
	},
	testBorder: {
		borderWidth: 4,
		borderColor: 'red',
		borderStyle: 'solid',
	}
});

const colors = [
	'rgba(255, 87, 3, 1)',
	'rgba(3, 171, 255, 1)',
	'rgba(171, 3, 255, 1)',
	'rgba(255, 213, 2, 1)',
];