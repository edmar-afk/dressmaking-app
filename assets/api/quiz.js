const quiz = [
  {
    id: 1,
    question: "What is Dressmaking?",
    choices: [
      "The process of designing and sewing clothes",
      "The process of washing clothes",
      "The process of selling clothes",
      "The process of ironing clothes",
    ],
    correctAnswer: "The process of designing and sewing clothes",
    explainCorrectAnswer:
      "Dressmaking refers to the designing, cutting, and sewing of garments to create clothing.",
    category: "Multiple Choice",
  },
  {
    id: 2,
    question:
      "Which tool is commonly used to measure body size in dressmaking?",
    choices: ["Ruler", "Tape Measure", "Hammer", "Compass"],
    correctAnswer: "Tape Measure",
    explainCorrectAnswer:
      "A tape measure is flexible and used to measure body parts accurately for proper garment fitting.",
    category: "Multiple Choice",
  },
  {
    id: 3,
    question: "What is the main purpose of a pattern in dressmaking?",
    choices: [
      "To decorate the fabric",
      "To guide the cutting and sewing of fabric",
      "To measure the body",
      "To iron the fabric",
    ],
    correctAnswer: "To guide the cutting and sewing of fabric",
    explainCorrectAnswer:
      "Patterns act as templates that help dressmakers cut fabric pieces correctly before sewing them together.",
    category: "Multiple Choice",
  },
  {
    id: 4,
    question: "Which tool is used to cut fabric in dressmaking?",
    choices: ["Needle", "Scissors", "Tape Measure", "Pin Cushion"],
    correctAnswer: "Scissors",
    explainCorrectAnswer:
      "Fabric scissors are specifically designed to cut cloth cleanly and accurately.",
    category: "Multiple Choice",
  },
  {
    id: 5,
    question:
      "Why is taking accurate body measurements important in dressmaking?",
    choices: [
      "To make clothes heavier",
      "To ensure the garment fits properly",
      "To make sewing faster",
      "To reduce fabric color",
    ],
    correctAnswer: "To ensure the garment fits properly",
    explainCorrectAnswer:
      "Accurate measurements ensure that the finished garment fits the wearer comfortably and correctly.",
    category: "Multiple Choice",
  },

  {
    id: 6,
    question: "Measurement taken around the neck",
    choices: [
      "Neck circumference",
      "Shoulder width",
      "Bust circumference",
      "Waist circumference",
    ],
    correctAnswer: "Neck circumference",
    explainCorrectAnswer: "This measures around the base of the neck.",
    category: "Identification",
  },
  {
    id: 7,
    question: "Measurement from shoulder tip to shoulder tip",
    choices: [
      "Shoulder width",
      "Bust circumference",
      "Hip circumference",
      "Back length",
    ],
    correctAnswer: "Shoulder width",
    explainCorrectAnswer: "This measures the width across the shoulders.",
    category: "Identification",
  },
  {
    id: 8,
    question: "Measurement around the fullest part of the chest",
    choices: [
      "Bust circumference",
      "Waist circumference",
      "Armhole",
      "Sleeve length",
    ],
    correctAnswer: "Bust circumference",
    explainCorrectAnswer:
      "This is measured around the fullest part of the bust.",
    category: "Identification",
  },
  {
    id: 9,
    question: "Measurement around the natural waistline",
    choices: [
      "Waist circumference",
      "Hip circumference",
      "Back length",
      "Inseam (optional)",
    ],
    correctAnswer: "Waist circumference",
    explainCorrectAnswer: "Measured around the narrowest part of the waist.",
    category: "Identification",
  },
  {
    id: 10,
    question: "Measurement around the fullest part of the hips",
    choices: [
      "Hip circumference",
      "Bust circumference",
      "Skirt length",
      "Armhole",
    ],
    correctAnswer: "Hip circumference",
    explainCorrectAnswer: "Measured around the widest part of the hips.",
    category: "Identification",
  },

  {
    id: 11,
    question: "Dressmaking involves designing and sewing garments.",
    choices: ["True", "False"],
    correctAnswer: "True",
    explainCorrectAnswer:
      "Dressmaking includes designing, cutting, and sewing garments.",
    category: "True or False",
  },
  {
    id: 12,
    question: "A tape measure is not needed in dressmaking.",
    choices: ["True", "False"],
    correctAnswer: "False",
    explainCorrectAnswer:
      "A tape measure is essential for accurate body measurements.",
    category: "True or False",
  },
  {
    id: 13,
    question: "Patterns are used as guides for cutting fabric.",
    choices: ["True", "False"],
    correctAnswer: "True",
    explainCorrectAnswer:
      "Patterns help ensure fabric is cut correctly before sewing.",
    category: "True or False",
  },
  {
    id: 14,
    question: "Scissors are not used in dressmaking.",
    choices: ["True", "False"],
    correctAnswer: "False",
    explainCorrectAnswer: "Scissors are essential tools for cutting fabric.",
    category: "True or False",
  },
  {
    id: 15,
    question: "Accurate body measurements help ensure proper fit.",
    choices: ["True", "False"],
    correctAnswer: "True",
    explainCorrectAnswer:
      "Correct measurements are key to well-fitting garments.",
    category: "True or False",
  },
  {
    id: 16,
    question: "The waist circumference is measured around the hips.",
    choices: ["True", "False"],
    correctAnswer: "False",
    explainCorrectAnswer:
      "Waist circumference is measured at the natural waistline, not the hips.",
    category: "True or False",
  },
  {
    id: 17,
    question:
      "Bust circumference is measured at the fullest part of the chest.",
    choices: ["True", "False"],
    correctAnswer: "True",
    explainCorrectAnswer: "This ensures proper fitting around the upper body.",
    category: "True or False",
  },
  {
    id: 18,
    question: "Back length measures from shoulder to waist.",
    choices: ["True", "False"],
    correctAnswer: "True",
    explainCorrectAnswer:
      "Back length is taken from the shoulder down to the waistline.",
    category: "True or False",
  },
  {
    id: 19,
    question: "Sleeve length is measured from the waist to the wrist.",
    choices: ["True", "False"],
    correctAnswer: "False",
    explainCorrectAnswer:
      "Sleeve length is measured from the shoulder to the wrist.",
    category: "True or False",
  },
  {
    id: 20,
    question:
      "Hip circumference is measured at the narrowest part of the body.",
    choices: ["True", "False"],
    correctAnswer: "False",
    explainCorrectAnswer:
      "Hip circumference is measured at the widest part of the hips.",
    category: "True or False",
  },
];

export default quiz;
