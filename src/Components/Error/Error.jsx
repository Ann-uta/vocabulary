import logo from '../Header/logo.svg';
import './Error.css'

export default function Error() {    
    
    return (
        <div className="error_wrap">
            <img src={logo} alt="bulb" />           
            <h1>Что-то пошло не так..</h1>
            <p>Мы пытаемся разобраться</p>            
        </div>
    )
}   //