/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View, Text, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          stackAnimation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Screen1"
          component={({ navigation }) => (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ paddingBottom: 24, textAlign: "center" }}>
                Screen 1
              </Text>
              <Button
                title="PUSH TO SCREEN 2"
                onPress={() => navigation.push("Screen2")}
              />
            </View>
          )}
        />
        <Stack.Screen
          name="Screen2"
          component={({ navigation }) => (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ paddingBottom: 24, textAlign: "center" }}>
                Screen 2
              </Text>
              <Button
                title="PUSH TO SCREEN 3"
                onPress={() => navigation.push("Screen3")}
              />
            </View>
          )}
        />
        <Stack.Screen
          name="Screen3"
          component={({ navigation }) => (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ paddingBottom: 24, textAlign: "center" }}>
                Screen 3
              </Text>
              <Button
                title="RESET TO SCREEN 1 WITH INDEX OF 0"
                onPress={() =>
                  navigation.reset({
                    routes: [{ name: "Screen1" }],
                    index: 0,
                  })
                }
              />
            </View>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
