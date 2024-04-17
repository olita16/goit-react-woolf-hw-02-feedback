
import { Component } from 'react';
import css from './App.module.css';
import Statistics  from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  newFeedback = e => {
    const key = e.target.innerText.toLowerCase();
    this.setState({ [key]: this.state[key] + 1 });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  countPositiveFeedbackPercentage = () => {
    const percent = (
      (this.state.good /
        (this.state.bad + this.state.neutral + this.state.good)) *
      100
    ).toFixed(0);
    return percent > 0 ? Number(percent) : 0;
  };

  isFeedbackAreEmpty = () => {
    return Object.values(this.state).every(value => {
      return value === 0;
    });
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.newFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.isFeedbackAreEmpty() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}