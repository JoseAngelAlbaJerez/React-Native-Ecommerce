import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Card from '../card';


interface GridCollectionViewProps {
  navigation: any; // You should provide the correct type for navigation
  colors: any; // You should provide the correct type for colors
}

const GridCollectionView: React.FC<GridCollectionViewProps> = ({ navigation, colors }) => {


  return (
    <View style={{ paddingHorizontal: 24 }}>
      {/* Title bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <Text
          style={{ fontSize: 20, fontWeight: "700", color: colors.text }}
        >
          Nuevos Productos
        </Text>
        <TouchableOpacity
        
        >
          <Text style={{ fontSize: 14, color: colors.text }}>
            Ver todo
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", height: 200, gap: 12 }}>
        <Card
          onPress={() => {
            navigation.navigate("Details", {
              id: "123",
            });
          }}
          price={16500}
          imageUrl="https://colineal.com/cdn/shop/products/COL6000069420._4c786a9f-0f52-47f8-867e-f3f0ffbd6deb.jpg?v=1645627085&width=1200"
        />
        <View style={{ flex: 1, gap: 12 }}>
          <Card
            onPress={() => {
              navigation.navigate("Details", {
                id: "456",
              });
            }}
            price={12000}
            imageUrl="https://cdn.shopify.com/s/files/1/2098/0315/files/Comedor-Milo-coleccion-encabezado-1280x400.jpg?v=1684282237"
          />
          <Card
            onPress={() => {
              navigation.navigate("Details", {
                id: "789",
              });
            }}
            price={17000}
            imageUrl="https://maenacomercial.com/wp-content/uploads/2022/06/68-300x300.jpg"
          />
        </View>
      </View>
    </View>
  );
};

export default GridCollectionView