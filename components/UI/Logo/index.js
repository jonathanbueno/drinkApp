import React from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";

const Logo = () => {
  return (
    <Image
      source={require("./logo.png")}
      resizeMode="contain"
      style={{
        display: "flex",
        width: 250,
        height: 62,
      }}
    />
  );
};

export default Logo;
