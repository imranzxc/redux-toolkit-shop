import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, remove } from '../../redux/features/reducer';
import Product from '../Products/Product';
import styles from './styles.module.css';

const CartItem = ({ item }) => {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();


  const deleteItem = (id) => {
    dispatch(remove(id));
  };
  const handlePlus = (id) => {
      dispatch(increment(id));
  };
  const handleMinus = (id) => {
      dispatch(decrement(id));
  };

  return product.map((prod) => {
    if (item.productId === prod.id) {
      return (
        <tr className={styles.mainTable} key={prod.id}>
          <td>{item.id}</td>
          <td>
            <img className={styles.imgCart} src={prod.image} />
          </td>
          <td>{prod.name}</td>
          <td>{prod.left}</td>
          <td className={styles.funcButton}>
            <div className="row flex-nowrap">
              <div className="col">
                <button onClick={() => handlePlus(prod.id)} className="btn btn-sm btn-outline-info">
                  +
                </button>
              </div>
            </div>
            <div className="col text-center px-2">{item.amount}</div>
            <div className="col">
              <button onClick={() => handleMinus(prod.id)} className="btn btn-sm btn-outline-info">
                -
              </button>
            </div>
          </td>
          <td>
            <span style={{ cursor: 'pointer' }} onClick={() => deleteItem(item.id)}>
              X
            </span>
          </td>
        </tr>
      );
    }
  });
};

export default CartItem;