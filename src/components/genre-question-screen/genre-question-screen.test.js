import React from "react";
import renderer from "react-test-renderer";
import GenreQuetionScreen from "./genre-question-screen.jsx";

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `test.mp3`,
        genre: `rock`,
      },
      {
        src: `test.mp3`,
        genre: `blues`,
      },
      {
        src: `test.mp3`,
        genre: `jazz`,
      },
      {
        src: `test.mp3`,
        genre: `rock`,
      },
    ],
  },
};

it(`GenreQuestionScreen is rendered correctly`, () => {
  const {question} = mock;
  const tree = renderer
    .create(<GenreQuetionScreen question={question} onAnswer={jest.fn()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
