import { useState } from "react";
import "./App.css";
import { ModePicker } from "./components/ModePicker";
import { Row } from "react-bootstrap";
import { GameMode } from "./components/ModePicker/modes";

function App() {
  const [selectedMode, setSelectedMode] = useState(GameMode.Sound);

  return (
    <>
      <Row className="justify-content-center">
        <ModePicker
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />
      </Row>
    </>
  );
}

export default App;
