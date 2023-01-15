import { useState, useContext } from "react";
import { DataContext } from "../Context/Context";

const reEng = new RegExp(/^[A-Za-z&-\s]+$/);
const reRu = new RegExp(/^[А-Яа-яЁё&-\s]+$/);

export default function Input(props){
    const {data, setData} = useContext(DataContext)
    const [inputText, setInputText] = useState (props.value);
    let [error, setError] = useState({
        english:'',
        transcription:'',
        russian:'',
        tags:''
    });

    function changeInputText(event) {
    setInputText(event.target.value
);
if (!event.target.value.trim()){
    setError({...error,
        [event.target.name]: 'Поле не должно быть пустым'
});
} else {
    setError({...error,[event.target.name]: ''})
}
}
//====надо передать эту функцию в tablerow
function validate(event){
    if (!inputText.english.match(reEng)){
        setError({...error,
            english: 'Только латинские буквы'                
        })
    } else if (!inputText.russian.match(reRu)){
        setError({...error,
            russian: 'Только кириллица'
    })
    } else {            
        setError({...error,[event.target.name]: ''})
    }
}
//=====
    return(
        <td>
            <input className={error.english ? 'error':''} type="text" onChange={changeInputText} value={inputText} name={'english'}/>
            <span className='errorMsg'>{error.english}</span>
        </td>
    )
}