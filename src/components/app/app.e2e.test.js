import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

configure({adapter: new Adapter()});

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `path`,
          genre: `rock`,
        },
      ],
    },
    {
      type: `artist`,
      song: {
        artist: `One`,
        src: ``,
      },
      answers: [
        {
          picture: ``,
          artist: `One`,
        },
      ],
    }
  ],
};

it(`On click on WelcomeScreen App switches to the first question`, () => {
  const {questions} = mock;
  const app = mount(<App
    errorCount={0}
    gameTime={0}
    questions={questions}
  />);

  // expect(app.state(`question`)).toEqual(-1);

  const button = app.find(`button`);
  button.simulate(`click`);
  app.update();

  expect(app.state(`question`)).toEqual(0);

  // expect(app.state(`question`)).toEqual(0);
});
