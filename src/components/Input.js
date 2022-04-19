import { useState, useEffect } from "react";

export default function Input(props) {
  const [userInput, setUserInput] = useState("");

  function handleUserInput(event) {
    event.preventDefault();
    console.log(event.target.value);
    let userInput = event.target.value;
    setUserInput(userInput);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let url = "https://pokeapi.co/api/v2/pokemon/" + userInput;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    props.pokeDataFunc(data);
  };

  return (
    <div className="input">
      <form onSubmit={handleSubmit} onChange={handleUserInput}>
        <input placeholder="search by pokemon..." />
        <button type="submit" title="click to catch'em"></button>
      </form>
    </div>
  );
}

//   useEffect(() => {
//     let url = "https://pokeapi.co/api/v2/pokemon/" + userInput;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => console.log("this is data", data));
//   }, [userInput]);
