import React from "react";
import { Text } from "react-native-elements";
import styled from "styled-components/native";

import NotFound from "../../Icons/NotFound";
import RandomDrink from "../Home/RandomDrink";

const Container = styled.View`
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const NoResults = ({ ...props }) => {
  return (
    <Container>
      <NotFound />
      <Text
        h4
        adjustsFontSizeToFit
        style={{ fontWeight: "bold", marginTop: "5%", textAlign: "center" }}
      >
        Empty glasses :(
      </Text>
      <Text
        adjustsFontSizeToFit
        style={{ marginTop: "5%", textAlign: "center" }}
      >
        Unfortunately we haven't found what you want. Let's try a random drink?
      </Text>
      <RandomDrink {...props} />
    </Container>
  );
};

export default NoResults;
