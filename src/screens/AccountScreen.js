import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);
	return (
		<View>
			<Text>Account Screen</Text>
			<Button title="Sign Out" onPress={signout} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default AccountScreen;
