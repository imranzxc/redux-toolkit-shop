import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import styles from "./products.module.css";
import Product from "./Product";

function Products() {
  const { categoryId } = useParams();

  const { state } = useContext(ShopContext);

  const products = state.products.filter((product) => {
    if (!categoryId) return true;

    return product.categoryId === Number(categoryId);
  });

  return (
    <div className={styles.products}>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Products;