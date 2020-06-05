import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<Text>Home Screen</Text>
			<Button
				title="Let's go"
				onPress={() => navigation.navigate("ResolveAuthScreen")}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default HomeScreen;
