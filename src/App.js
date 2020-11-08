import React from "react";
import "./App.css";
import Wilder from "./components/Wilder";
import styled from "styled-components";

function App() {
  const wilders = [
    {
      name: "John Palo",
      skills: [
        { name: "HTML", voteCount: 18 },
        { name: "CSS", voteCount: 15 },
      ],
    },
    {
      name: "Micheal dohns",
      skills: [
        { name: "HTML", voteCount: 12 },
        { name: "CSS", voteCount: 16 },
      ],
    },
    {
      name: "Liam goli",
      skills: [
        { name: "Node", voteCount: 9 },
        { name: "React", voteCount: 8 },
      ],
    },
  ];

  return (
    <div>
      <header>
        <container>
          <h1>Wilders Book</h1>
        </container>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((wilder) => (
            <Wilder
              key={wilder.name}
              name={wilder.name}
              skills={wilder.skills}
            />
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
