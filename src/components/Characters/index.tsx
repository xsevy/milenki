import { useState } from "react";
import { Character } from "./Character";

export const Characters = () => {
  const [characters, setCharacters] = useState([
    {
      color: "gray",
    },
    {
      color: "gray",
    },
    {
      color: "gray",
    },
    {
      color: "gray",
    },
    {
      color: "gray",
    },
    {
      color: "gray",
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
