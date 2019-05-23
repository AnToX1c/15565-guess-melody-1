import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";

configure({adapter: new Adapter()});

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
  }
};

it(`Click on button-play should works`, () => {
  const {song} = mock;
  const clickHandler = jest.fn();

  const AudioPlayerComponent = mount(<AudioPlayer
    onPlayButtonClick={clickHandler}
    isPlaying={false}
    src={song.src}
  />);

  window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };

  AudioPlayerComponent.setState({isLoading: false});
  const trackButton = AudioPlayerComponent.find(`.track__button`);
  trackButton.simulate(`click`, {preventDefault() {}});
  expect(AudioPlayerComponent.state(`isPlaying`)).toEqual(true);
  trackButton.simulate(`click`, {preventDefault() {}});
  expect(AudioPlayerComponent.state(`isPlaying`)).toEqual(false);
});
