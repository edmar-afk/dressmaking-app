import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import quiz from "../assets/api/quiz";
import BottomNav from "./BottomNav";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "trueOrFalseScore";

const TrueOrFalse = () => {
  const trueFalseQuiz = quiz.filter((q) => q.category === "True or False");

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

    const questionId = trueFalseQuiz[currentQuestion].id;

    if (answeredQuestions[questionId]) return;

    setSelectedChoice(choice);
    setShowFeedback(true);

    const isCorrect = choice === trueFalseQuiz[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

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

    if (currentQuestion < trueFalseQuiz.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const question = trueFalseQuiz[currentQuestion];
  const isAnswered = answeredQuestions[question.id];

  return (
    <View className="flex-1 relative bg-purple-50">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        className="p-4"
      >
        {/* TITLE */}
        <View className="mb-4">
          <Text className="text-2xl font-bold text-purple-900">
            Dressmaking True or False Challenge
          </Text>
          <Text className="text-purple-700 mt-2">
            Decide whether each statement is true or false. Choose
            carefully—each correct answer increases your score.
          </Text>
        </View>

        {/* SCORE */}
        <View className="mb-4 bg-purple-200 p-4 rounded-xl">
          <Text className="text-purple-900 font-bold">
            Score: {score} / {trueFalseQuiz.length}
          </Text>
          <Text className="text-purple-800 text-sm">
            Question {currentQuestion + 1} of {trueFalseQuiz.length}
          </Text>
        </View>

        {/* QUESTION */}
        <View className="bg-purple-200 rounded-2xl p-6 shadow-lg">
          <Text className="text-xl font-bold text-purple-900 mb-6 text-center">
            {question.question}
          </Text>

          {question.choices.map((choice, index) => {
            const isSelected = selectedChoice === choice;

            let bgColor = "bg-white";
            let textColor = "text-purple-900";

            if (showFeedback) {
              if (choice === question.correctAnswer) {
                bgColor = "bg-green-500";
                textColor = "text-white";
              } else if (isSelected) {
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
                className={`${bgColor} rounded-xl p-5 mb-4 shadow ${
                  isAnswered ? "opacity-60" : ""
                }`}
              >
                <Text className={`${textColor} font-bold text-center text-lg`}>
                  {choice}
                </Text>
              </Pressable>
            );
          })}

          {showFeedback && (
            <View className="mt-4 p-4 bg-purple-100 rounded-xl shadow">
              <Text className="text-purple-800 text-center">
                {selectedChoice === question.correctAnswer
                  ? "✅ Correct!"
                  : `❌ Wrong!\n\nCorrect Answer: ${question.correctAnswer}`}
              </Text>

              <Text className="text-purple-700 mt-2 text-sm text-center">
                {question.explainCorrectAnswer}
              </Text>

              {currentQuestion < trueFalseQuiz.length - 1 && (
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

export default TrueOrFalse;
