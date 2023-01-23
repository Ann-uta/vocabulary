import Card from "../Card/Card";
import { useContext } from 'react';
import { DataContext } from '../Context/Context';


export default function Flachcards() {    
const {data, setData}  = useContext(DataContext)

    return (
        <div className='container'><h1 className='caption'>Flachcards</h1>
            <div className='card-wrap'>             
            {
                data.map((word) =>
                <Card key={word.id} english={word.english}
                transcription={word.transcription}
                russian={word.russian}/>
            )}
            </div>
        </div>)
}    