import { useEffect, useState } from "react";
import "./App.css";
import { Game } from "./components/game.jsx";

function App() {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key":
        "live_6wIELAI7Nn4QAnPgz3cLgS1oKbYJ4cnQvRbz21t4eVKnXQrNfUIg7AJQEEfIHg5x",
    });
    let requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    fetch("https://api.thecatapi.com/v1/images/search?limit=10", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setCatList(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <h2 className="game-heading">MEOWMORY</h2>
      <p className="game-rule">
        Dont click the same cat twice or else game over!
      </p>
      <Game catList={catList} />
    </>
  );
}

export default App;
