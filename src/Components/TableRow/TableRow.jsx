import { useState } from 'react';

export default function TableRow(props) {
   /* const {
        english,
        transcription,
        russian,
        tags
    } = props*/
    const [isEdit, setIsEdit] = useState(false);
    const [inputText, setInputText] = useState (props)    

    function onEditClick() {
    setIsEdit(true)
    }
    function onCancelClick() {
        setInputText(props)
        setIsEdit(false)
    }

    function changeInputText(event) {
        setInputText({...inputText,
            [event.target.name]:event.target.value
    });
    }
    function onSaveClick(){
        setIsEdit(false)
    }
    
    return (
        <tr className='row'>
        {isEdit
        ? <>
            <td><input onChange={changeInputText} type="text" value={inputText.english} name={'english'}/></td>
            <td><input onChange={changeInputText} type="text" value={inputText.transcription} name={'transcription'}/></td>
            <td><input onChange={changeInputText} type="text" value={inputText.russian} name={'russian'}/></td>
            <td><input onChange={changeInputText} type="text" value={inputText.tags} name={'tags'} /></td>
            <td><button className='save-btn' onClick={onSaveClick}>Save</button>
            <button className="cancel-btn" onClick={onCancelClick}>Cancel</button></td></>
        : <>
            <td>{inputText.english}</td>
            <td>{inputText.transcription}</td>
            <td>{inputText.russian}</td>
            <td>{inputText.tags}</td>
            <td><button className="edit-btn" onClick={onEditClick}>Edit</button>
            <button className='delete-btn'>Delete</button></td>
        </>
        }</tr>     
                
    )
}