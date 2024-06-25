import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const title = "Vite + React";

  return (
    <>
      <Navbar />
      <div>
        <h1>Titulo {title}</h1>
        <h2>Sub titulo {title}</h2>
      </div>
    </>
  );
}

export default App;
