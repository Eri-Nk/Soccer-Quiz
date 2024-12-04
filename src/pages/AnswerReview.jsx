import { useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
import { IoInformationCircleSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const AnswerReview = () => {
  const location = useLocation();
  const { answers, league } = location.state;
  const ans = useMemo(() => Object.values(answers), [answers]);
  const [isExplanation, setIsExplanation] = useState({});

  if (!answers || !league) {
    return (
      <div className="error-message">
        <p>Error: Missing data. Please retry.</p>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    );
  }

  const toggleExplanation = (index) => {
    setIsExplanation((prevExplanation) => ({
      ...prevExplanation,
      [index]: !prevExplanation[index],
    }));
  };

  const renderExplanation = (index) => {
    return (
      <>
        <div className="text-container explain">
          <span
            className="answer-text "
            onClick={() => toggleExplanation(index)}
          >
            {isExplanation[index] ? "Hide Explanation" : "Show Explanation"}
          </span>
          <IoInformationCircleSharp
            className="info"
            onClick={() => toggleExplanation(index)}
          />
        </div>
      </>
    );
  };

  return (
    <div className="review-answer">
      <Helmet>
        <title>Answer Review | Soccer Quiz</title>
        <meta
          name="description"
          content="Review the answers to your quiz and learn more about some European Leagues!"
        />
      </Helmet>
      <h1>Answer Review for {league.name}</h1>

      {league.questions.map((question, pos) => (
        <div key={pos} className="review-item">
          <h2>
            Q{pos + 1}: {question.question}
          </h2>

          <div className="options review-options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`${
                  option === question.answer && ans[pos] === question.answer
                    ? "correct"
                    : ans[pos] !== question.answer && ans[pos] === option
                    ? "wrong"
                    : option === question.answer
                    ? "correct"
                    : ""
                }`}
              >
                <div className="button-content">
                  <div className="right-text-container">
                    {option === question.answer &&
                    ans[pos] === question.answer ? (
                      <div className="text-container">
                        {<FaCheck className="right-icon" />}
                        <span className="answer-text"> Your answer</span>
                      </div>
                    ) : (
                      ans[pos] !== question.answer &&
                      ans[pos] === option && (
                        <div className="text-container">
                          {<HiX className="wrong-icon" />}{" "}
                          <span className="answer-text">Your answer</span>
                        </div>
                      )
                    )}

                    <div className="text-container">
                      {option === question.answer &&
                        (ans[pos] !== question.answer ? (
                          <span className="answer-text">Correct Answer</span>
                        ) : null)}
                    </div>
                  </div>

                  <span className="option-text">{option}</span>

                  {option === question.answer && renderExplanation(pos)}
                </div>
                {isExplanation[pos] && option === question.answer && (
                  <p>{question.explanation}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}
      <p className="more-info">
        More of these stats and records can be found{" "}
        <a href={league.link} target="_blank" rel="noopener noreferrer">
          here.
        </a>
      </p>
      <section className="navigate-buttons review-navigate-buttons">
        {/* redo quiz */}
        <Link to={`/${league.id}/questions`}>
          <button>Retake Quiz</button>
        </Link>

        {/* home */}
        <Link to={`/home`}>
          <button>Go to Home Turf</button>
        </Link>
      </section>
    </div>
  );
};

export default AnswerReview;
