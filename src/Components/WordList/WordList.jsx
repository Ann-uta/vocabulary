import '../../Styles/WordList.css';
import wordsData from '../../wordsData.json';
import TableHead from '../TableHead/TableHead';
import TableRow from '../TableRow/TableRow';

export default function WordList () {
    return (
        <div className='table-wrap'>
            <table className='table'>
                <TableHead/>
                <tbody>
                {
                wordsData.map((word) =>
                <TableRow key={word.id}
                english={word.english}
                transcription={word.transcription}
                russian={word.russian}
                tags={word.tags}
                isEdit={word.isEdit}/>                       
                )}
                </tbody>
            </table>
        </div>
        
    )
}
/*isEdit
                    <InputTableRow english={word.english}
                    transcription={word.transcription}
                    russian={word.russian}
                    tags={word.tags}
                    isEdit={word.isEdit}/>
                    
                    <TableRow key={word.id}
                english={word.english}
                transcription={word.transcription}
                russian={word.russian}
                tags={word.tags}/>         */