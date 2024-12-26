import { useState } from "react";
import { Character } from "./Character";
import fart from "../../assets/fart.wav";
import burp from "../../assets/burp.wav";
import useSound from "use-sound";

interface CharactersProps {
  selectedColor: string;
  selectedMode: string;
}

export const Characters: React.FC<CharactersProps> = ({
  selectedColor,
  selectedMode,
}) => {
  const [playFart] = useSound(fart);
  const [playBurp] = useSound(burp);

  const [characters, setCharacters] = useState([
    {
      color: "gray",
      play: playFart,
    },
    {
      color: "gray",
      play: playBurp,
    },
    {
      color: "gray",
      play: "",
    },
    {
      color: "gray",
      play: "",
    },
    {
      color: "gray",
      play: "",
    },
    {
      color: "gray",
      play: "",
    },
  ]);

  const handleCharacterClick = (index: number) => {
    const newCharacters = [...characters];
    if (selectedMode === "color") {
      newCharacters[index].color = selectedColor;
    } else {
      newCharacters[index].play();
    }
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
