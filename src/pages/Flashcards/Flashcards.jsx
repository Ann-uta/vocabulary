import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import { useEffect } from "react";
import { inject, observer } from 'mobx-react';


export function Flachcards({words, error}) {    
    if(error){
        return <Error/>;
       }
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
    const {words, getData, error} = data;
    useEffect(() => {
        getData()
    }, [])
    return {
        words,
        getData,
        error
    };
})(observer(Flachcards));