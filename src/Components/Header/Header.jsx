import logo from './logo.svg';
import { NavLink } from "react-router-dom";

//let activeClassName = "active";

export default function Header() {
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
                </ul>
            </nav>
        </header>
           
    )
}