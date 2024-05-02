import React from "react";
import "../App.css";
import portfolio1 from "../images/portfolioImg1.png";
import { Link, Outlet } from "react-router-dom";
function Header() {
  return (
    <div className="head">
      <div className="head1">
        <span className="tagline">Eat Code Sleep Repeat</span>
      </div>
      <div className="head2">
        <Link to='/'><img src={portfolio1} alt="" className="pfLogo" /></Link>
        <span className="pfHead">My Portfolio</span>
        <div className="head2_nav">
          <button className="nav_items">
            <Link to='/' className="link_btns">Home</Link>
          </button>
          <button className="nav_items">
          <Link to='/aboutme'  className="link_btns">About Me</Link>
          </button>
          <button className="nav_items">
              <Link to='/projects' className="link_btns">Projects</Link>
          </button>
          <button className="nav_items">
          <Link to='/contact' className="link_btns">Contact</Link>
          </button>
          <button className="nav_items">
          <Link to='/items' className="link_btns">Items</Link>
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
