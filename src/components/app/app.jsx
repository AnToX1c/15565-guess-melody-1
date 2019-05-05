import React from "react";
import WelcomeScreen from "../../components/welcome-screen/welcome-screen.jsx";

const App = ({gameTime, errorCount}) => (
  <WelcomeScreen time={gameTime} errorCount={errorCount} />
);

export default App;
