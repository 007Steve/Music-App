import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Row from "./components/Row";
import MainContainer from "./components/MainContainer";


function App() {
  
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
      
        <Row />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
