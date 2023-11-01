import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface TextFieldComponentProps {
  style?: any; // You can specify a more specific type for style
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextFieldComponent: React.FC<TextFieldComponentProps> = ({
  style,
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View style={style}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginRight: 1,
  },
});

export default TextFieldComponent;
