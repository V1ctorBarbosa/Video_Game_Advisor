//React
import React from "react";

//Styled
import './styles/global.css'

//Pages
import Home from './pages/home/Home';
import Create from "./pages/create/Create";
import Error from "./pages/error/Error";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router> 
  );
}

export default App;
