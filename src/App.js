import React from "react";
import Header from "./featured/Header/header.jsx"
import Main from "./featured/Main/main.jsx"
import CardImageMolekul from "./molekuls/CardImageMolekul.jsx";
import SecondCardImageMolekul from "./molekuls/SecondCardImageMolekul.jsx";


function App() {
  return (
    <div>
      <Header />
      <Main />
      <CardImageMolekul />
      <SecondCardImageMolekul />

    </div>
  );
}

export default App;
