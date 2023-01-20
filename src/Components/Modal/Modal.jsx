import React from "react";
import { useEffect } from "react";

import "./Modal.css"
import { observer, inject } from "mobx-react";
import NewWord from "../NewWord/NewWord";

export function Modal ({ words, active, setActive, addWord, reRu, reEng}) {
   
    /*useEffect(() => {
        setActive(false)
    }, [words])*/
    
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <NewWord setActive={setActive} addWord={addWord} reEng={reEng} reRu={reRu}/>
            </div>
        </div>
    )
}

export default inject(({ data }) => {
    const { words, addWord, reRu, reEng } = data;
  
    return {
        words,
        addWord,
        reRu,
        reEng
    };
  })(observer(Modal));