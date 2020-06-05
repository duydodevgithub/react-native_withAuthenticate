import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";

const TrackListScreen = ({ navigation }) => {
	navigation.setOptions({
		headerShown: false,
	});
	return (
		<View>
			<Spacer>
				<Text>Tracklist Screen</Text>
			</Spacer>
		</View>
	);
};

const styles = StyleSheet.create({});

export default TrackListScreen;
