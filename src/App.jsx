import "./App.css";
import Footer from "./components/Footer";
import { useState } from "react"; // Variavel reativa - Quando você alterar ela, ela altera na tela.
import Title from "./components/Title";

// State = variavel

function App() {
  // let numero = 0;
  const [numero, setNumero] = useState(7); // Dentro do array temos a variavel e a função que altera essa variavel.

  function sub() {
    // numero = numero - 1;
    setNumero(numero - 1); // Aqui estamos usando a função para alterar a variavel.
  }

  function add() {
    // numero = numero + 1;
    setNumero(numero + 1); // Aqui estamos usando a função para alterar a variavel.
  }

  return (
    <div className="main-container">
      <Title text="Contador" />
      <Title text="Contador 2" />

      <h1>{numero}</h1>
      <button onClick={sub}>-1</button>
      <button onClick={add}>+1</button>

      <Title text="Contador 3" />

      <Footer />
    </div>
  );
}

export default App;
