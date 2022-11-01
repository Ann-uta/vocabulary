//import './Buttons.css';
import { useState } from "react";

export default function EditButton() {
    const [isEdit, setIsEdit] = useState(false);

   function onEditClick() {
    setIsEdit(!isEdit)
   }
    return <button className="edit-btn" onClick={onEditClick}>Edit</button>;
}