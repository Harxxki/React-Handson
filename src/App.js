import "./App.css";
import React from "react";

function Header() {
  return (
    <header className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">React App</h1>
        </div>
      </div>
    </header>
  );
}

function Main() {
  const [foo, setData] = React.useState(
    "Press the button to get the Star Wars characters!"
  );
  const handleClick = () => {
    fetchData(
      "https://swapi.dev/api/people/" + Math.floor(Math.random() * 11)
    ).then((data) => {
      console.log(data);
      setData(data);
    });
  };
  return (
    <main>
      <div class="columns is-centered is-vcentered">
        <div class="column　is-vcentered">
          <button class="button is-primary" onClick={handleClick}>
            Get
          </button>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <p>{foo}</p>
        </div>
      </div>
    </main>
  );
}

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.name;
}

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="content has-text-centered">
        <p>&copy; 2021 Haruki Mori</p>
        <p>
          <a href="https://github.com/hwavy">GitHub</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
