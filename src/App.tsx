import { useState } from "react";
import AlertDismissable from "./components/AlertDismissable";
import Button from "./components/Button";
import Iconerator from "./components/Iconerator";

function App() {
  const [alertVis, setAlertVis] = useState(false);
  const closeAlert = (event) => {
    console.log(event);
  };

  return (
    <div>
      {alertVis && (
        <AlertDismissable onClose={() => setAlertVis(false)}></AlertDismissable>
      )}
      <Button color="sky-100" onClick={() => setAlertVis(true)}>
        <span>My</span> Button
      </Button>
      <Iconerator />
    </div>
  );
}

export default App;
