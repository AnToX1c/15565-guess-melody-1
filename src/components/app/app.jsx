import React, {Component} from "react";
import PropTypes from "prop-types";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import QuestionGenreScreen from "../genre-question-screen/genre-question-screen.jsx";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: -1
    };
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return <React.Fragment>
      {this._getScreen(questions[question], () => {
        this.setState({
          question: question + 1 >= questions.length ? -1 : question + 1,
        });
      })}
    </React.Fragment>;
  }

  _getScreen(question, onClick) {
    if (!question) {
      const {
        errorCount,
        gameTime,
      } = this.props;

      return <WelcomeScreen
        errorCount={errorCount}
        time={gameTime}
        onClick={onClick}
      />;
    }

    switch (question.type) {
      case `genre`: return <QuestionGenreScreen
        question={question}
        onAnswer={onClick}
      />;

      case `artist`: return <ArtistQuestionScreen
        question={question}
        onAnswer={onClick}
      />;
    }

    return null;
  }

}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
