import { useEffect, useState } from "react";
import "./NewWord.css"

export default function NewWord({reEng, reRu, setActive, addWord}){

    const defaultNewWord = {
        english:'',
        transcription:'',
        russian:'',
        tags:'',
    }
    const [newWord, setNewWord] = useState (defaultNewWord);
    let [error, setError] = useState({
        english:'',
        transcription:'',
        russian:'',
        tags:''
    });
    let [empty, setEmpty] = useState({
        english:'',
        transcription:'',
        russian:'',
        tags:''
    });
    
    function changeNewWord(e){
        setError({...error,[e.target.name]: ''})
        setNewWord({...newWord,
            [e.target.name]: e.target.value
    });
        if (!e.target.value.trim()){
        setEmpty({...empty,
            [e.target.name]:'Поле не должно быть пустым'});
    } else {
        setEmpty({...empty,
            [e.target.name]:''})
    }
}
    function onCancelClick(e) {
        e.preventDefault();
        setNewWord(defaultNewWord)
        setError('')
        setEmpty('')
        setActive(false)
    }
    
    function onBlur(e){
        e.preventDefault();
            if (!e.target.value.trim()){
                setEmpty({...empty,
                    [e.target.name]:'Поле не должно быть пустым'});
            } 
            else {
                setEmpty({...empty,
                    [e.target.name]:''})
            }
    }
    
    const onSaveAddClick = (e) => {
        e.preventDefault();
        if (!newWord.english.trim() &&
            !newWord.russian.trim() &&
            !newWord.transcription.trim() &&
            !newWord.tags.trim()){
            setError('Поле не должно быть пустым');
        }  
            else if (!newWord.english.match(reEng)){
                setError({...error,
                english: 'Только латинские буквы'})
            } else if (!newWord.russian.match(reRu)){
                    setError({...error,
                        russian: 'Только кириллица'})
        } else {            
            setError({...error, [e.target.name]: ''})
            setEmpty({...empty, [e.target.name]:''})
            addWord(newWord)
            setActive(false)             
            }
        }                  
        
    useEffect(() => {
        let value = Object.values(newWord).some(el => el)        
        if (value === false){
            setEmpty({...empty,
                tags:'Все поля должны быть заполнены'})
        } else {
            setEmpty({...empty,
                tags:''})
        }            
        }, [])
        
    let disabledBtn = Object.values(error).some(el => el) || Object.values(empty).some(el => el) 

    return(
        <form className="new-word">
            <input placeholder="english" className={error.english || empty.error ?  'error':''}
                onChange={changeNewWord}
                onBlur={onBlur} type="text"
                value={newWord.english}
                name={'english'}/>
            <p className='errorMsg'>{error.english} {empty.english}</p>            
            <input placeholder="transcription" className={error.transcription ? 'error':''}
                onChange={changeNewWord}
                onBlur={onBlur} type="text"
                value={newWord.transcription}
                name={'transcription'}/>
            <p className='errorMsg' >{error.transcription} {empty.transcription}</p>
            <input placeholder="russian" className={error.russian ? 'error':''}
                    onChange={changeNewWord}
                    onBlur={onBlur} type="text"
                    value={newWord.russian}
                    name={'russian'}/>
            <p className='errorMsg'>{error.russian} {empty.russian}</p>
            <input placeholder="tags" className={error.tags ? 'error':''}
                onChange={changeNewWord}
                onBlur={onBlur} type="text"
                value={newWord.tags}
                name={'tags'} />
            <p className='errorMsg'>{error.tags} {empty.tags}</p>
            <div className="add-btns-container">
                <button disabled={disabledBtn} className='save-btn' onClick={onSaveAddClick}>Add</button>
                <button className="cancel-btn"onClick={onCancelClick}>Cancel</button>
            </div>
        </form>
    )
}