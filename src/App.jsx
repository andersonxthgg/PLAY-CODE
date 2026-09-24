/*import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>PlayCode</h1>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#licoes">Lições</a>
          <a href="#exercicios">Exercícios</a>
          <a href="#ranking">Ranking</a>
          <a href="#perfil">Perfil</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <h2>Aprenda programação jogando!</h2>

          <p>
            Aprenda lógica de programação com JavaScript através
            de lições e exercícios interativos.
          </p>

          <button>Começar a aprender</button>
        </section>

        <section id="licoes" className="section">
          <h2>📚 Lições</h2>
          <p>Aprenda os fundamentos do JavaScript.</p>
        </section>

        <section id="exercicios" className="section">
          <h2>🧩 Exercícios</h2>
          <p>Pratique seus conhecimentos através de desafios.</p>
        </section>

        <section id="ranking" className="section">
          <h2>🏆 Ranking</h2>
          <p>Veja sua posição entre os outros jogadores.</p>
        </section>

        <section id="perfil" className="section">
          <h2>👤 Perfil</h2>
          <p>Acompanhe seu progresso e sua pontuação.</p>
        </section>
      </main>
    </div>
  )
}

export default App */

// src/App.jsx
import { auth, db } from "./services/firebase";

function App() {
  console.log("Firebase Auth:", auth);
  console.log("Firebase Firestore:", db);

  return (
    <div>
      <h1>PlayCode</h1>
      <p>Firebase conectado.</p>
    </div>
  );
}

export default App;