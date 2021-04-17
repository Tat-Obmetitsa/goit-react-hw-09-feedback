import React from 'react';
import s from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = function ({ options, onLeaveFeedback }) {
  return (
    <div className={s.buttons_list}>
      {options.map(option => (
        <button
          type="button"
          key={option}
          className={s.buttons}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default FeedbackOptions;
