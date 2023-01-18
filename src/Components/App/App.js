import './App.css';
import '../../Styles/_generals.css';
import '../../Styles/_vars.css';
import '../../Styles/Buttons.css';
import '../../Styles/Card.css';
import '../../Styles/CardGallery.css';
import '../../Styles/Footer.css';
import '../../Styles/Header.css';
import '../../Styles/NoMatch.css';
import '../../Styles/WordList.css';

import { Routes, Route } from "react-router-dom";

import  WordList from '../WordList/WordList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardGallery from '../CardGallery/CardGallery';
import NoMatch from '../NoMatch/NoMatch';
import Flachcards from '../Flashcards/Flashcards';


export default function App() {  
  
  return (   
      <div className="App">      
        <Header/>
        <main className='main'>
        <Routes>        
            <Route path="/game/" element={<CardGallery/>} />
            <Route path="/flachcards" element={<Flachcards/>} />
            <Route path="/" element={<WordList/>} /> 
            <Route path="*" element={<NoMatch />} />                   
        </Routes>
        </main>
        <Footer/>      
      </div>
  );
}
