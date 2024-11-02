import React from "react";
import { NavigationItems } from "./constants";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        {Object.keys(NavigationItems).map((item: string) => {
          return (
            <li onClick={NavigationItems[item].callback}>
              {NavigationItems[item].name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navigation;
