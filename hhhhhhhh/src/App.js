import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Heroku from './components/Heroku';
function App() {
  return (
   <>
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Heroku/>}/>
   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
