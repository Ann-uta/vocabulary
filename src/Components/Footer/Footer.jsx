import logo from '../Header/logo.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div><a href='#up'><img className='footer__logo' src={logo} alt="logo" /></a></div>
            <div className='footer__text'> Ann-uta &copy; 2023</div>
        </footer>
    )
}