import React, { useCallback } from "react";
import { Input } from "react-native-elements";
import axios from "axios";

const SearchInput = ({ ...rest }) => {
  const { callBack = () => {} } = rest;

  const fetchData = (search) =>
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then(({ data }) => {
        callBack(data?.drinks);
      });

  const delayedQuery = useCallback(
    _.debounce((q) => fetchData(q), 700),
    []
  );

  const debounce = (e) => {
    delayedQuery(e);
  };

  return (
    <div>
      <Input onChange={(e) => debounce(e.target.value)} {...rest} />
    </div>
  );
};

export default SearchInput;
