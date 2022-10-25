import EditButton from '../Button/EditButton';
import DeleteButton from '../Button/DeleteButton';
import SaveButton from '../Button/SaveButton';
import CancelButton from '../Button/CancelButton';

export default function TableRow(props) {
    return (
        <tr className='row'>
        {props.isEdit
        ? <>
            <td><input type="text" defaultValue={props.english} /></td>
            <td><input type="text" defaultValue={props.transcription} /></td>
            <td><input type="text" defaultValue={props.russian} /></td>
            <td><input type="text" defaultValue={props.tags} /></td>
            <td><SaveButton/><CancelButton/></td></>
        : <>
            <td>{props.english}</td>
            <td>{props.transcription}</td>
            <td>{props.russian}</td>
            <td>{props.tags}</td>
            <td><EditButton/><DeleteButton/></td>
        </>
        }</tr>     
                
    )
}
