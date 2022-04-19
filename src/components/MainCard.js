import Title from "./Title";
import Input from "./Input";
import Evolutions from "./Evolutions";
import { useState } from "react";

export default function MainCard() {
  const [pokeData, setPokeData] = useState(null);
  //   const [pokeEvos, setPokeEvos] = useState([]);

  function handlePokeData(poke) {
    setPokeData(poke);
    // console.log("this is pokedata inside maincard component ", poke);
  }
  let arr = [];
  async function getPokeSprites(pokeName) {
    console.log("this is inside ßpokeSprites func", pokeName);
    pokeName.map((poke) => <Evolutions pokeName={poke} />);
  }

  async function getPokeNames() {
    let pokeDataUrl = pokeData?.species.url;

    let pokeSpeciesRes = await fetch(pokeDataUrl);
    let pokeSpeciesData = await pokeSpeciesRes.json();

    console.log("this is pokeSpeciesData", pokeSpeciesData);
    let evoUrl = pokeSpeciesData.evolution_chain.url;

    let pokeEvoRes = await fetch(evoUrl);
    let pokeEvoData = await pokeEvoRes.json();

    let evoBegin = pokeEvoData.chain;
    let arrOfNames = [evoBegin.species.name];

    let nextEvo = evoBegin.evolves_to;
    console.log(evoBegin);

    while (nextEvo.length > 0) {
      arrOfNames.push(...nextEvo.map((poke) => poke.species.name));
      nextEvo = nextEvo[0].evolves_to;
    }
    getPokeSprites(arrOfNames);
  }

  return (
    <div className="maincard">
      <Title />
      <Input pokeDataFunc={handlePokeData} />

      <Evolutions />
    </div>
  );
}