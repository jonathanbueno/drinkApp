import React from "react";
import { func } from "prop-types";
import { View } from "react-native";
import { Text } from "react-native-elements";

import SearchInput from "../../../components/UI/SearchInput";

const Header = ({ callBack }) => {
  return (
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
        callBack={callBack}
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
  );
};

Header.defaultProps = {
  callback: () => {},
};

Header.propTypes = {
  callback: func,
};

export default Header;
