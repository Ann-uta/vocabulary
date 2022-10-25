//import './Footer.css';
import logo from '../Header/logo.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div><img className='footer__logo' src={logo} alt="logo" /></div>
            <div className='footer__text'>2022</div>
        </footer>
    )
}