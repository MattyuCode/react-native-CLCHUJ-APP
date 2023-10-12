import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";

export const Navbar = ({navigation }) => {
  return (
    <View>
      <Text>Navbar</Text>

      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
