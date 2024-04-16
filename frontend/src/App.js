import React from 'react';
import {BrowserRouter, Route, Routes, } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div class="grid-container">
  <header class="row">
<div>
    <a class="brand"  href="/">Ecommerce</a>
</div>
<div>
    <a href="/cart">Cart</a>
    <a href="/signin">Sign In</a>
</div>
  </header> 
  <main>
    <Routes>
    <Route path="/product/:id" Component={ProductScreen}></Route>
    <Route path="/" Component={HomeScreen} exact></Route>
    </Routes>
    </main>
    <footer class="row center">
All right reserved
  </footer>
</div>
</BrowserRouter>
  );
}

export default App;
