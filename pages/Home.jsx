import React from "react";
import { ScrollView } from "react-native";
import { Icon, Text } from "react-native-elements";

import Logo from "../components/UI/Logo";
import Card from "../components/UI/Card";
import RandomDrink from "../components/Pages/Home/RandomDrink";

const Home = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Logo />
      <Card
        type="twoColumns"
        style={{
          marginTop: "10%",
          width: "80%",
        }}
        onPress={() => navigation.navigate("Search")}
      >
        <Icon
          type="font-awesome"
          name="glass"
          containerStyle={{ marginRight: "5%" }}
        />
        <Text>Search for a Drink</Text>
      </Card>
      <RandomDrink {...navigation} />
    </ScrollView>
  );
};

export default Home;
