import NexusSearchUI from './NexusSearchUI';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <>
      <header>
        <h1 className="title has-text-centered py-6 has-text-warning is-size-1 has-text-weight-extrabold is-family-sans-serif">Star Wars Nexus</h1>
      </header>

      <main>
        <p id="intro" className="has-text-centered has-text-warning is-size-4 px-6 mb-6 is-family-monospace">
          Hello there! Dive into the amazing world of Star Wars where there’s so much to discover!
          From memorable species and characters to legendary places and vehicles, there’s a universe of
          stories waiting for you. Get to know the incredible creatures, smart droids, and powerful
          factions that make the Galaxy so fascinating. Come on in and explore all the little details
          that make Star Wars truly come alive! May the Force be with you!
        </p>
        <NexusSearchUI />
      </main>
    </>
  )
}

export default App
