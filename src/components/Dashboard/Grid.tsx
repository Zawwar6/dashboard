import React from "react";
import { StatCards } from "./StatCards";
import { ActivityGraph } from "./ActivityGraph";
import { UsageRadar } from "./UsageRadar";
import { RecentTransactions } from "./RecentTransactions";
import { GridTwo } from "./GridTwo";
import { GridThree } from "./GridThree";


export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-1 md:grid-cols-12">
      {/* <StatCards /> */}
      {/* <ActivityGraph /> */}
      {/* <UsageRadar /> */}
      <RecentTransactions />
      <GridTwo/>
      <GridThree/>
    </div>
  );
};
