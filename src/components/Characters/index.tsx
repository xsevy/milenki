import { useState } from "react";
import { Character } from "../Character";

export const Characters = () => {
  const [characters, setCharacters] = useState([
    {
      color: "red",
    },
    {
      color: "green",
    },
    {
      color: "yellow",
    },
    {
      color: "blue",
    },
    {
      color: "black",
    },
    {
      color: "purple",
    },
  ]);

  return (
    <div className="justify-content-center d-flex">
      {characters.map((character, index) => (
        <Character key={index} color={character.color} />
      ))}
    </div>
  );
};
