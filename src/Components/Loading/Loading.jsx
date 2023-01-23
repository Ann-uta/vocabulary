import loading from './loading.gif';
import './Loading.css'

export default function Loading() {    
    
    return (
        <div className="loading_wrap">
            <img src={loading} alt="Loading..." />
            <h1>Please, wait</h1>
        </div>
    )
}    