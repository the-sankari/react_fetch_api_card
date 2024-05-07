import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="card-container">
          {cards.map((card) => {
            return (
              <Cards
                key={card.id}
                title={card.title}
                body={card.body}
                userId={card.userId}
                number={card.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
