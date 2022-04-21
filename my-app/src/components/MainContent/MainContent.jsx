import React, {useState} from 'react';
import CartProduct from "../CartProduct/CartProduct";
import product from "../MockData/Product.js";

import styles from './MainCategory.module.scss'
import Button from "../Button/Button";
import {useSelector} from "react-redux";

import ModalAdd from "../Modal/ModalAdd";



const MainContent = () => {

  const [modalActive, setModalActive] = useState(false)

  const catalog = useSelector((state) => state)
  const [sort, setSort] = useState(catalog)

  const filter = (e) => {
    e.target.name === "All"
        ? setSort(product)
        : setSort(product?.filter((el) => el.category === e.target.name))
  }

  return (
      <>
      <main>
        <div className={styles.button}>
          <Button text='All' name="All" onClick={(e) => filter(e)}/>
          <Button text='Beverages' name="Beverages" onClick={(e) => filter(e)}/>
          <Button text='Fresh Fruits' name="Fresh Fruits" onClick={(e) => filter(e)}/>
          <Button text='Pasta' name="Pasta" onClick={(e) => filter(e)}/>
          <Button text='Create a product' onClick={() => setModalActive(true)}/>
        </div>
        {sort.map(item => {
          return <CartProduct
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
          />
        })}
      </main>
  {
    modalActive
    &&
    <ModalAdd active={modalActive} setActive={setModalActive}/>
  }
  </>
  );
};

export default MainContent;