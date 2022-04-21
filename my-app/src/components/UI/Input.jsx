import React from 'react';
import styles from './Input.module.scss'

const Input = ({name,type,placeholder,label}) => {
  return (
      <div className={styles.input__wrapper}>
        <label className={styles.input__label}>{label}</label>
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={styles.input}
        />

      </div>
  );
};

export default Input;