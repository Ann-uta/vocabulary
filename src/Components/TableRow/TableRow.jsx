import { useState, useContext  } from 'react';
import { DataContext } from '../Context/Context';

export default function TableRow(props) {
    const { data, setData, getData, reEng, reRu, updateData, deleteWord } = useContext(DataContext);
    const [isEdit, setIsEdit] = useState(false);
    const [inputText, setInputText] = useState (props);
    let [error, setError] = useState({
        english:'',
        transcription:'',
        russian:'',
        tags:''
    });
    
    function onEditClick() {
        setIsEdit(true)
    }
    function onCancelClick() {
        setInputText(props)
        setIsEdit(false)
        setError(error = '')
    }

    function changeInputText(event) {
        setInputText({...inputText,
            [event.target.name]: event.target.value
    });
    if (!event.target.value.trim()){
        setError({...error,
            [event.target.name]: 'Поле не должно быть пустым'
    });
    } else {
        setError({...error,[event.target.name]: ''})
    }
}

    function onSaveClick(event){
        event.preventDefault();
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
            updateData(inputText)
            setIsEdit(false)
        }       
    }

    const onDeleteClick = () => {
        deleteWord(inputText)        
    }

let disabledBtn = Object.values(error).some(el => el);

    return (         
        <tr className='row'>  
        {isEdit
        ? <>
            <td><input className={error.english ? 'error':''}
                    onChange={changeInputText} type="text"
                    value={inputText.english}
                    name={'english'}/>
                <span className='errorMsg'>{error.english}</span></td>
            <td><input className={error.transcription ? 'error':''}
                    onChange={changeInputText} type="text"
                    value={inputText.transcription}
                    name={'transcription'}/>
                <span className='errorMsg'>{error.transcription}</span></td>
            <td><input className={error.russian ? 'error':''}
                    onChange={changeInputText} type="text"
                    value={inputText.russian}
                    name={'russian'}/>
                <span className='errorMsg'>{error.russian}</span></td>
            <td><input className={error.tags ? 'error':''}
                    onChange={changeInputText} type="text"
                    value={inputText.tags}
                    name={'tags'} />
                <span className='errorMsg'>{error.tags}</span></td>
            <td><button disabled={disabledBtn}  className='save-btn' onClick={onSaveClick}>Save</button>
                <button className="cancel-btn"onClick={onCancelClick}>Cancel</button></td></>
        : <>
            <td>{inputText.english}</td>
            <td>{inputText.transcription}</td>
            <td>{inputText.russian}</td>
            <td>{inputText.tags}</td>
            <td><button className="edit-btn" onClick={onEditClick}>Edit</button>
                <button className='delete-btn' onClick={() => onDeleteClick(inputText.id)}>Delete</button></td>
        </>
        }</tr>
    )
}