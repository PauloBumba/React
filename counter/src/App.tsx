// src/App.tsx
import React from 'react';
import Counter from './components/counter.tsx'; // Importa o componente Counter com a primeira letra maiúscula

export function App() {
  return (
    <header>
      <div>
        <Counter />
      </div>
    </header>
  );
}
