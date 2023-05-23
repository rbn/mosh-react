import { useState } from "react";
import Button from "./Button";

const StateLearner = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({
      ...drink,
      price: drink.price + 1,
    });
    console.log("hello" + drink.price);
  };

  return (
    <div className="block max-w-2xl rounded-lg bg-white p-18 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 border-double border-4 border-sky-500">
      {drink.price}
      <Button onClick={handleClick}>click me</Button>
    </div>
  );
};

export default StateLearner;
