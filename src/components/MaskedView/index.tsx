import React from "react";
import { Text, TextProps } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";
import { gradient } from "../../themes/colors";

const GradientText = (props: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<Text> & Readonly<TextProps>) => {

  const { lightAqua, lightGold } = gradient;
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={[lightGold, lightAqua]}
        start={{ x: 0, y: 0 }}
        end={{ x: .8, y: 0 }}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;