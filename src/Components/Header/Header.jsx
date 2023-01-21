import logo from './logo.svg';
import { NavLink, useLocation } from "react-router-dom";
import { useState } from 'react';
import NewWord from '../NewWord/NewWord';
import Modal from '../Modal/Modal';

export default function Header() {
    const [modalActive, setModalActive] = useState(false)        
    let location = useLocation();
    
    function handleClick() {        
        if (location.pathname == '/') {
            setModalActive(true)       
        }        
    }
    let className = 'add-btn'
    if (location.pathname === '/game' ||
        location.pathname === '/flachcards')
    { className += ' disabled'}

    return (
        <header className="header" id="up">
            <div className='img-wrap'><NavLink to="/"><img className='header__logo' src={logo} alt="logo" /></NavLink></div>          
                    <nav className='header__menu'>
                <ul>
                    <li>
                        <button className={className} onClick={(handleClick)}>Add new word</button>
                        <Modal active={modalActive} setActive={setModalActive}/></li>                    
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