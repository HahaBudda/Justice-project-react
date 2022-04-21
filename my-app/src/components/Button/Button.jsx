import React from 'react';
import styles from './Button.module.scss'

const Button = ({text,onClick}) => {
  return (
        <button
            className={styles.button}
            onClick={onClick}
            name={text}
        >
          {text}
        </button>
  );
};

export default Button;