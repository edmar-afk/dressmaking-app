import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import quiz from "../assets/api/quiz";
import BottomNav from "./BottomNav";

const STORAGE_KEY = "multipleChoiceScore";

const MultipleChoice = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  useEffect(() => {
    loadProgress();
  }, []);

  useEffect(() => {
    saveProgress();
  }, [currentQuestion, score, answeredQuestions]);

  const loadProgress = async () => {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setCurrentQuestion(parsed.currentQuestion ?? 0);
        setScore(parsed.score ?? 0);
        setAnsweredQuestions(parsed.answeredQuestions ?? {});
      }
    } catch (e) {}
  };

  const saveProgress = async () => {
    try {
      const data = {
        currentQuestion,
        score,
        answeredQuestions,
      };
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  };

  const handleChoice = (choice) => {
    if (showFeedback) return;

    const questionId = quiz[currentQuestion].id;
    const correctAnswer = quiz[currentQuestion].correctAnswer;
    const isCorrect = choice === correctAnswer;

    const previousAnswer = answeredQuestions[questionId];

    setSelectedChoice(choice);
    setShowFeedback(true);

    setAnsweredQuestions((prev) => ({
      ...prev,
      [questionId]: {
        selected: choice,
        isCorrect,
      },
    }));

    if (!previousAnswer) {
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }
    } else {
      if (previousAnswer.isCorrect && !isCorrect) {
        setScore((prev) => prev - 1);
      }
      if (!previousAnswer.isCorrect && isCorrect) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    setSelectedChoice(null);
    setShowFeedback(false);

    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const question = quiz[currentQuestion];

  const previousAnswer = question ? answeredQuestions[question.id] : null;

  useEffect(() => {
    if (previousAnswer) {
      setSelectedChoice(previousAnswer.selected);
      setShowFeedback(true);
    } else {
      setSelectedChoice(null);
      setShowFeedback(false);
    }
  }, [currentQuestion]);

  if (!question) {
    return null;
  }

  const hasChoices = question.choices && question.choices.length > 0;
  const hasAnswer = question.correctAnswer && question.correctAnswer !== "";

  return (
    <View className="flex-1 relative bg-purple-50">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        className="p-4"
      >
        <View className="mb-4">
          <Text className="text-2xl font-bold text-purple-900">
            Dressmaking Challenge 🧵
          </Text>
          <Text className="text-purple-700 mt-2">
            Test your knowledge in dressmaking with this multiple choice quiz.
          </Text>
        </View>

        <View className="mb-4 bg-purple-200 p-4 rounded-xl">
          <Text className="text-purple-900 font-bold">
            Score: {score} / {quiz.length}
          </Text>
          <Text className="text-purple-800 text-sm">
            Question {currentQuestion + 1} of {quiz.length}
          </Text>
        </View>

        <View className="bg-purple-200 rounded-2xl p-6 shadow-lg">
          <Text className="text-xl font-bold text-purple-900 mb-4">
            Q{question.id}: {question.question}
          </Text>

          {/* Choices */}
          {hasChoices &&
            question.choices.map((choice, index) => {
              const isSelected = selectedChoice === choice;

              let bgColor = "bg-white";
              let textColor = "text-purple-900";

              if (showFeedback) {
                if (choice === question.correctAnswer) {
                  bgColor = "bg-green-500";
                  textColor = "text-white";
                } else if (isSelected && choice !== question.correctAnswer) {
                  bgColor = "bg-red-500";
                  textColor = "text-white";
                }
              } else if (isSelected) {
                bgColor = "bg-purple-300";
              }

              return (
                <Pressable
                  key={index}
                  onPress={() => handleChoice(choice)}
                  className={`${bgColor} rounded-xl p-4 mb-3 shadow`}
                >
                  <Text className={`${textColor} font-medium`}>{choice}</Text>
                </Pressable>
              );
            })}

          {/* Feedback */}
          {showFeedback && hasChoices && hasAnswer && (
            <View className="mt-4 p-4 bg-purple-100 rounded-xl shadow">
              <Text className="text-purple-800">
                {selectedChoice === question.correctAnswer
                  ? "✅ Correct!"
                  : `❌ Wrong!\n\nCorrect Answer: ${question.correctAnswer}`}
              </Text>

              <Text className="text-purple-700 mt-2 text-sm">
                {question.explainCorrectAnswer}
              </Text>
            </View>
          )}

          {/* Next Button (always available except last) */}
          {currentQuestion < quiz.length - 1 && (
            <Pressable
              onPress={handleNext}
              className="mt-4 bg-purple-500 p-3 rounded-xl"
            >
              <Text className="text-white text-center font-bold">Next</Text>
            </Pressable>
          )}
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default MultipleChoice;
