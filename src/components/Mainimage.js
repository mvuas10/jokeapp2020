import React from "react";

export default function Mainimage(props) {
  return (
    <div className="component-section-header">
      <img src={props.logo} alt="Furry animal" />
    </div>
  );
}
