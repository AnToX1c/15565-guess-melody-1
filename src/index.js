import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import settings from "./mocks/settings.js";
import questions from "./mocks/questions.js";

const init = (gameQuestions) => {
  const {gameTime, errorCount} = settings;

  ReactDOM.render(
      <App gameTime={gameTime} errorCount={errorCount} questions={gameQuestions} />,
      document.querySelector(`.main`)
  );
};

init(questions);
