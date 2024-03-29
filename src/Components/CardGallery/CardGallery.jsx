import { useState, useContext } from 'react';
import Card from '../Card/Card';
import { DataContext } from '../Context/Context';
import arrow from './arrow.png';
import Loading from '../Loading/Loading';

export default function CardGallery(){
let index = 0;
const { data, setData } = useContext(DataContext) 

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
  const id = data[currentIndex].id
  if (!learned.includes(id)){
  setLearned([...learned, id]);
}}

    return (      
      <div className='gallery_wrap'>
        <h1>Game</h1>
        {!data.length ? <Loading/> :
        (<div className='gallery'>
            <div className="slider"><div className='slider__button'>
                {count !== 1 &&  <img  onClick={onPrevClick} src={arrow} alt="left" />}</div>
                <Card {...data[currentIndex]} addLearned={addLearned}                  
                />           
                <div className='slider__button slider__button_right'>
                {count !== data.length && <img onClick={onNextClick} src={arrow} alt="right" />} </div>
            </div>
            <div className='slider__count'>{count}/{data.length}</div>
            <span>Изучено слов: {learned.length}</span>
        </div>)}
          </div>
        )        
    }