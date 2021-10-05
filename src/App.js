import "./App.css";

function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">React App</h1>
        </div>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered is-multiline">
            <div className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img
                      src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
                      alt="cute dog"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        {/* <p>Dog images are retrieved from Dog API</p>
        <p>
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
        </p> */}
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
