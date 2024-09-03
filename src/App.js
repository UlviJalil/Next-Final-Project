import React from "react";
import Header from "./featured/Header/header.jsx"
import Main from "./featured/Main/main.jsx"
import CardImageMolekul from "./molekuls/CardImageMolekul.jsx";
import Product from "./components/Product.jsx";
import BigSale from "./components/BigSale.jsx"


function App() {
  return (
    <div>
      <Header />
      <Main />
      <CardImageMolekul />
      <Product />
      <BigSale />

    </div>
  );
}

export default App;
