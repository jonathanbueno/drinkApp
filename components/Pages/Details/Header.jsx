import React from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import { Button, Icon, Image } from "react-native-elements";

import { object } from "prop-types";

const Header = ({ content, navigation }) => {
  let dimensions = Dimensions.get("window");
  let imageHeight = Math.round((dimensions.width * 9) / 16);

  return (
    content && (
      <View>
        <Image
          source={{ uri: content?.strDrinkThumb }}
          resizeMode="cover"
          containerStyle={{
            backgroundSize: "contain",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            height: imageHeight,
          }}
          style={{
            flex: 1,
            width: "100%",
            height: imageHeight,
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Button
          onPress={() => navigation.goBack()}
          buttonStyle={{
            backgroundColor: "transparent",
            padding: 0,
          }}
          containerStyle={{
            position: "absolute",
            top: 40,
            left: 10,
            padding: 0,
          }}
          icon={
            <Icon
              type="material-icons"
              name="arrow-back"
              size={30}
              color="white"
            />
          }
        />
      </View>
    )
  );
};

Header.propTypes = {
  content: object.isRequired,
};

export default Header;
