import React from "react";
import { object } from "prop-types";
import { ActivityIndicator, View } from "react-native";
import { Badge, Image, Text } from "react-native-elements";

import Card from "../../UI/Card";

const Item = ({ item, navigation }) => {
  return (
    item && (
      <Card
        type="twoColumns"
        style={{
          marginBottom: "5%",
          alignItems: "stretch",
          height: "auto",
        }}
        onPress={() =>
          navigation.navigate("Details", {
            drink: item,
          })
        }
      >
        <Image
          source={{ uri: item?.strDrinkThumb }}
          style={{
            display: "flex",
            width: 95,
            height: 95,
            borderRadius: 15,
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginLeft: "5%",
            padding: "2%",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item?.strDrink}</Text>
          <Text>{`${
            item?.strInstructions.length > 50
              ? item?.strInstructions.substring(0, 50)
              : item?.strInstructions
          }...`}</Text>
          <Badge
            style={{ flex: 1 }}
            status="primary"
            value={item?.strCategory}
          />
        </View>
      </Card>
    )
  );
};

Item.propTypes = {
  item: object.isRequired,
  navigation: object.isRequired,
};

export default Item;
