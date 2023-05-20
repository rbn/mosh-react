import Alert from "./components/Alert";
import Button from "./components/Button";
import StateLearner from "./components/StateLearner";

function App() {
  return (
    <div className="container">
      <div className="header">
        <Alert>
          <p>
            Hello from a <span>p</span> tag
          </p>
        </Alert>
        <Button color="black">
          <span>My</span> Button
        </Button>
        <hr />
      </div>
      <div className="divide-y divide-dashed p-20  border-indigo-600 border-double border-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div className="divide-y divide-dashed p-20  border-indigo-600 border-double border-4">
        <StateLearner></StateLearner>
      </div>
    </div>
  );
}

export default App;
