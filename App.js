import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import HomeScreen from "./src/screens/HomeScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import AccountScreen from "./src/screens/AccountScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { navigationRef } from "./src/RootNavigation.js";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

// const AuthStack = createStackNavigator();
// const AuthStackScreens = () => {
// 	return (
// 		<AuthStack.Navigator initialRouteName="Signin">
// 			<AuthStack.Screen name="Home" component={HomeScreen} />
// 			<AuthStack.Screen name="Signin" component={SigninScreen} />
// 			<AuthStack.Screen name="Signup" component={SignupScreen} />
// 		</AuthStack.Navigator>
// 	);
// };

const TrackListStack = createStackNavigator();
const TrackListScreens = () => {
	return (
		<TrackListStack.Navigator initialRouteName="TrackList">
			<TrackListStack.Screen name="TrackList" component={TrackListScreen} />
			<TrackListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
		</TrackListStack.Navigator>
	);
};

const AppStack = createBottomTabNavigator();
const AppStackScreens = () => {
	return (
		<AppStack.Navigator>
			<AppStack.Screen name="TrackList" component={TrackListScreens} />
			<AppStack.Screen name="TrackCreate" component={TrackCreateScreen} />
			<AppStack.Screen name="Account" component={AccountScreen} />
		</AppStack.Navigator>
	);
};

// const App = () => {
// 	const token = null;
// 	return (
// 		<NavigationContainer ref={navigationRef}>
// 			{token === null ? <AuthStackScreens /> : <AppStackScreens />}
// 		</NavigationContainer>
// 	);
// };

const Stack = createStackNavigator();
const StackScreens = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="ResolveAuthScreen"
				component={ResolveAuthScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Signin" component={SigninScreen} />
			<Stack.Screen name="Signup" component={SignupScreen} />
			<Stack.Screen
				name="App"
				component={AppStackScreens}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
			<Stack.Screen name="Account" component={AccountScreen} />
		</Stack.Navigator>
	);
};

const App = () => {
	return (
		<NavigationContainer ref={navigationRef}>
			{<StackScreens />}
		</NavigationContainer>
	);
};

export default () => {
	return (
		<AuthProvider>
			<App />
		</AuthProvider>
	);
};
