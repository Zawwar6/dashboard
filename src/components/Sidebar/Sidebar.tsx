import React from "react";
import { AccountToggle } from "./AccountToggle";
import { Search } from "./Search";
import { RouteSelect } from "./RouteSelect";
import { Plan } from "./Plan";

export const Sidebar = () => {
  return (
    <div>
      <div>
        {/* <AccountToggle /> */}
        {/* <Search /> */}
        <RouteSelect />
      </div>
      {/* <Plan /> */}
    </div>
  );
};
