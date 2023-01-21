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
    getData = async () => {
        try {
            if (this.isLoaded && this.isLoading) {
            return;
            }    
            this.isLoading = true;
            const response = await fetch('/api/words');
            this.isLoading = false;    
            if (!response.ok) {
                throw new Error(`Something went wrong: ${response.status}`);
            }    
            const data = await response.json();    
            runInAction(() => {
                this.words = data;
                this.isLoaded = true});
            } catch (e) {
            this.error = true;
            this.isLoading = false;
            throw e;
        }
    };
//Апдейт слова
    updateData = async (inputText) => {
        try {this.isLoading = true;
            const response = await fetch(`/api/words/${inputText.id}/update`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
            body: JSON.stringify(inputText),
            })
            if (response.ok) {
            return response.json();
            } 
            const data = await response.json();
            this.words = data;
            this.isLoading = false;
        } catch (e) {
            this.error = true;
            this.isLoading = false;
            throw e;
        }
}

    //Удаление слова
deleteWord = async (inputText) => {
    try {this.isLoading = true;
        const response = fetch(`/api/words/${inputText.id}/delete`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
        })        
        this.isLoaded = true;
        this.isLoading = false;
    } catch (e) {
        this.error = e
        this.isLoading = false;
        throw e;
    }
}

  //добавление слова
    addWord = async (newWord) => {
        try { this.isLoading = true;
        const response = await fetch (`/api/words/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
        body: JSON.stringify(newWord),
        })
        if (response.ok) {
                return response.json();
            }
        this.words.push(newWord);  
        this.isLoading = false;
        } catch (e) {
            this.error = true;
            this.isLoading = false;
            throw e;
            }
        }
}