import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-elements";

import Header from "../components/Pages/Search/Header";
import Item from "../components/Pages/Search/Item";
import { NoResults } from "../components/Pages/Search";

const Search = ({ navigation }) => {
  const [search, setSearch] = useState([]);

  return (
    <ScrollView
      style={{
        backgroundColor: "#FFF",
      }}
    >
      <Header callBack={setSearch} />
      <View
        style={{
          padding: "5%",
          display: "flex",
        }}
      >
        {search?.length > 0 ? (
          search.map((e) => (
            <Item key={e?.idDrink} item={e} navigation={navigation} />
          ))
        ) : (
          <NoResults {...navigation}></NoResults>
        )}
      </View>
    </ScrollView>
  );
};

export default Search;
