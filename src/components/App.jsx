import React, { useState } from 'react';
import { Notification } from './Feedback/Notification';
import { styled } from 'styled-components';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedback/Statistics/Statistics';
import { Section } from './Feedback/Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = btnName => {
    switch (btnName) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        break;
    }
  };
  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (!total) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };
  const percentage = countPositiveFeedbackPercentage();
  return (
    <div>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={handleLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          )}
        </Section>
      </Container>
    </div>
  );
};

export default App;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: 20px;
`;
