import multipleChoiceBadge from "../images/badges/multiple-choice.png";
import trueOrFalseBadge from "../images/badges/true-or-false.png";
import identificationBadge from "../images/badges/identification.png";
import tutorialBadge from "../images/badges/tutorial.png";
import lessonsBadge from "../images/badges/lessons.png";
import guideBadge from "../images/badges/guide.png";
const badges = [
  // Quiz Badges
  {
    id: 1,
    name: "Quiz Whiz 🎉",
    desc: "Score a passing mark in the Multiple Choice Quiz",
    image: multipleChoiceBadge,
    category: "Quiz",
    storageKey: "multipleChoiceScore",
    passingScore: 5,
    total: 10,
  },
  // {
  //   id: 2,
  //   name: "Truth Master ✅",
  //   desc: "Score a passing mark in the True or False Quiz",
  //   image: trueOrFalseBadge,
  //   category: "Quiz",
  //   storageKey: "trueOrFalseScore",
  //   passingScore: 3,
  //   total: 5,
  // },
  // {
  //   id: 3,
  //   name: "Sharp Thinker 🧠",
  //   desc: "Score a passing mark in the Identification Quiz",
  //   image: identificationBadge,
  //   category: "Quiz",
  //   storageKey: "identificationScore",
  //   passingScore: 3,
  //   total: 5,
  // },

  // Tutorial Badge
  {
    id: 4,
    name: "Tutorial Master 🎓",
    desc: "Complete all tutorials",
    image: tutorialBadge,
    category: "Tutorial",
    storageKey: "tutorialprogress",
    passingScore: 3,
    total: 3, // total number of tutorial items
  },

  // Lessons Badge
  {
    id: 5,
    name: "Lesson Learner 📚",
    desc: "Complete all lessons",
    image: lessonsBadge,
    category: "Lesson",
    storageKey: "infosClickedCount",
    passingScore: 100,
    total: 13, // total number of lessons
  },

  // Guide Badge
  {
    id: 6,
    name: "Guide Reader 📖",
    desc: "Complete the guide",
    image: guideBadge,
    category: "Guide",
    storageKey: "guide",
    passingScore: 100,
    total: 100,
  },

];

export default badges;
