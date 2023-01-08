// Hook
import { useState } from 'react';
import { evaluate, prodDependencies } from 'mathjs';

// Components
import Button from './components/Button';
import ButtonClear from './components/ButtonClear';
import Screen from './components/Screen';


// Styles
import './App.css'

// Function
function App() {

  // State input
  const [input, setInput] = useState('');

  // Agregar input
  const handleInput = val => {
    setInput(input + val);
  };

  // Calcular resultado
  const handleResult = () => {
    input ? setInput(evaluate(input)) : alert('No hay nada que calcular');
  }

  return (

    <div className="App">
      <div className="container-calc">
        <Screen input={input} />

        <div className="row">
          <Button clickB={handleInput}>1</Button>
          <Button clickB={handleInput}>2</Button>
          <Button clickB={handleInput}>3</Button>
          <Button clickB={handleInput}>+</Button>
        </div>

        <div className="row">
          <Button clickB={handleInput}>4</Button>
          <Button clickB={handleInput}>5</Button>
          <Button clickB={handleInput}>6</Button>
          <Button clickB={handleInput}>-</Button>
        </div>

        <div className="row">
          <Button clickB={handleInput}>7</Button>
          <Button clickB={handleInput}>8</Button>
          <Button clickB={handleInput}>9</Button>
          <Button clickB={handleInput}>*</Button>
        </div>

        <div className="row">
          <Button clickB={handleResult}>=</Button>
          <Button clickB={handleInput}>0</Button>
          <Button clickB={handleInput}>.</Button>
          <Button clickB={handleInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear clickC={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
};

export default App;
