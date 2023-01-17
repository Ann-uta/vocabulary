import logo from './logo.svg';
import { NavLink } from "react-router-dom";
//import NewWord from '../NewWord/NewWord';
//import Modal from '../Modal/Modal';
//import { useContext } from 'react';
//import { DataContext } from '../Context/Context';

export default function Header(props) {        
  //  const { data, setModalActive } = useContext(DataContext);

    return (
        <header className="header" id="up">
            <div className='img-wrap'><NavLink to="/"><img className='header__logo' src={logo} alt="logo" /></NavLink></div>
                    <nav className='header__menu'>
                <ul>                    
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/flachcards">Flachcards</NavLink>
                    </li>
                    <li>
                        <NavLink to="/game">Game</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
           
    )
}
//
/*<div className="add-btn" onClick={() => setModalActive(true)}>Add new word
<Modal><NewWord/></Modal>
</div>*/