import React from "react";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import { Badge, Button, Icon, Image, Text } from "react-native-elements";

const Details = ({ route, navigation }) => {
  const { drink = {} } = route?.params;

  let dimensions = Dimensions.get("window");
  let imageHeight = Math.round((dimensions.width * 9) / 16);

  const filterIngredients = () =>
    Object.keys(drink).filter((e) => (e.includes("strIngredient") ? e : null));

  return (
    <ScrollView
      style={{
        flex: 1,
        background: "#FFF",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <Image
          source={{ uri: drink.strDrinkThumb }}
          resizeMode="cover"
          containerStyle={{
            backgroundSize: "contain",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
          style={{
            flex: 1,
            width: "100%",
            height: imageHeight,
            zIndex: "1",
            position: "relative",
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Button
          onPress={() => navigation.goBack()}
          buttonStyle={{
            backgroundColor: "transparent",
            padding: 0,
          }}
          containerStyle={{
            position: "absolute",
            top: 20,
            left: 14,
            padding: 0,
          }}
          icon={
            <Icon
              type="material-icons"
              name="arrow-back"
              size={24}
              color="white"
            />
          }
        />
      </div>
      <div
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
          {drink?.strDrink}
        </Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "2.5%",
            borderRadius: "15px",
            backgroundColor: "#FFF",
            padding: "5%",
            boxShadow: "0px 0px 13px 0px rgba(50, 50, 50, 0.15)",
          }}
        >
          <Badge
            value={drink?.strCategory}
            containerStyle={{ marginRight: "2.5%" }}
          />
          <Badge
            value={drink?.strAlcoholic}
            containerStyle={{ marginRight: "2.5%" }}
          />
          <Badge value={drink?.strGlass} />
        </div>
        <Text
          h3
          allowFontScaling
          style={{ marginTop: "5%", fontWeight: "bold", color: "#0a3e1d" }}
        >
          Ingredients:
        </Text>
        <ul
          style={{
            listStylePosition: "inside",
            background: "#FFF",
            marginTop: "2.5%",
            marginBottom: 0,
            padding: "5%",
            borderRadius: "15px",
            boxShadow: "0px 0px 13px 0px rgba(50, 50, 50, 0.15)",
          }}
        >
          {filterIngredients().map(
            (e) => drink[e] && <li key={e}>{drink[e]}</li>
          )}
        </ul>
        <Text
          h3
          allowFontScaling
          style={{ marginTop: "5%", fontWeight: "bold", color: "#0a3e1d" }}
        >
          Instructions:
        </Text>
        <Text
          allowFontScaling
          style={{
            marginTop: "2.5%",
            backgroundColor: "#FFF",
            padding: "5%",
            borderRadius: "15px",
            boxShadow: "0px 0px 13px 0px rgba(50, 50, 50, 0.15)",
          }}
        >
          {drink?.strInstructions}
        </Text>
      </div>
    </ScrollView>
  );
};

export default Details;
