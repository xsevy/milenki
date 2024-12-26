interface ColorPickerProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  setSelectedColor,
}) => {
  const colors = ["red", "green", "yellow", "blue", "purple", "pink"];
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
            border:
              selectedColor === color
                ? "3px solid black"
                : "3px solid transparent",
          }}
        ></div>
      ))}
    </>
  );
};
