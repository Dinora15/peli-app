/*
import logo from './logo.svg';
*/
import './App.css';
import PeliGrid from './PeliGrid';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Peliculas} from './Peliculas';



function App() {
  return (
    
    <div>
      
      <header >      
       <h1 className={styles.title}>   Peliculas </h1>      
      </header>
     <main>    

     </main>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={< PeliGrid />} /> 
     <Route path="/Peliculas" element={< Peliculas />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;


