import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, ScrollView } from "react-native";
import { ThemeProvider } from "react-native-elements";

import Layout from "./components/Layout/Base";
import Search from "./pages/Search";
import Details from "./pages/Details";

function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
        height: "1000px",
      }}
    >
      <Text onClick={() => navigation.navigate("Search")}>Home Screen</Text>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#2ba567",
                borderColor: "red",
                borderBottomWidth: "0",
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#2ba567",
                borderColor: "red",
                borderBottomWidth: "0",
              },
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
