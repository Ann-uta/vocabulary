import './App.css';
import './Styles/_vars.css';
import './Styles/_generals.css';
import './Styles/Header.css';
import './Styles/WordList.css';
import './Styles/Buttons.css';
import './Styles/Footer.css';

import WordList from './Components/WordList/WordList';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Card from './Components/Card/Card';
import wordsData from './wordsData.json';


function App() {
  return (
    <div className="App">
      <Header/>
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
