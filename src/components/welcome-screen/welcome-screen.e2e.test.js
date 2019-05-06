import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Click on button at Welcome-screen should works`, () => {
  const clickHandler = jest.fn();
  const welcomescr = shallow(
      <WelcomeScreen time={5} errorCount={3} onClick={clickHandler} />
  );

  const startButton = welcomescr.find(`button`);
  startButton.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
