import '../../Styles/WordList.css';
import TableHead from '../../Components/TableHead/TableHead';
import TableRow from '../../Components/TableRow/TableRow';
import Loading from '../../Components/Loading/Loading';
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
    const { words, getData } = data;

    useEffect(() => {
        getData()
    }, [])

    return {
        words,
        getData
    };
  })(observer(WordList));
