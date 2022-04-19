export default function Evolution({props}) {

  async function getPokeSprites(pokeName) {
    console.log("this is inside ßpokeSprites func", props.pokeEvos);
  }


  return (
    <h1>`This es the names of the Evolutions : ${pokeEvos}`</h1>
  );
}
