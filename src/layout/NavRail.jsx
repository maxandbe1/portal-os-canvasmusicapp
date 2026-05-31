// src/layout/NavRail.jsx
import React from "react";

const items = [
  { id: "dashboard", label: "Dashboard" },
  { id: "console", label: "Console" },
  { id: "canvas-music", label: "Canvas Music" }
];

export default function NavRail({ active, onSelect }) {
  return (
    <nav className="nav-rail">
      {items.map((item) => (
        <button
          key={item.id}
          className={item.id === active ? "nav-item active" : "nav-item"}
          onClick={() => onSelect(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
