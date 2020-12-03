import React from "react";
import Mainimage from "./Mainimage";
import Logo from "./images/Logo.png";

export default function Home() {
  return (
    <div className="section">
      <div className="component-section-header">
        <Mainimage logo={Logo} />
        <h2>
          <div>Loving 2020 so far?</div>
        </h2>
      </div>
    </div>
  );
}
