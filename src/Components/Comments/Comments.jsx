import { useState } from 'react';

let nextId = 0;
const filterWords = ["viagra", "xxx"];

export default function Comments(){
   const [text, setText] = useState ('');
   const [comments, setComments] = useState([]);
   const [isError, setError] = useState(true)

    function onBtnClick(e){
        e.preventDefault();
        let filteredText = text.trim();
        for (let word of filterWords) {
            let reg = new RegExp(word, 'ig');
            filteredText = filteredText.replace(reg, '***');
        }
      //проверка на пустоту
        setText('');
        if (filteredText){
            setComments([
            { id: nextId++, text: filteredText },
            ...comments          
        ]);
        setError('')
    } else {
        setError('Поле не должно быть пустым')
    }   
    //    console.log(comments)
}

    
    function onTextChange(e){
    setText(e.target.value)   
        }
    
    return (
        <div>
            <ul>
            {
                comments.map((item)=>                
                    <li className='list' key={item.id}>{item.text}
                        <button onClick={() => 
                        {setComments(
                            comments.filter(i =>
                                i.id !== item.id
                    ));
                        }}>Удалить</button>
                    </li>
                    )
            }</ul>
            <form>                
                <textarea onChange={onTextChange} name="comment" value={text} />
                <button onClick={onBtnClick}>Отправить</button><br/>
            {isError && <span style={{color:'red'}}>{isError}</span>}
            </form>
        </div>

)
}