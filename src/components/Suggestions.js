import React from "react";

export default function Suggestions({ suggestions }) {
  return (
    <div className="suggestions">
      <ul>{suggestions.map((el) => el.title)}</ul>
    </div>
  );
}
