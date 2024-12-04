import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Quiz, ResultsPage, AnswerReview } from "./pages";
import leagues from "./data/leagues";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Soccer Quiz</title>
        <meta
          name="description"
          content="Test your soccer knowledge across top leagues!"
        />
      </Helmet>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />

          {/* quiz-component */}
          {leagues.map((league) => (
            <Route
              key={league.id}
              path={`/${league.id}/questions`}
              element={<Quiz league={league} />}
            />
          ))}

          {/* quiz-result */}
          {leagues.map((league) => (
            <Route
              key={league.id}
              path={`/${league.id}/quiz_result`}
              element={<ResultsPage />}
            />
          ))}

          {/* quiz-review */}
          {leagues.map((league) => (
            <Route
              key={league.id}
              path={`/${league.id}/answer_review`}
              element={<AnswerReview />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
