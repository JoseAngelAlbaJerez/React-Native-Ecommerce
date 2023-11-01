import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { useTheme } from '@react-navigation/native';

const CATEGORIES = [
  "Muebles",
  "Comedores", 
  "Plasticos",
  "Televisores",
  "Jgo de Habitacion",
  "Lavadoras",
];

interface CategoryListProps {
  categoryIndex: number;
  setCategoryIndex: (index: number) => void;
  title: string;
}

const CategoryList: React.FC<CategoryListProps> = ({ categoryIndex, setCategoryIndex, title }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
    
    },
    title: {
      flex: 1,
      paddingLeft: 20,
      paddingBottom: 10,
      fontSize: 15,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={CATEGORIES}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 12,
        }}
        renderItem={({ item, index }) => {
          const isSelected = categoryIndex === index;

          return (
            <TouchableOpacity
              onPress={() => setCategoryIndex(index)}
              style={{
                backgroundColor: isSelected ? colors.primary : colors.card,
                paddingHorizontal: 25,
                paddingVertical: 12,
                borderRadius: 100,
                borderWidth: isSelected ? 0 : 1,
                borderColor: colors.border,
              }}
            >
              <Text
                style={{
                  color: isSelected ? colors.background : colors.text,
                  fontWeight: "600",
                  fontSize: 14,
                  opacity: isSelected ? 1 : 0.5,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CategoryList;
