import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

export const DataContext = React.createContext();

export const DataContextProvider=({children})=>{
const reEng = new RegExp(/^[A-Za-z&-\s]+$/);
const reRu = new RegExp(/^[А-Яа-яЁё&-\s]+$/);

const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)

const [modalActive, setModalActive] = useState(false)

//получаем данные с сервера
const getData =() => {
  setIsLoading(true)
  fetch('/api/words')
        .then((response) => {
          if (response.ok) {   // Проверяем что код ответа 200
            return response.json()
          } else {
            throw new Error('Something went wrong ...');
      }})
        .then((response) => {
          setData(response)
          setIsLoading(false)
        })
        .catch((e) => {
          setError(e)
          setIsLoading(false)
      })
}// не получается выводить компонент Error

useEffect(() => {
  //setIsLoading(true) //для setTimeout
  getData()
  //setTimeout(() => getData(), 2000) //для проверки Loading
}, [])

//==
/*let index = 0;
const [currentIndex, setIndex] = useState(index);

function onPrevClick() { 
  setIndex (currentIndex-1);
}
function onNextClick() {
  setIndex (currentIndex+1);
}
//let count = currentIndex+1;

const id = data[currentIndex].id //?????? не видит id при перезагрузке страницы game
//const [learned, setLearned] = useState([]);*/

//==

const values = {data, setData, getData, reEng, reRu, modalActive, setModalActive, isLoading }//onPrevClick, onNextClick, id, currentIndex


if (isLoading) return <Loading/>
if (error) return <Error/>

if(!data){
    return;
}
return (
    <DataContext.Provider value={values}>
        {children}
    </DataContext.Provider>
)

}