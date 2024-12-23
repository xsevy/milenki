import { Col } from "react-bootstrap";
import { Mode } from "./Mode";
import { GameMode } from "./modes";

interface ModePickerProps {
  selectedMode: GameMode;
  setSelectedMode: (mode: GameMode) => void;
}

export const ModePicker: React.FC<ModePickerProps> = ({
  selectedMode,
  setSelectedMode,
}) => {
  const modes = {
    [GameMode.Sound]: "🎵",
    [GameMode.Color]: "🎨",
  };
  const modesArray = Object.values(modes);
  const xsColumnSize = modesArray.length;

  return (
    <>
      {modesArray.map((mode, index) => (
        <Col xs={xsColumnSize}>
          <Mode
            isSelected={mode === modes[selectedMode]}
            key={index}
            icon={mode}
          />
        </Col>
      ))}
    </>
  );
};
