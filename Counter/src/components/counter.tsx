import React, { useState } from 'react';
import Styles from "../components/Styles.module.scss";

const Counter: React.FC = () => {
  const [Contador, setContador] = useState(0);

  return (
    <main>
     
      <div className={Styles.player}>
        <button onClick={() => {
          setContador(Contador -1)
        }}>
          Diminuir
        </button>
        <button onClick={() => {
          setContador(Contador + 1);
        }}>
          Aumentar
        </button>
        <h1>{Contador}</h1>
      </div>
    </main>
  );
};

export default Counter;
