import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext.jsx";

import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Layout from "./pages/Layout.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx";
function App() {
  //const estoEsUnaVariableConElTitulo = "Curso de React Comision 62330";

  //desde aca acceder al context no deberia poder! ???

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      {/* <Navbar categories={categories} title="LOGO" />
       <ItemListContainer title={estoEsUnaVariableConElTitulo} /> */}
      {/* <ItemListContainer otroTitle="titulo por defecto" /> */}
    </CartContextProvider>
  );
}

export default App;
// TODO

// OPCIONAL: CUSTOM HOOK PAGINATION
