import React from 'react';
import styles from './styles.css';

const Balloon = ({ children, className, ...props }) => 
<sapn className={ [styles.balloon, className].join('') } {...props}>{ children }</sapn>;

export default Balloon;