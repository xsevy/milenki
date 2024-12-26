import { useState } from "react";
import "./App.css";
import { ModePicker } from "./components/ModePicker";
import { Row } from "react-bootstrap";
import { GameMode } from "./components/ModePicker/modes";
import { Characters } from "./components/Characters";

function App() {
  const [selectedMode, setSelectedMode] = useState(GameMode.Sound);

  return (
    <div>
      <Row className="justify-content-center">
        <ModePicker
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />
      </Row>
      <Row
        className="justify-content-center"
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <Characters />
      </Row>
    </div>
  );
}

export default App;
