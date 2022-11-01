import logo from './logo.svg'

export default function Header() {
    return (
        <header className="header">
            <div><img className='header__logo' src={logo} alt="logo" /></div>
            <nav className='header__menu'>
                <li>
                    <ul><a href="#">Flachcards</a></ul>
                    <ul><a href="#">Log In</a></ul>
                    <ul><a href="#">Sign Up</a></ul>
                    
                </li>
            </nav>
        </header>
    )
}