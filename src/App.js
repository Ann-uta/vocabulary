import './App.css';
import './Styles/_vars.css';
import './Styles/_generals.css';
import './Styles/Header.css';
import './Styles/WordList.css';
import './Styles/Buttons.css';
import './Styles/Footer.css';
import './Styles/CardGallery.css';

import { useState } from 'react';
import WordList from './Components/WordList/WordList';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Card from './Components/Card/Card';
import wordsData from './wordsData.json';
import CardGallery from './Components/CardGallery/CardGallery';


function App() { 
  const [position, setPosition] = useState(0);

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
    <div className="App">      
      <Header/>     
      <CardGallery
        prevCard={onPrevClick}
        nextCard={onNextClick}
        index={position}
        words={wordsData}
        total={wordsData.length}
        >  
          <Card
            english={wordsData[position].english}
            transcription={wordsData[position].transcription}
            russian={wordsData[position].russian}/>          
      </CardGallery>   
        
            
      <WordList/>      
      <div className='card-wrap'>
      {
            wordsData.map((word) =>
            <Card key={word.id} english={word.english}
            transcription={word.transcription}
            russian={word.russian}/>
        )}
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;

/* */