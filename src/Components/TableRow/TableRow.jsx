import DeleteButton from '../Button/DeleteButton';
import SaveButton from '../Button/SaveButton';
//import CancelButton from '../Button/CancelButton';
//import EditButton from '../Button/EditButton';
import { useState } from 'react';

export default function TableRow(props) {
    const [isEdit, setIsEdit] = useState(false);
    const [isCancel, setIsCancel] = useState(false);

    function onEditClick() {
    setIsEdit(!isEdit)
    setIsCancel(!isCancel)
    }
    function onCancelClick() {
    setIsCancel(!isCancel)
    setIsEdit(!isEdit)
    }

    return (
        <tr className='row'>
        {isEdit && isCancel
        ? <>
            <td><input type="text" defaultValue={props.english} /></td>
            <td><input type="text" defaultValue={props.transcription} /></td>
            <td><input type="text" defaultValue={props.russian} /></td>
            <td><input type="text" defaultValue={props.tags} /></td>
            <td><SaveButton/>
            <button className="cancel-btn" onClick={onCancelClick}>Cancel</button></td></>
        : <>
            <td>{props.english}</td>
            <td>{props.transcription}</td>
            <td>{props.russian}</td>
            <td>{props.tags}</td>
            <td><button className="edit-btn" onClick={onEditClick}>Edit</button>
            <DeleteButton/></td>
        </>
        }</tr>     
                
    )
}
