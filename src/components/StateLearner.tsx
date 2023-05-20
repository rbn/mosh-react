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
    <div>
      {drink.price}
      <Button onClick={handleClick}>click me</Button>
    </div>
  );
};

export default StateLearner;
