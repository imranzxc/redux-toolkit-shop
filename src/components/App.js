import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Products from './Products';
import Delivery from './Delivery';
import Header from './Header';

function App() {
  return (
    <div className="container">
      {/*Хидер отдельно вне роутов потому что он всегда виден*/}
      <Header />
      <div className="row">
        <div className="col-3">
          {/*Сайдбар отдельно вне роутов потому что он всегда виден*/}
          <Sidebar />
        </div>
        <div className="col">
          <>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/category/:categoryId" element={<Products />} />
              <Route path="/delivery" element={<Delivery />} />
            </Routes>
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
