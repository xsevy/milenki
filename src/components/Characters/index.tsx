import { useState } from "react";
import { Character } from "./Character";

interface CharactersProps {
  selectedColor: string;
}

export const Characters: React.FC<CharactersProps> = ({ selectedColor }) => {
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
    const newCharacters = [...characters];
    newCharacters[index].color = selectedColor;
    setCharacters(newCharacters);
  };

  return (
    <div className="justify-content-center d-flex">
      {characters.map((character, index) => (
        <Character
          onClick={() => handleCharacterClick(index)}
          key={index}
          color={character.color}
        />
      ))}
    </div>
  );
};
