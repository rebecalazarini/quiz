import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { questoes } from "../assets/mackups/questoes";  // Certifique-se de que a pergunta 4 está no índice correto
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fee9d3ff",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  answerButton: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#ff863bff",
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  answerText: {
    fontSize: 16,
    color: "#222222ff",
  },
});

export default function Pergunta4() {
  const question = questoes[3]; // Pergunta 4 (índice 3, já que o array começa do 0)
  const [score, setScore] = useState(3); // Pontuação acumulada até agora (ajuste conforme a pergunta anterior)

  const handleAnswer = (index: number) => {
    const acertou = index === question.certa;
    const novoScore = acertou ? score + 1 : score;

    // Após responder, vai para o resultado
    router.push({
      pathname: "/resultado",
      params: { pontos: novoScore.toString() },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question.pergunta4}</Text>
      {question.respostas.map((resposta, index) => (
        <TouchableOpacity
          key={index}
          style={styles.answerButton}
          onPress={() => handleAnswer(index)}
        >
          <Text style={styles.answerText}>{resposta}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}