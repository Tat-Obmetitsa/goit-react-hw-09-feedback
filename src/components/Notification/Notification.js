import React from 'react';
import PropTypes from 'prop-types';
import s from '../Notification/Notification.module.css';
function Notification({ message }) {
  return (
    <div className={s.container}>
      <span className={s.container__title}>{message}</span>
    </div>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
