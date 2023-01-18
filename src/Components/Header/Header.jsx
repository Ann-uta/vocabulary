import logo from './logo.svg';
import { NavLink, useLocation } from "react-router-dom";
import NewWord from '../NewWord/NewWord';
import Modal from '../Modal/Modal';
import { observer, inject } from "mobx-react";

export function Header({ isModalActive}) {        
    let location = useLocation();
    
    function handleClick() {        
        if (location.pathname !== '/game') {
            isModalActive = true       
        }        
    }
    let className = 'add-btn'
    if (location.pathname === '/game')
    { className += ' disabled'}
    

    return (
        <header className="header" id="up">
            <div className='img-wrap'><NavLink to="/"><img className='header__logo' src={logo} alt="logo" /></NavLink></div>          
                    <nav className='header__menu'>
                <ul>
                    <li>
                        <button className={className} onClick={handleClick}>Add new word</button>
                        <Modal ><NewWord /></Modal></li>                    
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
export default inject(({ data }) => {
    const { isModalActive} = data;
  
    return {    
      isModalActive
    };
  })(observer(Header));