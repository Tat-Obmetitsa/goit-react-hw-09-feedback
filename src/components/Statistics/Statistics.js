import React from 'react';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';
const Statistics = ({ good, bad, neutral, total, positiveFb }) => {
  return (
    <>
      <ul className={s.container__stats}>
        <li className={s.container__stats_title}>Good: {good}</li>
        <li className={s.container__stats_title}>Neutral: {neutral}</li>
        <li className={s.container__stats_title}>Bad: {bad}</li>
        <li className={s.container__stats_title}>Total: {total}</li>
        <li className={s.container__stats_title}>
          Positive feedback: {positiveFb}%
        </li>
      </ul>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFb: PropTypes.number.isRequired,
};
export default Statistics;
