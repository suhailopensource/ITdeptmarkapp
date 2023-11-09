import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
const Stack = createNativeStackNavigator();
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import PreviewImg from "./screens/PreviewImg";





const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Camera" component={CameraScreen} />
                <Stack.Screen name="Preview" component={PreviewImg} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation