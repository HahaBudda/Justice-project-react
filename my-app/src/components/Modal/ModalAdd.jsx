import React, {useState} from 'react';

import styles from './ModalAdd.module.scss'
import Input from "../UI/Input";
import Button from "../Button/Button";

const ModalAdd = ({setActive}) => {

  const addProduct = (e) => {

    e.preventDefault()
    console.log(setForm)
  }

  const [form, setForm] = useState({})

  return (
      <div className={styles.modal} onClick={() => setActive(false)}>

        <div className={styles.modal__content} onClick={e => e.stopPropagation()}>

          <form className={styles.modal__content__form}>
            <label><h1>Create a product</h1></label>

            <Input
                onChange={(e) => setForm({...setForm, name: e.target.value})}
                type={'text'}
                placeholder={"name"}
            />
            <Input
                onChange={(e) => setForm({...setForm, description: e.target.value})}
                type={'text'}
                placeholder={"description"}
            />
            <Input
                onChange={(e) => setForm({...setForm, price: e.target.value})}
                type={'text'}
                placeholder={"price"}
            />


            <Button
                onClick={(e) => addProduct(e)}
                text={'Add product +'}

            />
          </form>
        </div>
      </div>
  );
};

export default ModalAdd;