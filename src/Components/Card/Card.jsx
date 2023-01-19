import '../../Styles/Card.css';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function Card ({ id, russian, english, transcription, addLearned }) {
    const [isCheck, setIsCheck] = useState(false);
    const buttonRef = useRef(null);
    let location = useLocation();

    function onCheck() {
        setIsCheck(!isCheck);
        if (location.pathname === '/game')
        addLearned();
    } 
    
useEffect(() => {
    setIsCheck(false);
}, [english])

useEffect(() => {
    if (location.pathname === '/game') {
    buttonRef.current.focus()}
}, [id, isCheck, location.pathname])

    return (
        <div className='card__item' >
            <p className='card__english'>{english}</p>
            <p className= 'card__transcription'>{transcription}</p>
            <div className='card__translate' >               
                {isCheck
                    ? <div ref={buttonRef} className='card__russian'onClick={onCheck}>{russian}</div>
                    : <button ref={buttonRef} className='card__btn' onClick={onCheck}>Проверить</button>
                }
            </div>                 
        </div>        
    )
}