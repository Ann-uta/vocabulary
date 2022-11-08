import DeleteButton from '../Button/DeleteButton';
import SaveButton from '../Button/SaveButton';
//import CancelButton from '../Button/CancelButton';
//import EditButton from '../Button/EditButton';
import { useState } from 'react';

export default function TableRow(props) {
    const {
        english,
        transcription,
        russian,
        tags
    } = props
    const [isEdit, setIsEdit] = useState(false);
    const [inputText, setInputText] = useState (props)    

    function onEditClick() {
    setIsEdit(!isEdit)
    }
    function onCancelClick() {
        setInputText(props)
        setIsEdit(!isEdit)
    }

    function changeInputText(event) {
        setInputText({...inputText,
            [event.target.name]:event.target.value
    });
    }
    
    return (
        <tr className='row'>
        {isEdit
        ? <>
            <td><input onChange={changeInputText} type="text" value={inputText.english} name={'english'}/></td>
            <td><input onChange={changeInputText} type="text" value={inputText.transcription} name={'transcription'}/></td>
            <td><input onChange={changeInputText} type="text" value={inputText.russian} name={'russian'}/></td>
            <td><input onChange={changeInputText} type="text" value={inputText.tags} name={'tags'} /></td>
            <td><SaveButton/>
            <button className="cancel-btn" onClick={onCancelClick}>Cancel</button></td></>
        : <>
            <td>{english}</td>
            <td>{transcription}</td>
            <td>{russian}</td>
            <td>{tags}</td>
            <td><button className="edit-btn" onClick={onEditClick}>Edit</button>
            <DeleteButton/></td>
        </>
        }</tr>     
                
    )
}