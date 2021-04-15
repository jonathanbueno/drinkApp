import React from "react";
import { ScrollView } from "react-native";

import Header from "../components/Pages/Details/Header";
import Content from "../components/Pages/Details/Content";

const Details = ({ route, navigation }) => {
  const { drink = {} } = route?.params;

  return (
    <ScrollView
      style={{
        backgroundColor: "#FFF",
      }}
    >
      <Header content={drink} navigation={navigation} />
      <Content detail={drink} />
    </ScrollView>
  );
};

export default Details;
