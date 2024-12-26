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

  const handleCharacterClick = (index: number) => {
  };

  return (
    <div className="justify-content-center d-flex">
      {characters.map((character, index) => (
        <Character
          onClick={handleCharacterClick}
          key={index}
          color={character.color}
        />
      ))}
    </div>
  );
};
