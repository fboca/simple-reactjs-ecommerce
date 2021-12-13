import React from "react";
import './styles/app.css'
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminPage from "./admin/admin";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Catalog from "./pages/catalog";
import Cart from "./pages/cart";
import NotFound from "./pages/404";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/catalog' element={<Catalog />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route element={<NotFound />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
