import React, { useState } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from '../components/FeedbackOptions';
import { Statistics } from '../components/Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onClickFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((feedback.good / total) * 100) : 0;
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <Section title="Feedback Section">
          <FeedbackOptions
            options={Object.keys(feedback)}
            onClickFeedback={onClickFeedback}
          />
        </Section>
        <section>
          <h2>Statistics</h2>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <p>There is no Feedback</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
