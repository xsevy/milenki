import { ButtonProps } from "react-bootstrap";

interface ModeProps {
  isSelected: boolean;
  icon: string;
}
export const Mode: React.FC<ButtonProps & ModeProps> = ({
  isSelected,
  icon,
}) => {
  return <div className="rounded-circle p-2">{icon}</div>;
};
