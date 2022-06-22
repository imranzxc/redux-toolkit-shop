import { useDispatch, useSelector } from 'react-redux';
import styles from './product.module.css';
import { addToCart } from '../../../redux/features/reducer';

import uniqid from 'uniqid';

function Product({ product, index }) {
  const dispatch = useDispatch();

  const handleClickBuy = (id) => {
    const prod = {
      id: uniqid(),
      productId: id,
      amount: 1,
    };
    dispatch(addToCart(prod));
  };

  const ask = product.left ? 'купить' : 'нет в наличии';
  const cartItemss1 = useSelector((state) => state.cartItems);
  const inCart = cartItemss1.find((elem) => elem.productId === product.id);

  return (
    <div className={styles.product}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <img src={product.image} />
        </div>

        <div className={styles.price}>
          <h4>{product.price - (product.price / 100) * product.discount}</h4>
          <strike>{product.discount ? product.price : null}</strike>
        </div>

        <div className={styles.name}> {product.name}</div>

        <button
          onClick={() => handleClickBuy(product.id)}
          className={product.left && !inCart ? styles.btn : styles.btnDisabled}
          disabled={!product.left || inCart ? true : false}>
          {' '}
          {inCart ? 'в корзине' : ask}
        </button>
      </div>
    </div>
  );
  // вывод карточки продукта
}
export default Product;
