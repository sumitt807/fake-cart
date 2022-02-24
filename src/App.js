import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Button, ThemeProvider } from "react-bootstrap";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;