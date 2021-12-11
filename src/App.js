import React from "react";
import './styles/app.css'
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminPage from "./admin/admin";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
