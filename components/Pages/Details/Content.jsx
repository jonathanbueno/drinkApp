import React from "react";
import { View } from "react-native";
import { Badge, Text, ListItem } from "react-native-elements";
import { object } from "prop-types";

import Card from "../../UI/Card";

const Content = ({ detail }) => {
  const filterIngredients = () =>
    Object.keys(detail).filter((e) => (e.includes("strIngredient") ? e : null));

  return (
    detail && (
      <View
        style={{
          padding: "5%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          h1
          allowFontScaling
          style={{ fontWeight: "bold", color: "#0a3e1d" }}
        >
          {detail?.strDrink}
        </Text>
        <Card
          type="twoColumns"
          style={{
            marginTop: "5%",
          }}
        >
          <Badge
            value={detail?.strCategory}
            containerStyle={{ marginRight: "2.5%" }}
          />
          <Badge
            value={detail?.strAlcoholic}
            containerStyle={{ marginRight: "2.5%" }}
          />
          <Badge value={detail?.strGlass} />
        </Card>
        <Text
          h3
          allowFontScaling
          style={{ marginTop: "5%", fontWeight: "bold", color: "#0a3e1d" }}
        >
          Ingredients:
        </Text>

        <Card
          style={{
            marginTop: "2.5%",
          }}
          type="oneColumn"
        >
          {filterIngredients().map(
            (e) =>
              detail[e] && (
                <ListItem key={e}>
                  <Text>{detail[e]}</Text>
                </ListItem>
              )
          )}
        </Card>
        <Text
          h3
          allowFontScaling
          style={{ marginTop: "5%", fontWeight: "bold", color: "#0a3e1d" }}
        >
          Instructions:
        </Text>
        <Card
          type="oneColumn"
          style={{
            marginTop: "2.5%",
          }}
        >
          <Text allowFontScaling>{detail?.strInstructions}</Text>
        </Card>
      </View>
    )
  );
};

Content.propTypes = {
  detail: object.isRequired,
};

export default Content;
