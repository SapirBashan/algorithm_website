import React from "react";
import "./UpperMenu.css";
const UpperMenu = () => {
  return (
    <div className="upper-menu">
      <div className="upper-menu__left">
        <div className="upper-menu__logo">Logo</div>
        <div className="upper-menu__search">Search</div>
      </div>
      <div className="upper-menu__right">
        <div className="upper-menu__user">User</div>
        <div className="upper-menu__cart">Cart</div>
      </div>
    </div>
  );
};

export default UpperMenu;