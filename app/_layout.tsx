import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  faixa: {
    backgroundColor: "rgba(141, 242, 136, 1)",
  },
  texto: {
    color: "#000000ff",
  },
});

export default function Layout() {
  return <Stack
    screenOptions={{
      headerStyle: styles.faixa,
      headerTitleStyle: styles.texto,
    }}
  >
    <Stack.Screen name="index" options={{ title: "Principal inicio"  }} />
    <Stack.Screen name="pergunta1" options={{ title: "Pergunta 1" }} />

  </Stack>;
}