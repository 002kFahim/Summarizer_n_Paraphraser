import InputOutputFields from "@/components/InputOutputFields";
import Navbar from "@/components/Navbar";
import React from "react";

const Summary = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <InputOutputFields placeholder="Enter your input" />
      </div>
    </div>
  );
};

export default Summary;
