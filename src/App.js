import './App.css';
import './Styles/_vars.css';
import './Styles/_generals.css';
import './Styles/Header.css';
import './Styles/WordList.css';
import './Styles/Buttons.css';
import './Styles/Footer.css';
import './Styles/CardGallery.css';
import './Styles/NoMatch.css';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import WordList from './Components/WordList/WordList';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Card from './Components/Card/Card';
import wordsData from './wordsData.json';
import CardGallery from './Components/CardGallery/CardGallery';
import NoMatch from './Components/NoMatch/NoMatch';


function App() { 
  const [position, setPosition] = useState(0);

/* useEffect(() => { 
    shuffle(wordsData);    
}, [])
//как-то надо передать в стейт рандомный номер карточки, чтобы он сразу поставил ее первой
// т.е. надо сначала перемешать карточки, а потом отрисовать первую.

function shuffle(wordsData) {
  let currentIndex = wordsData.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = wordsData[currentIndex];
    wordsData[currentIndex] = wordsData[randomIndex];
    wordsData[randomIndex] = temporaryValue;
  }

  return wordsData;
}*/

  function onPrevClick() {    
    // if (position < 0){
    //   setPosition ({position:wordsData.length - 1})
    // } else {
      setPosition (position-1);
    //}
  }
  function onNextClick() {
    // if (position > wordsData.length){
    //   setPosition({position:0})
    // } else {
    setPosition (position+1)
  //}
}
  return (
    <Router>
    <div className="App">      
      <Header/>
      <main className='main'>
      <Routes>        
          <Route path="/game"
          element={<CardGallery
              prevCard={onPrevClick}
              nextCard={onNextClick}
              index={position}
              words={wordsData}
              total={wordsData.length}        
              >  
                <Card
                  english={wordsData[position].english}
                  transcription={wordsData[position].transcription}
                  russian={wordsData[position].russian}
                  />          
            </CardGallery>}/>
          <Route path="/flachcards"
            element={<div className='container'><h1 className='caption'>Flachcards</h1>
              <div className='card-wrap'>             
              {
                wordsData.map((word) =>
                <Card key={word.id} english={word.english}
                transcription={word.transcription}
                russian={word.russian}/>
              )}
              </div></div>}/>
                <Route path="/"
            element={<WordList/>}/> 
            <Route path="*" element={<NoMatch />} />       
      </Routes>
      </main>
      <Footer/>      
    </div>
    </Router>
  );
}

export default App;