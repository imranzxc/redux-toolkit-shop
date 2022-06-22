import React, { useState } from 'react';
import bagIcon from 'bootstrap-icons/icons/bag.svg';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const [opened, setOpened] = useState(false);

  const cartItems = useSelector((state) => state.cartItems);

  const emptyCart = (
    <div
      className="styles_wrapper__1iiIL"
      style={{ textAlign: 'center', left: '704px', top: '41px' }}>
      <div style={{ color: '#6d757d' }} className=" text-center text-muted my-2">
        В корзине нет товаров{' '}
      </div>
    </div>
  );

  const table = (
    <div className={styles.cartTable} style={{ left: '704px', top: '41px' }}>
      <span
        className={styles.close}
        style={{ marginLeft: '350px' }}
        onClick={() => setOpened(!opened)}>
        закрыть
      </span>
      {cartItems.length ? (
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>#</th>
              <th> </th>
              <th>Товар</th>
              <th>Остаток</th>
              <th>Кол-во</th>
              <th> </th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {cartItems.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </tbody>
        </table>
      ) : (
        emptyCart
      )}
    </div>
  );

  return (
    <>
      <div className={styles.cartButton} onClick={() => setOpened(!opened)}>
        <img src={bagIcon} alt="" />
        <span>{cartItems.length ? cartItems.length : null}</span>
      </div>
      {/* где-то тут был компонент, который выводил окно корзины, если opened === true  */}
      {opened ? table : null}
    </>
  );
};

export default Cart;