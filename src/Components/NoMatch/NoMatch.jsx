
import { useState } from 'react';

export default function NoMatch () { 
    const [isCheck, setIsCheck] = useState(false);
    function onClick() {
    setIsCheck(!isCheck)
    }
    
    return (
        <div className='nomatch-container'>
            <div className='card__item'>
                <p className='card__english'>404</p><h2>Page not found</h2>
                <div className='card__translate'>               
                    {isCheck
                        ? <div className='card__russian'onClick={onClick}>Страница не найдена</div>
                        : <button className='card__btn' onClick={onClick}>Проверить</button>
                    }
                </div>                 
            </div>
        </div>       
    )
}