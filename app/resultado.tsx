import { View, Text, Button, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { questoes } from "../assets/mackups/questoes"; // Certifique-se de que o caminho esteja correto

export default function ResultadoScreen() {
  const { pontos } = useLocalSearchParams<{ pontos: string }>();
  const router = useRouter();

  
  const acertos = parseInt(pontos || "0");
  const totalPerguntas = questoes.length; 


  const erros = totalPerguntas - acertos; 

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado Final</Text>
      <Text style={styles.pontos}>
        Você acertou {acertos} de {totalPerguntas} questões.
      </Text>
      <Text style={styles.erros}>
        Você errou {erros} de {totalPerguntas} questões.
      </Text>

      <Button title="Reiniciar" onPress={() => router.replace("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  pontos: {
    fontSize: 18,
    marginBottom: 10,
  },
  erros: {
    fontSize: 18,
    marginBottom: 30,
    color: "red",
  },
});