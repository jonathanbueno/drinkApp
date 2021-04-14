import React from "react";
import { ScrollView } from "react-native";
import { Badge, Button, Icon, Image, Text } from "react-native-elements";
import axios from "axios";

import Logo from "../components/UI/Logo";

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
      <div
        style={{
          background: "#FFF",
          borderRadius: "15px",
          boxShadow: "0px 0px 13px 0px rgba(50, 50, 50, 0.15)",
          padding: "5%",
          marginTop: "10%",
          width: "80%",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => navigation.navigate("Search")}
      >
        <Icon
          type="font-awesome"
          name="glass"
          containerStyle={{ marginRight: "5%" }}
        />
        <Text>Search for a Drink</Text>
      </div>
      <div
        style={{
          background: "#FFF",
          borderRadius: "15px",
          boxShadow: "0px 0px 13px 0px rgba(50, 50, 50, 0.15)",
          padding: "5%",
          display: "flex",
          alignItems: "center",
          marginTop: "5%",
          width: "80%",
        }}
        onClick={giveMeRandom}
      >
        <Icon
          type="font-awesome"
          name="glass"
          containerStyle={{ marginRight: "5%" }}
        />
        <Text>Give me a Random Drink</Text>
      </div>
    </ScrollView>
  );
};

export default Home;
