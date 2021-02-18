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

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          stackAnimation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Home"
          component={({ navigation }) => (
            <View>
              <Button
                title="Navigate"
                onPress={() => navigation.navigate("Notifications")}
              />
            </View>
          )}
        />
        <Stack.Screen
          name="Notifications"
          component={() => null}
          options={{
            headerCenter: () => <Text fontSize={28}>Hello!</Text>,
            headerRight: () => <Text fontSize={28}>Some other text</Text>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
