// src/components/ProfilePage.jsx
import React, { useState } from "react";
import "../styles/profile.css";
import myProfilePic from "../assets/myphoto.jpeg";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    fullName: "Mahim Abdullah Rianto",
    email: "mahim,cse.20230104015@aust.edu",
    joined: "20 August 2025",
    bio: "Hello! I am passionate about web development and UI/UX design.",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <h2>My Profile</h2>

      <div className="profile-card">
        <img src={myProfilePic} alt="Profile" className="profile-img" />

        {!isEditing ? (
          <>
            <h3>{profile.fullName}</h3>
            <p className="email">{profile.email}</p>
            <p className="joined">Joined: {profile.joined}</p>
            <p className="bio">{profile.bio}</p>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="fullName"
              value={tempProfile.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              value={tempProfile.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <textarea
              name="bio"
              value={tempProfile.bio}
              onChange={handleChange}
              placeholder="Tell something about yourself..."
            />
            <div className="btn-group">
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}



