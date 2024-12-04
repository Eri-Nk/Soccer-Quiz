import { Link, useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const ResultsPage = () => {
  const location = useLocation();
  const { answers, league } = location.state; // Access passed data;
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const numberOfQuestions = Object.keys(answers).length;
  const [isCelebrating, setIsCelebrating] = useState(true);

  const handleWindowChange = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowChange);

    return () => {
      window.removeEventListener("resize", handleWindowChange);
    };
  }, [dimension]);

  //confetti effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCelebrating(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const calculateAnswers = () => {
    let count = 0;

    league.questions.forEach((question, index) => {
      if (question.answer === answers[index]) {
        count += 1;
      }
    });
    return count;
  };
  const CalculatePercent = () => {
    const result = calculateAnswers();
    return (result / numberOfQuestions) * 100;
  };

  const ResultMessage = () => {
    const score = CalculatePercent();
    if (score >= 70) {
      return (
        <div>
          <p>You are the MVP of the season. You can be proud of yourself!</p>
          {isCelebrating && (
            <Confetti width={dimension.width} height={dimension.height} />
          )}
        </div>
      );
    } else if (score > 50) {
      return <p>You tried but didn't qualify for the Champions League.</p>;
    } else {
      return <p>Try harder next season.</p>;
    }
  };
  return (
    <div className="quiz-result">
      <Helmet>
        <title>Score for the Quiz | Soccer Quiz</title>
        <meta
          name="description"
          content={`Your score is ${CalculatePercent()}%. Retake the quiz if you aren't happy with your score!`}
        />
      </Helmet>
      <h1>Results for {league.name}</h1>
      <div className="display-result">
        <p>You got: {`${calculateAnswers()} of ${numberOfQuestions}`}</p>
        <span>{`${CalculatePercent()}% correct`}</span>
      </div>
      <div className="result-message">
        <span>{ResultMessage()}</span>
      </div>

      <section className="navigate-buttons">
        {/* review answers */}
        <Link to={`/${league.id}/answer_review`} state={{ answers, league }}>
          <button>Review Answers</button>
        </Link>

        {/* redo quiz */}
        <Link to={`/${league.id}/questions`}>
          <button>Try Again</button>
        </Link>

        {/* home */}
        <Link to={`/home`}>
          <button>Go to Home Turf</button>
        </Link>
      </section>
    </div>
  );
};
export default ResultsPage;
