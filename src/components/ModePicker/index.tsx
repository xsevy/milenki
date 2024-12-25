import { Col } from "react-bootstrap";
import { Mode } from "./Mode";
import { GameMode } from "./modes";
import { IconMusicNote, IconPaletteFill } from "../../icons";

interface ModePickerProps {
  selectedMode: GameMode;
  setSelectedMode: (mode: GameMode) => void;
}

export const ModePicker: React.FC<ModePickerProps> = ({
  selectedMode,
  setSelectedMode,
}) => {
  const modes = {
    [GameMode.Sound]: <IconMusicNote />,
    [GameMode.Color]: <IconPaletteFill />,
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
            onClick={() => setSelectedMode(Object.keys(modes)[index])}
          />
        </Col>
      ))}
    </>
  );
};
