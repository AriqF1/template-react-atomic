import React from "react";
import Button from "../atoms/Button";
import InputWithLabel from "../molecules/InputWithLabel";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to Home Page</h2>
      <InputWithLabel label="Name" id="name" placeholder="Your name" />
      <Button label="Submit" />
    </div>
  );
};

export default HomePage;