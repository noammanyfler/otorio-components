import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './HelloWorld.module.css';
import 'antd/es/button/style/css';

/**
 * The only true HelloWorld component
 * @param {string} title The title of HelloWorld
 */
const HelloWorld = ({ title }) => (
  <>
    <span className={styles.helloText}>{title}</span>
    <Button type="primary">Click Me</Button>
  </>
);

HelloWorld.propTypes = {
  /**
   * The title of HelloWorld
   */
  title: PropTypes.string.isRequired,
};

export default HelloWorld;
