import React from "react";

const Details = ({ route, navigation }) => {
  const { drink = {} } = route?.params;
  return <div>{drink?.strDrink}</div>;
};

export default Details;
