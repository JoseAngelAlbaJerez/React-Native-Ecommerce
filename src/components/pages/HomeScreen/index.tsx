import {
    View,
    ScrollView,
    Image,
    
    StyleSheet,
    FlatList,
    Touchable,
  } from "react-native";
  import React, { useCallback, useRef, useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useTheme } from "@react-navigation/native";
  import { BottomSheetModal } from "@gorhom/bottom-sheet";
  
  
  {/* Molecules*/}
  import Gridcollectionview from "../../molecules/gridcollectionview";
  import CategoryList from "../../molecules/CategoryList";
  import SearchBar from "../../molecules/searchBar";
  import MesonaryList from "../../molecules/MesonaryList";
  
  
  import { TabsStackScreenProps } from "../../../navigators/TabsNavigator";
  
  {/* Organism */}
  import CustomBackdrop from "../../organism/CustomBackdrop";
  import FilterView from "../../organism/FilterView";
  import { Text } from "react-native";
  
  
  const CATEGORIES = [
    "Muebles",
    "Comedores", 
    "Plasticos",
    "Televisores",
    "Jgo de Habitacion",
    "Lavadoras",
  ];
  const AVATAR_URL = require("../../../assets/images/Electromuebles.png");
  
  const HomeScreen = ({ navigation }: TabsStackScreenProps<"Home">) => {
    const { colors } = useTheme();
    const [categoryIndex, setCategoryIndex] = useState(0);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  
    const openFilterModal = useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []);
  
    return (
      <ScrollView>
        <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        <View
            style={{
              paddingHorizontal: 16,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            
            }}
          >
                    <Image
              source={AVATAR_URL}
              style={{
                width: 80,
                height: 55,
                borderRadius: 20, 
              }}
              resizeMode="contain"
            />
  
            <View style={{ flex: 1 }}>
              <Text 
                
              >
                Electromuebles Angel
              </Text>
              <Text
                style={{ color: colors.text,fontSize: 12, opacity: 0.75 }}
                numberOfLines={1}
              >
               Descubre muebles que se adapten a tu estilo
              </Text>
            </View>
           
          </View>
          {/* Search Bar Section */}
          <View style={{ flexDirection: "row", paddingHorizontal: 24, gap: 12 }}>
          <SearchBar onSearch={(text: string) => console.log(Buscando: ${text})} />
          </View>
  
       
  
         {/Category List/}
         <CategoryList
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          title="Categorias" 
        
        />
  
  
              {/* Grid collection View*/}
              <Gridcollectionview navigation={navigation} colors={colors} />
  
           
  
          {/* Mesonary */}
        
          <MesonaryList/>
  
        </SafeAreaView>
  
        <BottomSheetModal
          snapPoints={["85%"]}
          index={0}
          ref={bottomSheetModalRef}
          backdropComponent={(props) => <CustomBackdrop {...props} />}
          backgroundStyle={{
            borderRadius: 24,
            backgroundColor: colors.card,
          }}
          handleIndicatorStyle={{
            backgroundColor: colors.primary,
          }}
        >
          <FilterView />
        </BottomSheetModal>
      </ScrollView>
    );
  };
  
  export default HomeScreen;