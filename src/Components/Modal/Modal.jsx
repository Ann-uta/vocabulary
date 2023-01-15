import React from "react";
import { useEffect, useContext } from "react";
import { DataContext } from '../Context/Context';

import "./Modal.css"

const Modal = ({ active, setActive, children}) => {//
    
    const { data, setData } = useContext(DataContext);
    
    useEffect(() => {
        setActive(false)
    }, [data])
    
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;