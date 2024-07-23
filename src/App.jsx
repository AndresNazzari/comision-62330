import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Layout from "./pages/Layout.jsx";
import Error404 from "./components/Error404/Error404.jsx";

function App() {
  const estoEsUnaVariableConElTitulo = "Curso de React Comision 62330";

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer title={estoEsUnaVariableConElTitulo} />} />
            <Route path="/home" element={<ItemListContainer title={estoEsUnaVariableConElTitulo} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>

      {/* <Navbar categories={categories} title="LOGO" />
       <ItemListContainer title={estoEsUnaVariableConElTitulo} /> */}
      {/* <ItemListContainer otroTitle="titulo por defecto" /> */}
    </>
  );
}

export default App;

// Clase que viene ver si o si
// BOOSTRAP
// OPCIONAL: CUSTOM HOOK PAGINATION
// TERMINAR ROUTING
// NAVEGAR EN CATEGORIAS
// VER DETALLE DE PRODUCTO
