import React from "react";

function Links({ icon, text }) {
  return (
    <div className="links">
      <a href="">
        {icon}
        {text}
      </a>
    </div>
  );
}

export default Links;
