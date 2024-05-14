import React from "react";


import LeftSectionPartOne from "./LeftSectionPartOne";
import LeftSectionPartTwo from "./LeftSectionPartTwo";
import LeftSectionPartThree from "./LeftSectionPartThree";

const LeftSection = () => {
  return (
    <>
     <div className=" w-2/6">
      <LeftSectionPartOne/>
      <LeftSectionPartTwo/>
      <LeftSectionPartThree/>

      </div>
    </>
  );
};

export default LeftSection;
