import './App.css';
import './Styles/_vars.css';
import './Styles/_generals.css';
import './Styles/Header.css';
import './Styles/WordList.css';
import './Styles/Buttons.css';
import './Styles/Footer.css';
import './Styles/CardGallery.css';
import './Styles/NoMatch.css';

import { Routes, Route } from "react-router-dom";

import WordList from './Components/WordList/WordList';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
//import wordsData from './wordsData.json';
import CardGallery from './Components/CardGallery/CardGallery';
import NoMatch from './Components/NoMatch/NoMatch';
import Flachcards from './Components/Flashcards/Flashcards';

function App() {   
  return (
    <div className="App">      
      <Header/>
      <main className='main'>
      <Routes>        
          <Route path="/game/"
          element={<CardGallery 
             // total={wordsData.length}        
              >                          
            </CardGallery>}/>
          <Route path="/flachcards"
            element={<Flachcards/>}
            />
                <Route path="/"
            element={<WordList/>}/> 
            <Route path="*" element={<NoMatch />} />       
      </Routes>
      </main>
      <Footer/>      
    </div>
  );
}

export default App;