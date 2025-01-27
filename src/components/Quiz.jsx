import  { useState, useEffect } from "react";
import { fetchQuestions } from "../utils/api";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await fetchQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    loadQuestions();
  }, []);

  const handleOptionClick = (questionId, selectedOption) => {
    const question = questions.find((q) => q.id === questionId);
    const correct = question.correct_answer === selectedOption;

    setSelectedOption(selectedOption);
    setIsCorrect(correct);
    setAnswers({ ...answers, [questionId]: selectedOption });

    setTimeout(() => {
      setSelectedOption(null);
      setIsCorrect(null);
      handleNextQuestion();
    }, 1000); // Delay before moving to the next question
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  if (questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  if (isQuizCompleted) {
    const score = Object.keys(answers).reduce((acc, questionId) => {
      const question = questions.find((q) => q.id === parseInt(questionId));
      if (question && question.correct_answer === parseInt(answers[questionId])) {
        acc++;
      }
      return acc;
    }, 0);

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Quiz Completed!</h1>
        <p>
          You scored {score} out of {questions.length}.
        </p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Quiz!</h1>
      <div style={{ margin: "20px 0", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
        <p><strong>{currentQuestion.question}</strong></p>
        <div>
          {["option_a", "option_b", "option_c", "option_d"].map((optionKey, index) => {
            const optionValue = currentQuestion[optionKey];
            const isSelected = selectedOption === index + 1;
            const buttonStyle = isSelected
              ? { backgroundColor: isCorrect ? "green" : "red", color: "white" }
              : {};

            return (
              <button
                key={index}
                style={{ display: "block", margin: "10px auto", padding: "10px", width: "100%", ...buttonStyle }}
                onClick={() => handleOptionClick(currentQuestion.id, index + 1)}
                disabled={selectedOption !== null} // Disable buttons once an option is selected
              >
                {optionValue}
              </button>
            );
          })}
        </div>
      </div>
      <button
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          color: "white",
          backgroundColor: "#28a745",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleNextQuestion}
        disabled={selectedOption === null} // Disable "Next Question" button until an option is selected
      >
        {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
      </button>
    </div>
  );
};

export default Quiz;
