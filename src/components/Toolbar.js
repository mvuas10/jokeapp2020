import React from "react";

export default function Toolbar(props) {
  return (
    <header id="header" className="section-header scroll">
      <a href="./">
        <img className="icon" src={props.logo} alt="Furry animal" />
      </a>

      <nav>
        <div className="happy-title">{props.content}</div>
      </nav>
    </header>
  );
}
