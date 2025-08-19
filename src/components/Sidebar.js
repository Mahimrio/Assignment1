import React, { useState } from "react";
import "../styles/dashboard.css";
import profilePic from "../assets/myphoto.jpeg";

export default function Sidebar({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      onSelect("profile");
    }
  };

  return (
    <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
      <div className="profile-container" onClick={handleProfileClick}>
        <img
          src={profilePic}
          alt="Profile"
          className="profile-pic"
        />
        {isOpen && <span className="profile-label">My Profile</span>}
      </div>
      {isOpen && (
        <ul className="menu">
          <li onClick={() => onSelect("profile")}>👤 Profile</li>
          <li onClick={() => onSelect("articles")}>📄 My Articles</li>
        </ul>
      )}
    </div>
  );
}

