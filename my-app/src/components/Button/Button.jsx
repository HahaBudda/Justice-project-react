import React from 'react';
import styles from './Button.module.scss'

const Button = ({text,onClick}) => {
  return (
      <div className={styles.button}>
        <button onClick={onClick} name={text}>{text}</button>
      </div>
  );
};

export default Button;