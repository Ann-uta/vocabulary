import '../../Styles/Card.css';
import { useState, useEffect, useRef } from 'react';
//import wordsData from '../../wordsData.json';

export default function Card (props) {
   const [isCheck, setIsCheck] = useState(false);
   const buttonRef = useRef();

   function onClick() {
    setIsCheck(!isCheck)
   }   
   useEffect(() => {
    setIsCheck(false);
}, [props.english])

useEffect(() => {
    buttonRef.current.focus();
}, [props.id, isCheck])

    return (
        <div className='card__item' >
            <p className='card__english'>{props.english}</p>
            <p className= 'card__transcription'>{props.transcription}</p>
            <div className='card__translate' >               
                {isCheck
                    ? <div ref={buttonRef} className='card__russian'onClick={onClick}>{props.russian}</div>
                    : <button ref={buttonRef} className='card__btn' onClick={onClick}>Проверить</button>
                }
            </div>                 
        </div>        
    )
}