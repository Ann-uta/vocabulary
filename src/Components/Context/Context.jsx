import React, { useState, useEffect } from "react";
export const DataContext = React.createContext();

export const DataContextProvider=({children})=>{
const reEng = new RegExp(/^[A-Za-z&-\s]+$/);
const reRu = new RegExp(/^[А-Яа-яЁё&-\s]+$/);

const [data, setData] = useState([])

//получаем данные с сервера
const getData =() => {
  fetch('/api/words')
        .then((response) => {
          if (response.ok) {   // Проверяем что код ответа 200
            return response.json()
          } else {
            throw new Error('Something went wrong ...');
      }})
        .then((response) => {setData(response)})
        
}

//изменяем слово на сервере
const editData = (data) => {
  fetch (`/api/${data.id}/update`, { //http://itgirlschool.justmakeit.ru
    method: 'POST',
    body: JSON.stringify(data),
    }).then(()=>{
      getData()
    })
}

useEffect(() => {
  getData()
}, [])
//==
/*const [currentIndex, setIndex] = useState(0);
const id = data[currentIndex].id
const [learned, setLearned] = useState([]);

function addLearned(){
  if (!learned.includes(id)){
  setLearned([...learned, id]);
}}*/
//==
const values = {data, setData, getData, reEng, reRu, editData}//addLearned, learned, currentIndex, setIndex
if(!data){
    return;
}
return (
    <DataContext.Provider value={values}>
        {children}
    </DataContext.Provider>
)

}