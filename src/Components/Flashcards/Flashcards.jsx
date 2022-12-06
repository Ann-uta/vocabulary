import Card from "../Card/Card";
import wordsData from "../../wordsData.json";


export default function Flachcards() {
    return (
        <div className='container'><h1 className='caption'>Flachcards</h1>
            <div className='card-wrap'>             
            {
                wordsData.map((word) =>
                <Card key={word.id} english={word.english}
                transcription={word.transcription}
                russian={word.russian}/>
            )}
            </div></div>)}
    