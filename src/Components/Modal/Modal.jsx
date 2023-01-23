import React from "react";
import { useEffect, useContext } from "react";
import { DataContext } from '../Context/Context';

import "./Modal.css"

const Modal = ({ children}) => {
    
    const { data, setData, modalActive, setModalActive } = useContext(DataContext);
    
    useEffect(() => {
        setModalActive(false)
    }, [data])
    
    return (
        <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
            <div className={modalActive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;