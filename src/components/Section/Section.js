import React from 'react';
import PropTypes from 'prop-types';
import s from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.container}>
      <h1 className={s.container__title}>{title}</h1>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
export default Section;
