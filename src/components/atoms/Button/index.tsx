import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonComponentProps {
  title: string;
  disabled?: boolean;
  onClick: () => void;
  style?: TouchableOpacityProps["style"];
}

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => (
  <TouchableOpacity
    activeOpacity={0.7}
    disabled={props.disabled}
    onPress={props.onClick}
    style={[{}, props.style]}
  >
    <Text style={{ color: "white" }}>{props.title}</Text>
  </TouchableOpacity>
);

ButtonComponent.defaultProps = {
  disabled: false,
  style: {},
};

export default ButtonComponent;
