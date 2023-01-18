import React from "react";
import { useEffect } from "react";

import "./Modal.css"
import { observer, inject } from "mobx-react";

export const Modal = ({ children, words, isModalActive}) => {
   
    useEffect(() => {
        isModalActive = false
    }, [words])
    
    return (
        <div className={isModalActive ? "modal active" : "modal"} onClick={() => isModalActive = false}>
            <div className={isModalActive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default inject(({ data }) => {
    const { words, isModalActive} = data;
  
    return {
        words,
        isModalActive
    };
  })(observer(Modal));