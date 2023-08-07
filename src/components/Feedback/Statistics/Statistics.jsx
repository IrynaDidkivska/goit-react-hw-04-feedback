import { TextWrapper, Total } from './Statistics.styled';
import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <TextWrapper>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
      </TextWrapper>
      <Total>Total: {total}</Total>
      <p>Positive feedback: {percentage} %</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
