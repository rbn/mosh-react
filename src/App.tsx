import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        <p>
          Hello from a <span>p</span> tag
        </p>
      </Alert>
      <Button color="black">
        <span>My</span> Button
      </Button>
    </div>
  );
}

export default App;
