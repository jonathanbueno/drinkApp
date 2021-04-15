import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "react-native-elements";

import Search from "./pages/Search";
import Details from "./pages/Details";
import Home from "./pages/Home";
import { isNull } from "lodash";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#2ba567",
                borderBottomWidth: "0",
                borderColor: "#2ba567",
                shadowColor: "transparent",
              },
              headerTintColor: "#fff",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
