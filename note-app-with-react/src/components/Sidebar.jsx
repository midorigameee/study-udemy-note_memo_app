import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>note</h1>
        <button>add</button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note"></div>
        <div className="sidebar-note-title">
          <strong>title</strong>
          <button>delete</button>
        </div>
        <p>note contents</p>
        <small>last modified: MM/dd</small>
      </div>
    </div>
  );
};

export default Sidebar;
