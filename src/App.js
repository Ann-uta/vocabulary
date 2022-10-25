import './App.css';
/* variables and general */
import './Styles/_vars.css';
import './Styles/_generals.css';
import './Styles/Header.css';
import './Styles/WordList.css';
import './Styles/Buttons.css';
import './Styles/Footer.css';

import WordList from './Components/WordList/WordList';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <WordList/>
      <Footer/>
      
    </div>
  );
}

export default App;
