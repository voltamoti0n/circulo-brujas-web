// src/App.jsx
import React from 'react';
import Home from './pages/Home/Home.jsx';
import './App.css'; // Mantenemos la importación de App.css si contiene estilos relevantes

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;