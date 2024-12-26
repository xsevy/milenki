import { useState } from "react";
import "./App.css";
import { ModePicker } from "./components/ModePicker";
import { Row } from "react-bootstrap";
import { GameMode } from "./components/ModePicker/modes";
import { Characters } from "./components/Characters";
import { ColorPicker } from "./components/ColorPicker";

function App() {
  const [selectedMode, setSelectedMode] = useState(GameMode.Sound);
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <Row className="justify-content-center">
        <ModePicker
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />
      </Row>
      <Row
        style={{
          height: "100px",
        }}
        className="d-flex align-items-center justify-content-center"
      >
        {selectedMode === GameMode.Color && (
          <ColorPicker selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        )}
      </Row>
      <Row
        className="justify-content-center"
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <Characters selectedMode={selectedMode} selectedColor={selectedColor} />
      </Row>
    </div>
  );
}

export default App;
