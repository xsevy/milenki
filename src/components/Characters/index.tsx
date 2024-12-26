import { useState } from "react";
import { Character } from "./Character";
import fart from "../../assets/fart.wav";
import burp from "../../assets/burp.wav";
import rooster from "../../assets/rooster.wav";
import horse from "../../assets/horse.wav";
import evilLaugh from "../../assets/evil-laugh.wav";
import pig from "../../assets/pig.wav";
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
  const [playRooster] = useSound(rooster);
  const [playHorse] = useSound(horse);
  const [playEvilLaugh] = useSound(evilLaugh);
  const [playPig] = useSound(pig);

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
      play: playRooster,
    },
    {
      color: "gray",
      play: playHorse,
    },
    {
      color: "gray",
      play: playEvilLaugh,
    },
    {
      color: "gray",
      play: playPig,
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
