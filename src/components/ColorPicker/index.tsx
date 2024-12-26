interface ColorPickerProps {
  setSelectedColor: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  setSelectedColor,
}) => {
  const colors = ["red", "green", "yellow", "blue", "purple", "pink", "black"];
  return (
    <>
      {colors.map((color) => (
        <div
          onClick={() => setSelectedColor(color)}
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: color,
            marginRight: "4px",
            marginLeft: "4px",
            borderRadius: "24px",
          }}
        ></div>
      ))}
    </>
  );
};
