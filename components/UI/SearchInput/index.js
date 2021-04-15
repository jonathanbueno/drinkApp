import React, { useState, useCallback } from "react";
import { Input } from "react-native-elements";
import { View } from "react-native";
import { debounce } from "lodash";

import axios from "axios";

const SearchInput = ({ ...rest }) => {
  const { callBack = () => {} } = rest;

  const fetchData = (search) => {
    if (!search) return callBack([]);

    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then(({ data }) => {
        callBack(data?.drinks);
      });
  };

  const delayedQuery = useCallback(
    debounce((q) => fetchData(q), 700),
    []
  );

  const debounced = (e) => {
    delayedQuery(e);
  };

  return (
    <View>
      <Input onChangeText={(e) => debounced(e)} {...rest} />
    </View>
  );
};

export default SearchInput;
