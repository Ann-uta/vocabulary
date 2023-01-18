import '../../Styles/WordList.css';
import TableHead from '../TableHead/TableHead';
import TableRow from '../TableRow/TableRow';
import Loading from '../Loading/Loading';
import React, { useEffect } from 'react';
import { observer, inject } from "mobx-react";

export function WordList ({ words }){   
   
    return (        
        <div className='table-wrap' id='up'>
            {!words.length ? <Loading/> :   
            <table className='table'>
                <TableHead/>  
                <tbody>                    
                {
                words.map((word) =>
                <TableRow
                key={word.id}
                id={word.id}
                english={word.english}
                transcription={word.transcription}
                russian={word.russian}
                tags={word.tags} />                     
                )}                
                </tbody>
            </table>}
            
        </div>
        
    )
};

export default inject(({ data }) => {
    const { words, getData, isLoaded } = data;

    useEffect(() => {
        getData()
    }, [])

    return {
        words,
        getData,
        isLoaded
    };
  })(observer(WordList));
