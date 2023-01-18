import { makeAutoObservable} from "mobx";

export default class DataStore {
    words = [];
    isLoaded = false

    isLoading = false;
    error = false;
    reEng = new RegExp(/^[A-Za-z&-\s]+$/);
    reRu = new RegExp(/^[А-Яа-яЁё&-\s]+$/);
    isModalActive = false;

    constructor() {
        makeAutoObservable(this);
    }

    getData =() => {
    this.isLoading = true
    if (this.isLoaded) {
        return;
    }
    fetch('/api/words')
        .then((response) => {
            if (response.ok) {   
            return response.json()
            } else {
            throw new Error('Something went wrong ...');
        }})
        .then((response) => {
            this.words(response)
            this.isLoaded = true
            this.isLoading = false
        })
        .catch((e) => {
            this.error= e
            this.isLoading = false
        })
}
//Апдейт слова
updateData(inputText) {
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
    .then (() => { this.getData() })
    .catch((e) => {
        this.error = e
        this.isLoading = false})
}

    //Удаление слова
deleteWord(inputText) {
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
    .then (() => { this.getData()})
    .catch((e) => {
        this.error = e
        this.isLoading = false})
    }

  //добавление слова
addWord(newWord) {
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
    .then (() => { this.getData()})
    .catch((e) => {
        this.error = e
        this.isLoading = false})
}
}