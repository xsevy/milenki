import { ButtonProps } from "react-bootstrap";

interface ModeProps {
  isSelected: boolean;
  icon: string | JSX.Element;
  onClick?: () => void;
}
export const Mode: React.FC<ButtonProps & ModeProps> = ({
  isSelected,
  icon,
  onClick,
}) => {
  return (
    <div
      className={`rounded-circle justify-content-center p-2 ${
        isSelected ? "text-primary" : ""
      }`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};
