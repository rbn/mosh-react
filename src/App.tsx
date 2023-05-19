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
      <Button color="purple">My Button</Button>
    </div>
  );
}

export default App;
