import React from "react";
import { node } from "prop-types";
import { View } from "react-native";

const customStyles = (type) => {
  const findType = {
    oneColumn: "column",
    twoColumns: {
      flexDirection: "row",
      alignItems: "center",
    },
  };

  return {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,

    elevation: 5,
    width: "100%",
    padding: "5%",
    borderRadius: 15,
    boxShadow: "0px 0px 13px 0px rgba(50, 50, 50, 0.15)",
    display: "flex",
    ...findType[type],
  };
};

const Card = ({ children, style, ...rest }) => {
  return (
    <View style={{ ...customStyles("twoColumns"), ...style }} {...rest}>
      {children}
    </View>
  );
};

Card.propTypes = {
  children: node.isRequired,
};

export default Card;
