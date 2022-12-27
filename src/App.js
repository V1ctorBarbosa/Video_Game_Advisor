//React
import React from "react";

//Pages
import Home from './pages/home/Home';
import Create from "./pages/create/Create";
import Error from "./pages/error/Error";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Context
import { AdviseContext } from "./context/advise";

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
