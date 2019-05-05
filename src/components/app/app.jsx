import React from "react";
import WelcomeScreen from "../../components/welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const App = ({gameTime, errorCount}) => (
  <WelcomeScreen time={gameTime} errorCount={errorCount} />
);

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired
};

export default App;
