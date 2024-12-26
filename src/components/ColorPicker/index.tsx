export const ColorPicker = () => {
  const colors = ["red", "green", "yellow", "blue", "purple", "pink", "black"];
  return (
    <>
      {colors.map((color) => (
        <div
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
