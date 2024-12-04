import epl from "../assets/EPL.jfif";
import laliga from "../assets/la-liga.png";
import ligue1 from "../assets/ligue-1.png";
import serieA from "../assets/serie-a.png";
import bundesliga from "../assets/bundesliga.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home | Soccer Quiz</title>
        <meta
          name="description"
          content="Welcome to Soccer Quiz! Challenge yourself with questions from EPL, La Liga, Serie A, Bundesliga, and Ligue 1."
        />
      </Helmet>
      <div className="welcome">Welcome to the Home Turf</div>

      <div className="test-notes">
        <h3>The Test</h3>
        <p>Each league contains 10 test questions.</p>
        <p>
          It&apos;s not an official test. Just a nice way to test your knowledge
          of some European soccer leagues.
        </p>
      </div>
      <div className="league-container">
        <Link to={"/epl/questions"}>
          <figure>
            <img src={epl} alt="premier league" />
            <figcaption className="league-name"> Premier League</figcaption>
          </figure>
        </Link>

        <Link to={"/laliga/questions"}>
          <figure>
            <img src={laliga} alt="la liga" />
            <figcaption className="league-name">La Liga</figcaption>
          </figure>
        </Link>

        <Link to={"/serie-a/questions"}>
          <figure>
            <img src={serieA} alt="serie A" />
            <figcaption className="league-name">Serie A</figcaption>
          </figure>
        </Link>

        <Link to={"/bundesliga/questions"}>
          <figure>
            <img src={bundesliga} alt="bundesliga" />
            <figcaption className="league-name">Bundesliga</figcaption>
          </figure>
        </Link>

        <Link to={"/ligue-1/questions"}>
          <figure>
            <img src={ligue1} alt="ligue 1" />
            <figcaption className="league-name">Ligue 1</figcaption>
          </figure>
        </Link>
      </div>
    </div>
  );
};

export default Home;
