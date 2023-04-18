import React, { useState } from 'react';
import styles from "./Header.module.css";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart.jsx";

const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const handleOpen = () => {
    setCartIsOpen(true);
  }

  const onClose = () => {
    setCartIsOpen(false);
  }

  return React.createElement("div", null,
    React.createElement("header", { className: styles.header },
      React.createElement(Link, { to: "/", className: styles.logoWrapper },
        React.createElement(Typography.Title, { level:1 }, "FlowerStore")
      ),
      React.createElement("nav", { className: styles.menu },
        React.createElement(Button, { onClick: handleOpen, type: "default" }, "Корзина"),
        React.createElement(Button, { type: "default" }, "Доставка"),
        React.createElement(Button, { type: "default" }, "Новости"),
      )
    ),
    React.createElement(Cart, { isOpen: cartIsOpen, onClose: onClose })
  );
};

export default React.memo(Header);
