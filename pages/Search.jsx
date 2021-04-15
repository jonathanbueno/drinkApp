import React, { useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { Badge, Image, Text } from "react-native-elements";

import SearchInput from "../components/UI/SearchInput";
import MyCard from "../components/UI/Card";

const Search = ({ navigation }) => {
  const [search, setSearch] = useState([]);

  return (
    <ScrollView
      style={{
        backgroundColor: "#FFF",
      }}
    >
      <View
        style={{
          backgroundColor: "#2ba567",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
          paddingBottom: "5%",
        }}
      >
        <Text
          adjustsFontSizeToFit
          h2
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            fontWeight: "bold",
            color: "#FFF",
          }}
        >
          Search
        </Text>
        <Text
          adjustsFontSizeToFit
          h3
          style={{ marginLeft: "5%", marginRight: "5%", color: "#FFF" }}
        >
          for
          <Text style={{ color: "#0a3e1d", fontWeight: "bold" }}> Drinks</Text>
        </Text>
        <SearchInput
          callBack={setSearch}
          adjustsFontSizeToFit
          placeholder="Type a drink name"
          leftIcon={{
            type: "font-awesome",
            name: "search",
            adjustsFontSizeToFit: true,
            size: 18,
            color: "#90939e",
            marginRight: "10%",
          }}
          inputContainerStyle={{
            borderColor: "#FFF",
          }}
          containerStyle={{
            width: "90%",
            backgroundColor: "#FFF",
            borderRadius: "15px",
            borderColor: "transparent",
            marginTop: "5%",
            marginLeft: "5%",
            marginRight: "5%",
            height: 50,
          }}
        />
      </View>
      <View
        style={{
          padding: "5%",
          display: "flex",
        }}
      >
        {search?.length > 0 ? (
          search.map((e) => (
            <MyCard
              key={e?.idDrink}
              style={{
                marginBottom: "5%",
                alignItems: "stretch",
                height: "auto",
              }}
              onTouchEnd={() =>
                navigation.navigate("Details", {
                  drink: e,
                })
              }
            >
              <Image
                source={{ uri: e?.strDrinkThumb }}
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
                <Text style={{ fontWeight: "bold" }}>{e?.strDrink}</Text>
                <Text>{`${
                  e?.strInstructions.length > 50
                    ? e?.strInstructions.substring(0, 50)
                    : e?.strInstructions
                }...`}</Text>
                <Badge
                  style={{ flex: 1 }}
                  status="primary"
                  value={e?.strCategory}
                />
              </View>
            </MyCard>
          ))
        ) : (
          <Text>No drinks found.</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Search;
