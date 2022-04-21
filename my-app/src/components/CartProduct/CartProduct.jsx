import React from 'react';
import styles from './CartProduct.module.scss'



const CartProduct = ({image,name,description,price}) => {
  return (
      <div className={styles.cart}>
       <img className={styles.cart__img} src={image}/>
        <div className={styles.cart__description}>
          <div className={styles.cart__title_wrapper}>
        <span className={styles.cart__title}>{name}</span>
          <span className={styles.cart__add__description}>{description}</span>
          </div>
          <span className={styles.cart__price}>{price}</span>
        </div>
      </div>
  );
};

export default CartProduct;