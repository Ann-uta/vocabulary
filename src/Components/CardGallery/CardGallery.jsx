import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import arrow from './arrow.png';
import Loading from '../Loading/Loading';
import { inject, observer } from 'mobx-react';

export function CardGallery(words){
let index = 0;

const [currentIndex, setIndex] = useState(index);

function onPrevClick() { 
  setIndex (currentIndex-1);
}
function onNextClick() {
  setIndex (currentIndex+1);
}
let count = currentIndex+1;

const [learned, setLearned] = useState([]);

function addLearned(){
  const id = words[currentIndex].id
  if (!learned.includes(id)){
  setLearned([...learned, id]);
}}

    return (      
      <div className='gallery_wrap'>
        <h1>Game</h1>
        {!words.length ? <Loading/> :
        (<div className='gallery'>
            <div className="slider"><div className='slider__button'>
                {count !== 1 &&  <img  onClick={onPrevClick} src={arrow} alt="left" />}</div>
                <Card {...words[currentIndex]} addLearned={addLearned}                  
                />           
                <div className='slider__button slider__button_right'>
                {count !== words.length && <img onClick={onNextClick} src={arrow} alt="right" />} </div>
            </div>
            <div className='slider__count'>{count}/{words.length}</div>
            <span>Изучено слов: {learned.length}</span>
        </div>)}
          </div>
        )        
    }
    export default inject (({data}) => {
      const {words, getData} = data;
      useEffect(() => {
        getData()
    }, [])
      return {
          words,
          getData
      };
  })(observer(CardGallery));