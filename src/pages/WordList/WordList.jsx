import '../../Styles/WordList.css';
import TableHead from '../../Components/TableHead/TableHead';
import TableRow from '../../Components/TableRow/TableRow';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import React, { useEffect } from 'react';
import { observer, inject } from "mobx-react";

export function WordList ({ words, reEng, reRu, updateData, deleteWord, error }){  
   

   if(error){
    return <Error/>;
   }
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
                tags={word.tags}
                reEng={reEng}
                reRu={reRu}
                updateData={updateData}
                deleteWord={deleteWord}   />                  
                )}                
                </tbody>
            </table>}
            
        </div>
        
    )
};

export default inject(({ data }) => {
    const { words, getData, reEng, reRu, updateData, deleteWord, addWord, isModalActive, error } = data;

    useEffect(() => {
        getData();
    }, [])

    return {
        words,
        getData,
        reEng,
        reRu,
        updateData,
        deleteWord,
        addWord,
        isModalActive,
        error
    };
  })(observer(WordList));
