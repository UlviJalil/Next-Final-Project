import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./featured/Header/header.jsx"
import Main from "./featured/Main/main.jsx"
import CardImageMolekul from "./molekuls/CardImageMolekul.jsx";
import Product from "./components/Product.jsx";
import BigSale from "./components/BigSale.jsx"
import Footer from "./featured/Footer/footer.jsx"
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx"
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import the i18n configuration

function App() {
  return (

    <div>
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
      <Main />
      <CardImageMolekul />
      <Product />
      <BigSale />
      <Footer />
    </div>
  );
}

export default App;
