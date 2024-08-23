import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
import Carts from "../UI/cart/Carts.jsx";
import '../../styles/Layout.css'
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div className="layout-container d-flex flex-column vh-100 justify-content-between">
      <Header />
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
      <div>
      <Footer />
      </div>
      
    </div>
  );
};

export default Layout;