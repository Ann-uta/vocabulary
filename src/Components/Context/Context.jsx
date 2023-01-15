import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

export const DataContext = React.createContext();


export const DataContextProvider=({children})=>{
const reEng = new RegExp(/^[A-Za-z&-\s]+$/);
const reRu = new RegExp(/^[А-Яа-яЁё&-\s]+$/);

const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(false)


const [modalActive, setModalActive] = useState(false)

//получаем данные с сервера
const getData =() => {
  fetch('/api/wordss')
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
        .catch(setIsLoading(false))
}// 

useEffect(() => {
  setIsLoading(true)
  //getData()
  setTimeout(() => getData(), 3000)
}, [])

const values = {data, setData, getData, reEng, reRu, modalActive, setModalActive}
if(!data){
    return;
}
if (isLoading) return <Loading/>
if (error) return <Error/>

return (
    <DataContext.Provider value={values}>
        {children}
    </DataContext.Provider>
)

}