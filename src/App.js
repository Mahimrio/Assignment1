import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/dashboard.css";

function App() {
  const [section, setSection] = useState("profile");

  return (
    <div className="d-flex">
      <Sidebar onSelect={setSection} />
      
      <div className="flex-grow-1 p-4">
        {section === "profile" && <Profile />}
        {section === "articles" && <Articles />}
      </div>
    </div>
  );
}

export default App;

