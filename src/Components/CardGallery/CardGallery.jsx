import { useState } from 'react';
import Card from '../Card/Card';
import wordsData from '../../wordsData.json';
import arrow from './arrow.png';

export default function CardGallery(props){
let {index = 0,
   // total
  } = props;

const [currentIndex, setIndex] = useState(index);

function onPrevClick() { 
  setIndex (currentIndex-1);
}
function onNextClick() {
  setIndex (currentIndex+1);
}
let count = currentIndex+1;

const id = wordsData[currentIndex].id
const [learned, setLearned] = useState([]);

function addLearned(){
  if (!learned.includes(id)){
  setLearned([...learned, id]);
}}

    return (
      <div className='gallery_wrap'>
        <h1>Game</h1>
        <div className='gallery'>
            <div className="slider"><div className='slider__button'>
                {count !== 1 &&  <img  onClick={onPrevClick} src={arrow} alt="left" />}</div>
                <Card {...wordsData[currentIndex]} addLearned={addLearned}
                  /*english={wordsData[currentIndex].english}
                  transcription={wordsData[currentIndex].transcription}
                  russian={wordsData[currentIndex].russian}*/
                  
                />           
                <div className='slider__button slider__button_right'>
                {count !== wordsData.length && <img onClick={onNextClick} src={arrow} alt="right" />} </div>
            </div>
            <div className='slider__count'>{count}/{wordsData.length}</div>
            <span>Изучено слов: {learned.length}</span>
        </div></div>
        )        
    }