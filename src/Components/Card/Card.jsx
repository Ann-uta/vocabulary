import '../../Styles/Card.css';
import { useState } from 'react';
//import wordsData from '../../wordsData.json';

export default function Card (props) {
   const [isCheck, setIsCheck] = useState(false);

   function onClick() {
    setIsCheck(!isCheck)
   }

    return (
        <div className='card__item'>
            <p className='card__english'>{props.english}</p>
            <p className= 'card__transcription'>{props.transcription}</p>                
            {isCheck
                ? <div className='card__russian'>{props.russian}</div>
                : <button className='card__btn' onClick={onClick}>Проверить</button>
            }                
        </div>        
    )
}