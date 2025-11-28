import React from "react";
import { MdSpaceDashboard, MdPayments } from "react-icons/md";
import { FaBox, FaUsers, FaUserCircle } from "react-icons/fa";
import { GiHammerDrop } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { BsBoxArrowRight } from "react-icons/bs";
import { FiBell } from "react-icons/fi";        // Feather Icons
import "./style.css";

export default function Sidebar(props) {
  return (
    <div className="left">
      <div className="sidebar">

        <h2 className="logo">
          <GiHammerDrop className="auction" />
          {props.mainheading}
        </h2>

        <ul className="menu">
          <li onClick={() => props.setPage("dashboard")}>
            <MdSpaceDashboard className="icon" /> Dashboard
          </li>

          <li onClick={() => props.setPage("inventory")}>
            <FaBox className="icon" /> Inventory
          </li>

          <li onClick={() => props.setPage("auctions")}>
            <GiHammerDrop className="icon" /> Auctions
          </li>

          <li onClick={() => props.setPage("finance")}>
            <MdPayments className="icon" /> Finance
          </li>

          <li onClick={() => props.setPage("users")}>
            <FaUsers className="icon" /> Users
          </li>

          <li onClick={() => props.setPage("notifications")}>
            <FiBell size={24} />  notifications
          </li>
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
  );
}
