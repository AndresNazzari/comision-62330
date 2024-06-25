import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const title = "Curso de React Comision 62330";

  return (
    <>
      <Navbar />
      <div>
        <h1>Bienvenidos {title}</h1>
        <h1>DEVELOP</h1>
      </div>
    </>
  );
}

export default App;
