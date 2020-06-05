import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-community/async-storage";
import { navigate } from "../RootNavigation.js";

const authReducer = (state, action) => {
	switch (action.type) {
		case "add_error":
			return { ...state, errorMessage: action.payload };
		case "signup":
			return { errorMessage: "", token: action.payload };
		case "signin":
			return { errorMessage: "", token: action.payload };
		case "clear_error_message":
			return { ...state, errorMessage: "" };
		default:
			return state;
	}
};

const clearErrorMessage = (dispatch) => async () => {
	dispatch({ type: "clear_error_message" });
};

const tryLocalSignin = (dispatch) => async () => {
	const token = await AsyncStorage.getItem("token");
	if (token) {
		dispatch({ type: "signin", payload: token });
		navigate("App");
	} else {
		navigate("Signup");
	}
};
const signup = (dispatch) => {
	return async ({ email, password }) => {
		//make api request to signup with email and password
		//if signed up, modify state show that already authenticated
		//if fail, show an error message
		try {
			const response = await trackerApi.post("/signup", { email, password });
			await AsyncStorage.setItem("token", response.data.token);
			dispatch({ type: "signup", payload: response.data.token });
			navigate("Signin");
			//navigate to other screen
		} catch (err) {
			console.log(err.message);
			dispatch({
				type: "add_error",
				payload: "Something went wrong with SignUp",
			});
		}
	};
};

const signin = (dispatch) => {
	return async ({ email, password }) => {
		//make api request to signup with email and password
		//if signed up, modify state show that already authenticated
		//if fail, show an error message
		try {
			const response = await trackerApi.post("/signin", { email, password });
			await AsyncStorage.setItem("token", response.data.token);
			dispatch({ type: "signin", payload: response.data.token });
			navigate("Home");
			//navigate to other screen
		} catch (err) {
			console.log(err.message);
			dispatch({
				type: "add_error",
				payload: "Something went wrong with SignIn",
			});
		}
	};
};

const signout = (dispatch) => {
	return ({ email, password }) => {};
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signout, signup, clearErrorMessage, tryLocalSignin },
	{ token: null, errorMessage: "" }
);
