import "./App.css";
import { ClickCounter } from "./ClickCounter";
import { MouseOverCounter } from "./MouseOverCounter";

function App() {
  return (
    <>
      <ClickCounter title="Click Counter Title" />
      <br />
      <br />
      <br />
      <MouseOverCounter description="Mouse Over Description" />
    </>
  );
}

export default App;
