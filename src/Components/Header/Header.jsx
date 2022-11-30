import logo from './logo.svg';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header" id='up'>
            <div><Link to="/"><img className='header__logo' src={logo} alt="logo" /></Link></div>
            <nav className='header__menu'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/flachcards">Flachcards</Link>
                    </li>
                    <li>
                        <Link to="/game">Game</Link>
                    </li>
                </ul>
            </nav>
        </header>
           
    )
}