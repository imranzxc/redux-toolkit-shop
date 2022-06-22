import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      categoryId: 1,
      name: 'MacBook',
      price: 100000,
      discount: 3,
      left: 31,
      image: 'http://intocode.ru/d/react-project-1/images/1.jpg',
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Galaxy',
      price: 35999,
      discount: 0,
      left: 11,
      image: 'http://intocode.ru/d/react-project-1/images/2.jpg',
    },
    {
      id: 3,
      categoryId: 3,
      name: 'Скутер',
      price: 65500,
      discount: 10,
      left: 0,
      image: 'http://intocode.ru/d/react-project-1/images/3.jpg',
    },
    {
      id: 4,
      categoryId: 2,
      name: 'Монитор Samsung',
      price: 12000,
      discount: 0,
      left: 7,
      image: 'http://intocode.ru/d/react-project-1/images/4.jpg',
    },
    {
      id: 5,
      categoryId: 3,
      name: 'Респераторная маска',
      price: 500,
      discount: 0,
      left: 24,
      image: 'http://intocode.ru/d/react-project-1/images/5.jpg',
    },
    {
      id: 6,
      categoryId: 2,
      name: 'Стиральная машина',
      price: 100000,
      discount: 25,
      left: 0,
      image: 'http://intocode.ru/d/react-project-1/images/6.jpg',
    },
    {
      id: 7,
      categoryId: 2,
      name: 'Белый холодильник',
      price: 43100,
      discount: 50,
      left: 18,
      image: 'http://intocode.ru/d/react-project-1/images/7.jpg',
    },
    {
      id: 8,
      categoryId: 1,
      name: 'Колонка',
      price: 3000,
      discount: 0,
      left: 1,
      image: 'http://intocode.ru/d/react-project-1/images/8.jpg',
    },
    {
      id: 9,
      categoryId: 1,
      name: 'Наушники',
      price: 1500,
      discount: 15,
      left: 5,
      image: 'http://intocode.ru/d/react-project-1/images/9.jpg',
    },
  ],
  categories: [
    {
      id: 1,
      name: 'Гаджеты и аксессуары',
    },
    {
      id: 2,
      name: 'Бытовая техника',
    },
    {
      id: 3,
      name: 'Прочее',
    },
  ],
  cartItems: [
    { id: 1, productId: 2, amount: 2 },
    { id: 2, productId: 9, amount: 5 },
  ],
};

export const addToCart = createAction('addCart');
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const remove = createAction('delete');

export const shopReducer = createReducer(initialState, (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.cartItems.push(action.payload);

    state.products = state.products.map((item) => {
      if (item.id === action.payload.productId) {
        item.left -= 1;
      }
      return item;
    });
  });
  builder.addCase(remove, (state, action) => {
    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
  });
  builder.addCase(decrement, (state, action) => {
    state.cartItems = state.cartItems.map((cart) => {
      if (cart.productId === action.payload && cart.amount > 1) {
        cart.amount -= 1;
        state.products = state.products.map((product) => {
          if (product.id === action.payload) {
            product.left += 1;
          }
          return product;
        });
      }
      return cart;
    });
  });
  builder.addCase(increment, (state, action) => {
    state.products = state.products.map((product) => {
      if (product.id === action.payload && product.left) {
        product.left -= 1;
        state.cartItems = state.cartItems.map((cart) => {
          if (cart.productId === action.payload) {
            cart.amount += 1;
          }
          return cart;
        });
      }
      return product;
    });
  });
});

export default shopReducer.reducer;
