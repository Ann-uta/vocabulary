import logo from './loading.gif';
import './Loading.css'

export default function Loading() {    
    
    return (
        <div className="loading_wrap">
            <img src={logo} alt="Loading..." />
            <h1>Please, wait</h1>
        </div>
    )
}    