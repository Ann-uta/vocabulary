import logo from './logo.svg';
import { NavLink } from "react-router-dom";

export default function Header(props) {    
    return (
        <header className="header" id="up">
            <div><NavLink to="/"><img className='header__logo' src={logo} alt="logo" /></NavLink></div>
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
                    <li>
                        <NavLink to="/comments">Comments</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
           
    )
}