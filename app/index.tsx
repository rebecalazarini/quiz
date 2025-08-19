import { router } from "expo-router";
import { StyleSheet, Text, View, Button} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c1f3cbff",
  },
  list: {
    padding: 20,
    width: "100%",
    height: "100%",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#070807ff",
  },
  title: {
    fontSize: 14,
    color: "#222222ff",
  },
});

export default function Index() {

  function pergunta1(id: number) {
    router.push(`/pergunta1?id=${id}`);
  }
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.nome}>Bem vindo</Text>
      <Text style={styles.nome}>Ao Quiz de matemática</Text>
      <Button
      color="#598f57ff"
      title="Iniciar Quiz" onPress={() =>
      pergunta1(1)}
      />
    </View>
);
}
