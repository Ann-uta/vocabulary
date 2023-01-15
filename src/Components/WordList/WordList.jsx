import '../../Styles/WordList.css';
import TableHead from '../TableHead/TableHead';
import TableRow from '../TableRow/TableRow';
import { useContext } from 'react';
import { DataContext } from '../Context/Context';
import NewWord from '../NewWord/NewWord';
import Modal from '../Modal/Modal';

export default function WordList () {    
    const { data, setModalActive } = useContext(DataContext);
    
/*if(!data){
    return;
}*/

    return (        
        <div className='table-wrap' id='up'>
            <table className='table'>
                <TableHead/>                
                <tbody>                    
                {
                data.map((word) =>
                <TableRow
                key={word.id}
                id={word.id}
                english={word.english}
                transcription={word.transcription}
                russian={word.russian}
                tags={word.tags} />                     
                )}                
                </tbody>
            </table>
            <button className="add-btn" onClick={() => setModalActive(true)}>Add new word</button>
            <Modal  ><NewWord /></Modal>
        </div>
        
    )
}