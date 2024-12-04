import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Quiz = ({ league }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [currentTime, setCurrentTime] = useState("");
  const navigate = useNavigate();

  const question = league.questions[currentQuestionIndex]; //each league.questions for each object in the SSOT data

  const handleAnswerClick = (option) => {
    setSelectedAnswer((prevAnswer) => ({
      ...prevAnswer,
      [currentQuestionIndex]: option,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < league.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const handleSubmit = () => {
    navigate(`/${league.id}/quiz_result`, {
      state: { answers: selectedAnswer, league },
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString({
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="league-quiz-container">
      <Helmet>
        <title>{league.name} Quiz | Soccer Quiz</title>
        <meta
          name="description"
          content={`Test your soccer knowledge with questions from ${league.name}!`}
        />
      </Helmet>
      <div className="date-time">
        <div className="date">
          <h2>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h2>
        </div>
        <div className="time">{currentTime}</div>
      </div>
      <div className="league-heading">
        <img src={league.logo} alt={`${league.name} logo`} />
        <span>{league.name}</span>
      </div>
      <main>
        <h2>{question.question}</h2>
        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              style={{
                backgroundColor:
                  selectedAnswer[currentQuestionIndex] === option
                    ? "rgba(34,139,34,0.8)"
                    : "#ebe8e8",
                color:
                  selectedAnswer[currentQuestionIndex] === option
                    ? "#fff"
                    : "#333",
              }}
            >
              <span>{option}</span>
            </button>
          ))}
        </div>

        <div className="update-question">
          <div className="counter">
            {`${currentQuestionIndex + 1}/${league.questions.length}`}
          </div>

          <div className="index-buttons">
            <div className="prev-button">
              {currentQuestionIndex > 0 && (
                <button onClick={handlePrevQuestion}>&larr; prev</button>
              )}
            </div>

            <div className="next-button">
              {currentQuestionIndex < league.questions.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  disabled={!selectedAnswer[currentQuestionIndex]}
                >
                  Next &rarr;
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={
                    Object.keys(selectedAnswer).length < league.questions.length
                  }
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
