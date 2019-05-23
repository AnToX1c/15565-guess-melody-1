import React from "react";
import renderer from "react-test-renderer";
import ArtistQuetionScreen from "./artist-question-screen";

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `path.mp3`,
    },
    answers: [
      {
        picture: `path.jpg`,
        artist: `John Snow`,
      },
      {
        picture: `path.jpg`,
        artist: `Jack Daniels`,
      },
      {
        picture: `path.jpg`,
        artist: `Jim Beam`,
      },
    ],
  }
};

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const {question} = mock;
  const tree = renderer
    .create(<ArtistQuetionScreen question={question} onAnswer={jest.fn()} />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
