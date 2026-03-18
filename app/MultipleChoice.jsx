import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import quiz from "../assets/api/quiz";
import BottomNav from "./BottomNav";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  }, [currentQuestion, score]);

  const loadProgress = async () => {
    try {
      const saved = await AsyncStorage.getItem("multipleChoiceScore");
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
      await AsyncStorage.setItem("multipleChoiceScore", JSON.stringify(data));
    } catch (e) {}
  };

  const handleChoice = (choice) => {
    if (showFeedback) return;

    const questionId = quiz[currentQuestion].id;

    // ❌ Prevent re-answering
    if (answeredQuestions[questionId]) return;

    setSelectedChoice(choice);
    setShowFeedback(true);

    const isCorrect = choice === quiz[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // ✅ Mark question as answered
    setAnsweredQuestions((prev) => ({
      ...prev,
      [questionId]: {
        selected: choice,
        isCorrect,
      },
    }));
  };

  const handleNext = () => {
    setSelectedChoice(null);
    setShowFeedback(false);

    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const question = quiz[currentQuestion];

  return (
    <View className="flex-1 relative bg-purple-50">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        className="p-4"
      >
        {/* TITLE + DESCRIPTION */}
        <View className="mb-4">
          <Text className="text-2xl font-bold text-purple-900">
            Dressmaking Challenge 🧵
          </Text>
          <Text className="text-purple-700 mt-2">
            Test your knowledge in dressmaking with this multiple choice quiz.
            Choose your answers wisely—each correct choice increases your score.
            Can you complete all questions with a perfect result?
          </Text>
        </View>

        {/* SCORE + PROGRESS */}
        <View className="mb-4 bg-purple-200 p-4 rounded-xl">
          <Text className="text-purple-900 font-bold">
            Score: {score} / {quiz.length}
          </Text>
          <Text className="text-purple-800 text-sm">
            Question {currentQuestion + 1} of {quiz.length}
          </Text>
        </View>

        {/* QUESTION CARD */}
        <View className="bg-purple-200 rounded-2xl p-6 shadow-lg">
          <Text className="text-xl font-bold text-purple-900 mb-4">
            Q{question.id}: {question.question}
          </Text>

          {question.choices.map((choice, index) => {
            const isSelected = selectedChoice === choice;
            const isAnswered = answeredQuestions[question.id];
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
                disabled={!!isAnswered}
                onPress={() => handleChoice(choice)}
                className={`${bgColor} rounded-xl p-4 mb-3 shadow ${
                  isAnswered ? "opacity-60" : ""
                }`}
              >
                <Text className={`${textColor} font-medium`}>{choice}</Text>
              </Pressable>
            );
          })}

          {showFeedback && (
            <View className="mt-4 p-4 bg-purple-100 rounded-xl shadow">
              <Text className="text-purple-800">
                {selectedChoice === question.correctAnswer
                  ? "✅ Correct!"
                  : `❌ Wrong!\n\nCorrect Answer: ${question.correctAnswer}`}
              </Text>

              <Text className="text-purple-700 mt-2 text-sm">
                {question.explainCorrectAnswer}
              </Text>

              {currentQuestion < quiz.length - 1 && (
                <Pressable
                  onPress={handleNext}
                  className="mt-4 bg-purple-500 p-3 rounded-xl"
                >
                  <Text className="text-white text-center font-bold">Next</Text>
                </Pressable>
              )}
            </View>
          )}
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default MultipleChoice;
