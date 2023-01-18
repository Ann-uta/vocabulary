import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import { inject, observer } from 'mobx-react';


export function Flachcards({words}) {    

    return (
        <div className='container'><h1 className='caption'>Flachcards</h1>
            {!words.length ? <Loading/> :
            <div className='card-wrap'>                         
            {
                words.map((word) =>
                <Card key={word.id} english={word.english}
                transcription={word.transcription}
                russian={word.russian}/>
            )}
            </div>}
        </div>)
}    
export default inject (({data}) => {
    const {words} = data;
    
    return {
        words
    };
})(observer(Flachcards));