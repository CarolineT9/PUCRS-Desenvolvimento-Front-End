import React from "react";
import people from "./Data/people";
import "./App.css";
function App() {
  return (
    <div>
  <h1>Uma dada pessoa:</h1>
  {people.map((p, index) => (
    <div className="card" key={index}>
      <h2>{p.name}</h2>
      <p>Idade: {p.idade}</p>
      <p>Peso: {p.peso} kg</p>
      <p>Altura: {p.altura} m</p>
      <p>
        IMC: {(p.peso / (p.altura * p.altura)).toFixed(2)}
        {(p.peso / Math.pow(p.altura, 2)) > 30 && ' ==> ⚠️ acima do peso'}
      </p>
    </div>
  ))}
</div>

  );
}

export default App;
