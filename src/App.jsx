import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { categories } from "./mock/mockData.js";

function App() {
  const title = "Curso de React Comision 62330";

  return (
    <>
      <Navbar categories={categories} title="LOGO" />
      <ItemListContainer title={title} />
    </>
  );
}

export default App;
