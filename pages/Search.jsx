import React, { useState, useEffect } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { Badge, Image, Text } from "react-native-elements";

import SearchInput from "../components/UI/SearchInput";

const Search = ({ navigation }) => {
  const [search, setSearch] = useState([]);

  return (
    <ScrollView
      style={{
        flex: 1,
        background: "#FFF",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#2ba567",
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
          for <strong style={{ color: "#0a3e1d" }}>Drinks</strong>
        </Text>
        <SearchInput
          callBack={setSearch}
          adjustsFontSizeToFit
          placeholder="Type a drink name"
          leftIcon={{
            type: "font-awesome",
            name: "search",
            adjustsFontSizeToFit: true,
            size: "large",
            color: "#90939e",
            marginRight: "10%",
          }}
          style={{ border: "0" }}
          inputContainerStyle={{
            border: "none",
          }}
          containerStyle={{
            width: "90%",
            background: "#FFF",
            borderRadius: "15px",
            border: "0",
            marginTop: "1rem",
            marginLeft: "5%",
            marginRight: "5%",
            height: "50px",
          }}
        />
      </div>
      <div style={{ padding: "5%" }}>
        {search?.length > 0 ? (
          search.map((e) => (
            <div
              key={e?.idDrink}
              style={{
                display: "flex",
                marginBottom: "5%",
                boxShadow: "0px 0px 13px 0px rgba(50, 50, 50, 0.15)",
                padding: "5%",
                borderRadius: "15px",
              }}
              onClick={() =>
                navigation.navigate("Details", {
                  drink: e,
                })
              }
            >
              <Image
                source={{ uri: e?.strDrinkThumb }}
                style={{
                  width: "95px",
                  height: "95px",
                  borderRadius: "15px",
                }}
                PlaceholderContent={<ActivityIndicator />}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginLeft: "5%",
                  padding: "2%",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{e?.strDrink}</Text>
                <Text>{`${e?.strInstructions.substring(0, 50)}...`}</Text>
                <Badge status="primary" value={e?.strCategory} />
              </div>
            </div>
          ))
        ) : (
          <div>No drinks found.</div>
        )}
      </div>
    </ScrollView>
  );
};

export default Search;
