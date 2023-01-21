import { makeAutoObservable, runInAction} from "mobx";

export default class DataStore {
    words = [];
    isLoaded = false
    isLoading = false;

    error = false;
    reEng = new RegExp(/^[A-Za-z&-\s]+$/);
    reRu = new RegExp(/^[А-Яа-яЁё&-\s]+$/);

    constructor() {
        makeAutoObservable(this);
    }

    getData = () => {
        this.isLoading = true;
        fetch('/api/words')
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
        fetch(`/api/words/${inputText.id}/update`, {
            method: 'POST',
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
        fetch(`/api/words/${inputText.id}/delete`, {
            method: 'POST',
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
        fetch(`/api/words/add`, {
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