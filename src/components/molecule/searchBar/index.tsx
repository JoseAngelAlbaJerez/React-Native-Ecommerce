import React, { useState } from "react";
import {  View, StyleSheet } from "react-native";
import IconButton from "../../atoms/IconButton";
import TextFieldComponent from "../../atoms/TextField";
interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.searchBar}>
     <TextFieldComponent
      style={styles.input}
      placeholder="Buscar..."
      value={searchText}
      onChangeText={(text) => setSearchText(text)}
    />
      <IconButton
        iconName="search"
        size={24}
       
        style={{ opacity: 1 }}
        onPress={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    height: 52,
    borderRadius: 52,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    paddingHorizontal: 19,
    flexDirection: "row",
    gap: 12,
  },
  input: {
    flex: 1,
    marginRight: 1,
  },
});

export default SearchBar;
