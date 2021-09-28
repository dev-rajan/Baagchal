import React from "react";
import { useState } from "react";

const AccordinItem = ({ ques, ans }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    
    <div className="accordion-item">
      <div
        className={`accordion-title d-flex justify-content-between ${
          isActive ? "active" : ""
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="question">{ques}</div>
        <div className="text-light symbol">{isActive ? "-" : "+"}</div>
      </div>
      <div className={` accordion-content ${isActive ? "visible" : ""}`}>
        {ans}
      </div>
    </div>
  );
};

export default AccordinItem;
