import { Col } from "react-bootstrap";
import { Mode } from "./Mode";
import { GameMode } from "./modes";

export const ModePicker: React.FC = () => {
  const modes = Object.values(GameMode);
  const xsColumnSize = 12 / modes.length;

  return (
    <>
      {modes.map((mode, index) => (
        <Col xs={xsColumnSize}>
          <Mode key={index} />
        </Col>
      ))}
    </>
  );
};
