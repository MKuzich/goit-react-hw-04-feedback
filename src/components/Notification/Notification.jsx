import React from 'react';
import styles from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <p className={styles.message}>{message}</p>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
