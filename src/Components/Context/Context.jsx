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
}
//Апдейт слова
function updateData(inputText) {
  fetch(`/api/words/${inputText.id}/update`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(inputText),
    })
    .then((response)=>{
        if (response.ok) {
            return response.json();
        }else{
            throw new Error ('Something went wrong..')
        }
    })
    .then (() => { getData() })
    .catch((e) => {
      setError(e)
      setIsLoading(false)})
}

  //Удаление слова
function deleteWord(inputText) {
  fetch(`/api/words/${inputText.id}/delete`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
}).then((response)=>{
  if (response.ok) {
      return response.json();
  }else{
      throw new Error ('Something went wrong..')
  }
})
.then (() => { getData()})
.catch((e) => {
  setError(e)
  setIsLoading(false)})
}

//добавление слова
function addWord(newWord) {
  fetch (`/api/words/add`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(newWord),
    })
    .then((response)=>{
        if (response.ok) {
            return response.json();
        }else{
            throw new Error ('Something went wrong..')
        }
    })
    .then (() => { getData()})
    .catch((e) => {
      setError(e)
      setIsLoading(false)})
}

useEffect(() => {
  getData()
}, [])

const values = {data, setData, getData, reEng, reRu, modalActive, setModalActive, isLoading, updateData, deleteWord, addWord }

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