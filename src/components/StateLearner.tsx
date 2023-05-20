import { useState } from "react";
import Button from "./Button";

const StateLearner = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    drink.price;
  };

  return (
    <div>
      <Button color="red">kasdljasd</Button>
    </div>
  );
};

export default StateLearner;
