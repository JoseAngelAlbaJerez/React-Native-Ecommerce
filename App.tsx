import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import { useMemo } from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const colorScheme = useColorScheme();

  const theme: Theme = useMemo(
    () =>
      colorScheme === "light"
        ? {
            ...DefaultTheme, // Utiliza DefaultTheme en lugar de DarkTheme
            colors: {
              ...DefaultTheme.colors, // Configura los colores del tema claro
              primary: "#000",
              text: "#000", // Color de texto en modo claro
            },
          }
        : {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              background: "#000", // Fondo oscuro
              text: "#fff", // Color de texto en modo oscuro
              border: "#D9D9D9",
              primary: "#fff",
            },
          },
    [colorScheme]
  );
  


  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer theme={theme}>
          <BottomSheetModalProvider>
            <RootNavigator />
          </BottomSheetModalProvider>
          <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
