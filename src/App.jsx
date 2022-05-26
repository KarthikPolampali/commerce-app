import React,{useReducer, useEffect} from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Route,Routes } from "react-router-dom";
import Cart from "./Cart";
import Detail from "./Detail.class";
import Checkout from "./Checkout.class";
import { useCart } from "./cartContext";

export default function App() {
  const {dispatch} = useCart();
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to the Commerce App</h1>}/>
            <Route path="/:category" element={<Products/>}/>
            <Route path="/:category/:id" element={<Detail />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout dispatch={dispatch}/>} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
