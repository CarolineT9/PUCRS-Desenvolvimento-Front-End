import React from "react";
import "../App.css";
import MyHeader from "./MyHeader/Myheader";
import Content from "./Content/Content";
import Footer from "./Footer/Footer"
function App() {
  return (
    <div>

      <MyHeader title="Diário de notícias"/>
      <Content/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
