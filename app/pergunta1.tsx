import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { questoes } from "../assets/mackups/questoes";
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

export default function Pergunta1({}) {
  const question = questoes[0]; // Primeira pergunta
  const [score, setScore] = useState(0);

  const handleAnswer = (index: number) => {
    if (index === question.certa) {
      setScore(score + 1);
    }
    router.push({ pathname: "/pergunta2", params: { score } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question.pergunta1}</Text>
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
