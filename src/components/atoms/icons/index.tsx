import React from "react";
import { View, ViewStyle } from "react-native";
import Icons from "@expo/vector-icons/MaterialIcons";

interface IconProps {
  name: string;
  size: number;
  color: string;
  style?: any; // O el tipo correcto de 'style' si es específico
}

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  return (
    <View>
      <Icons name={name as any} size={size} color={color} />
    </View>
  );
};

export default Icon;
