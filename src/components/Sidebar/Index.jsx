import React from "react";
import { MdSpaceDashboard, MdPayments } from "react-icons/md";
import { FaBox, FaUsers, FaUserCircle } from "react-icons/fa";
import { GiHammerDrop } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { BsBoxArrowRight } from "react-icons/bs"
import "./style.css";


export default function Sidebar(props) {
  return (
<>
<div className="left">
    <div className="sidebar">

  
      <h2 className="logo"><GiHammerDrop className="auction"/>{props.mainheading}</h2>

      <ul className="menu">
<li><MdSpaceDashboard className="icon" /> Dashboard</li>
<li><FaBox className="icon" /> Inventory</li>
<li><GiHammerDrop className="icon" /> Auctions</li>
<li><MdPayments className="icon" /> Finance</li>
<li><FaUsers className="icon" /> Users</li>
      </ul>

     <div className="bottom">
  <div className="setting">
    <FiSettings className="icon" /> Settings
  </div>
<hr />
 <div className="profile">
  <FaUserCircle className="profile-icon" />
  <div className="profile-info">
    <h5>{props.account}</h5>
    <div className="profile-role">
      <p>{props.position}</p>
      <div className="exit-button">
        <BsBoxArrowRight className="exit-icon" />
      </div>
    </div>
  </div>
</div>
</div>

    </div>
</div>
<div className="right">
  <div className="top-section d-flex align-items-center justify-content-end">

    <div className="me-auto">
      <h2>Welcome, {props.account}!</h2>
      <p>Here is your inventory Dashboard today.</p>
    </div>


    <div className="me-3">
      <div className="dropdown">
        <button
  className="btn dropdown-custom dropdown-toggle"
  type="button"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  Dropdown button
</button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>


    <button className="add-btn">+ Add new lot</button>
  </div>
</div>
    </>
  );
}

    