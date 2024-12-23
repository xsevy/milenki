import { useState } from "react";
import "./App.css";
import { ModePicker } from "./components/ModePicker";

function App() {
  const [mode, setMode] = useState({});

  return (
    <>
      <ModePicker />
    </>
  );
}

export default App;
