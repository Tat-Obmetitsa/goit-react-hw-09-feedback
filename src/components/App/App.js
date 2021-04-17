import React, { Component } from 'react';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncreament = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };
  totalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  positivePercentage = () => {
    return Math.round((this.state.good * 100) / this.totalFeedback());
  };
  render() {
    const { good, bad, neutral } = this.state;
    const total = this.totalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
             onLeaveFeedback={this.handleIncreament}
          />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFb={this.positivePercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}
export default App;
