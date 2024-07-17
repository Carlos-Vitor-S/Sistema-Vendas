import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Catalogo = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            illum vel consequatur placeat voluptatum! Fugiat quis accusantium
            voluptas quae provident quidem nemo, aliquam officiis quo,
            aspernatur placeat voluptatibus molestias perspiciatis!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Catalogo;
