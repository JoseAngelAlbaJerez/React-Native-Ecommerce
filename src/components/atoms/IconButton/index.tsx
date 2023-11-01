import React from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import Icons from "@expo/vector-icons/MaterialIcons";

interface IconButtonProps {
  iconName: string;
  title?: string;
  size: number; // Agregar la propiedad 'size'
  disabled?: boolean;
  onPress?: () => void;
  style?: any;
  backgroundColor?: string;
  iconColor?: string; // Agregar la propiedad 'iconColor'
}

const IconButton: React.FC<IconButtonProps> = (props) => (
  <TouchableOpacity
    activeOpacity={0.7}
    disabled={props.disabled}
    onPress={props.onPress}
    style={[
      {
        width: 52,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 52,
        backgroundColor: props.backgroundColor,
      },
      props.style // Estilos personalizados
    ]}
  >
    <Icons name={props.iconName as any} size={30} color={props.iconColor || "gray"} />
    {props.title && <Text style={{ color: "white" }}>{props.title}</Text>}
  </TouchableOpacity>
);

IconButton.defaultProps = {
  disabled: false,
  style: {},
};

export default IconButton;
