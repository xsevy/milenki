interface CharacterProps {
  color: string;
}

export const Character: React.FC<CharacterProps> = ({ color }) => {
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
    ></div>
  );
};
