import { useState } from 'react';

let nextId = 0;
export default function Comments(){
   const [text, setText] = useState ('');
   const [array, setArray] = useState([]);
   const [isError, setError] = useState(true)

    function onBtnClick(e){
        e.preventDefault();
        const filterWords = ["viagra", "xxx"];
        let filteredText = text.trim();
        for (let word of filterWords) {
            let reg = new RegExp(word, 'ig');
            filteredText = filteredText.replace(reg, '***');
        }
      //проверка на пустоту
        setText('');
        if (filteredText){
        setArray([
            { id: nextId++, text: filteredText },
            ...array          
        ]);
        setError('')
    } else {
        setError('Поле не должно быть пустым')
    }   
    //    console.log(array)
}

    
    function onTextChange(e){
    setText(e.target.value)   
        }
    
    return (
        <div>
            <ul>
            {
                array.map((item)=>                
                    <li className='list' key={item.id}>{item.text}
                        <button onClick={() => 
                        {setArray(
                            array.filter(i =>
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