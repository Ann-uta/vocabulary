import '../../Styles/WordList.css';
import TableHead from '../TableHead/TableHead';
import TableRow from '../TableRow/TableRow';
import { useContext, useState } from 'react';
import { DataContext } from '../Context/Context';
import NewWord from '../NewWord/NewWord';
import Modal from '../Modal/Modal';
//import Loading from '../Loading/Loading';

export default function WordList () {    
    const { data, setData } = useContext(DataContext);
    const [modalActive, setModalActive] = useState(false)
    function onAddClick(){

}

if(!data){
    return;
}
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
            <Modal active={modalActive} setActive={setModalActive}><NewWord /></Modal>
        </div>
        
    )
}