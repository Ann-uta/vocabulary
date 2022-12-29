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
import { useState, useEffect } from 'react';

import WordList from './Components/WordList/WordList';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
//import wordsData from './wordsData.json';
import CardGallery from './Components/CardGallery/CardGallery';
import NoMatch from './Components/NoMatch/NoMatch';
import Flachcards from './Components/Flashcards/Flashcards';
import Comments from './Components/Comments/Comments';
import { DataContext, DataContextProvider } from './Components/Context/Context';

function App() {
  const [data, setData] = useState([]);
  
  function loadData(){
   fetch('/api/words')
        .then((response) => {
          if (response.ok) {   //Проверяем что код ответа 200
            return response.json()
          } else {
            throw new Error('Something went wrong ...');
      }})
        .then((response) => {setData(response)})
    }
    useEffect(() => {
      loadData()
    },[])
   
    if (!data){
      <h1>Loading...</h1>    
    }
    
  
  return (   
    <DataContext.Provider value={ data }>
      <div className="App">      
        <Header/>
        <main className='main'>
        <Routes>        
            <Route path="/game/"
            element={<CardGallery/>}/>
            <Route path="/flachcards"
              element={<Flachcards/>}
              />
                  <Route path="/"
              element={<WordList/>}/> 
              <Route path="*" element={<NoMatch />} /> 
              <Route path="comments" element={<Comments />} />   
                  
        </Routes>
        </main>
        <Footer/>      
      </div>
    </DataContext.Provider>
  );
}

export default App;