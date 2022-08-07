import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={styles.list}>
        {options.map(item => {
          const name = item.charAt(0).toUpperCase() + item.slice(1);
          return (
            <li className={styles.item} key={item}>
              <button
                type="button"
                className={styles.btn}
                onClick={onLeaveFeedback}
                value={item}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
