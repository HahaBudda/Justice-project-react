import React, {useState} from 'react';
import CartProduct from "../CartProduct/CartProduct";
import product from "../MockData/Product.js"


import Button from "../Button/Button";


const MainContent = () => {

  const [sort, setSort] = useState(product)

  const filter = (e) => {
    e.target.name === "All"
        ? setSort(product)
        : setSort(product?.filter((el ) => el.category === e.target.name))
  }

  return (
      <main>
        <div className="button">
          <Button text='All' name="All" onClick={(e) => filter(e)}/>
          <Button text='Beverages' name="Beverages" onClick={(e) => filter(e)}/>
          <Button text='Fresh Fruits' name="Fresh Fruits" onClick={(e) => filter(e)}/>
          <Button text='Pasta' name="Pasta" onClick={(e) => filter(e)}/>
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
  );
};

export default MainContent;