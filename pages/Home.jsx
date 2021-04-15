import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Icon, Text } from "react-native-elements";
import axios from "axios";

import Logo from "../components/UI/Logo";
import MyCard from "../components/UI/Card";

const Home = ({ navigation }) => {
  const giveMeRandom = () => {
    try {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(({ data }) => {
          navigation.navigate("Details", {
            drink: data?.drinks[0],
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Logo />
      <MyCard
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
      </MyCard>
      <MyCard
        type="twoColumns"
        style={{
          marginTop: "5%",
          width: "80%",
        }}
        onPress={giveMeRandom}
      >
        <Icon
          type="font-awesome"
          name="glass"
          containerStyle={{ marginRight: "5%" }}
        />
        <Text>Give me a Random Drink</Text>
      </MyCard>
    </ScrollView>
  );
};

export default Home;
