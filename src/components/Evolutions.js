import { useEffect, useState } from "react";

export default function Evolution(props) {
  const [pokeObj, setPokeObj] = useState(null);

  async function getPokeData() {
    let url = "https://pokeapi.co/api/v2/pokemon/" + props.name;
    let resPoke = await fetch(url);
    let dataPoke = await resPoke.json();
    console.log("this is dataPoke", dataPoke);

    setPokeObj(dataPoke);
  }

  useEffect(() => {
    getPokeData();
  }, [props.name]);

  return (
    <div>
      <figure>
        <img src={pokeObj?.sprites.front_default} />
        <figcaption className="pokeName">{pokeObj?.species.name}</figcaption>
        <figcaption className="pokeType">
          {pokeObj?.types[0].type.name}
        </figcaption>
      </figure>
    </div>
  );
}
