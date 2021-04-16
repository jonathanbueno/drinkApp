import React from "react";
import axios from "axios";
import { Icon, Text } from "react-native-elements";

import ENDPOINTS from "../../../constants/endpoints";
import Card from "../../UI/Card";

const RandomDrink = ({ ...props }) => {
  const { navigate = () => {} } = props;
  const giveMeRandom = () => {
    try {
      axios.get(ENDPOINTS.SEARCH_RANDOM_DRINK).then(({ data }) => {
        navigate("Details", {
          drink: data?.drinks[0],
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
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
      <Text>Yes, Give me a Random Drink !</Text>
    </Card>
  );
};

export default RandomDrink;
