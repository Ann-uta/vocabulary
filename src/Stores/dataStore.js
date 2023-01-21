import { makeAutoObservable, runInAction} from "mobx";

const mockApiWords = 'https://63cbe76c5c6f2e1d84bdd725.mockapi.io/api/words/';
export default class DataStore {
    words = [];
    isLoaded = false
    isLoading = false;

    error = false;
    reEng = new RegExp(/^[A-Za-z&-\s]+$/);
    reRu = new RegExp(/^[А-Яа-яЁё&-\s]+$/);

    const

    constructor() {
        makeAutoObservable(this);
    }

    getData = () => {
        this.isLoading = true;
        fetch(`${mockApiWords}`)
        .then((result) => {
            if (result.ok) {
                return result.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then((words) => {
            runInAction(() => {
                this.words = words;
                this.isLoaded = true;
                this.isLoading = false;
            });
        }).catch(error => {
            this.isLoaded = true;
            this.isLoading = false;
            this.error = error;
        });
    }
//Апдейт слова
    updateData = (inputText) => {
        fetch(`${mockApiWords}${inputText.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(inputText)
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(() => this.getData())
        .catch(error => {
            this.error = error;
        });
    }
    //Удаление слова
    deleteWord = (inputText) => {
        this.isLoading = true;
        fetch(`${mockApiWords}${inputText.id}`, {
            method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                    throw new Error('Something went wrong ...');
            }
        })
        .then(() => {
            this.getData();
            this.isLoading = false;
        })
        .catch(error => {
            this.isLoaded = true;
            this.isLoading = false;
            this.error = error;
        });
    }

  //добавление слова
    addWord = (newWord) => {        
        this.isLoading = true;
        fetch(`${mockApiWords}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newWord)
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(() => {
            this.getData();            
            this.isLoading = false;
        })
        .catch(error => {            
            this.isLoading = false;
            this.error = error;
        });
    }
}