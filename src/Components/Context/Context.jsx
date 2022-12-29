import React, { useState, useEffect } from "react";
const DataContext = React.createContext();

//function DataContextProvider(props) {
 // const [data, setData] = useState({});

  /*function loadData(){
    fetch('/api/words')
        .then((response) => {
          if (response.ok) {   //Проверяем что код ответа 200
            return response.json()
          } else {
            throw new Error('Something went wrong ...');
      }})
        .then((response) => setData({ data: response }))
    }     
    useEffect(() => {
      loadData()
    },[])

    if (!data){
      <h1>Loading...</h1>    
    }*/
   /* const [words, setData] = useState([])   //===

  useEffect(() =>{
    fetch('http://itgirlschool.justmakeit.ru/api/words')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, []);*/
  //===
  //if (error) {
  //  return <p>{error.message}</p>;
//}
  /*return (
    <DataContext.Provider value={ {data: data, loadData: loadData} }>
      {props.children}
    </DataContext.Provider>
  );
}*/

export { DataContext };