interface CharacterProps {
  color: string;
  onClick?: () => void;
}

export const Character: React.FC<CharacterProps> = ({ color, onClick }) => {
  return (
    <div
      style={{
        width: "40px",
        height: "240px",
        backgroundColor: color,
        marginRight: "4px",
        marginLeft: "4px",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
      }}
      onClick={onClick}
    ></div>
  );
};
