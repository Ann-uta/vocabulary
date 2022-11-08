//import { useState } from 'react';
//import Card from '../Card/Card';
//import wordsData from '../../wordsData.json';
import arrow from './arrow.png'

export default function CardGallery(props){
let {index = 0,
    prevCard,
    nextCard,
    //words,
    total,
} = props;
let count = index+1;

//---код без children--
  /*const [currentIndex, setIndex] = useState(index); 

  function prevCard() {
    setIndex(currentIndex-1);      
      
      // if (nextIndex > wordsData.length){
      //   index = 0;
      // }
      
    }
  function nextCard(){
    setIndex(currentIndex+1)
//     if (nextIndex < 0) {
//       index = wordsData.length - 1;
//    }
 }*/
 //---
    return (
        <div className='gallery'>
            <div className="slider"><div className='slider__button'>
                {count !== 1 &&  <img onClick={prevCard} src={arrow} alt="left" />}</div>                    
                {props.children} <div className='slider__button slider__button_right'>
                {count !== total && <img onClick={nextCard} src={arrow} alt="right" />} </div>
            </div>
            <div className='slider__count'>{count}/{total}</div>
        </div>
        )        
}


/*<Card
            english={words[index].english}
            transcription={words[index].transcription}
            russian={words[index].russian}
        />*/

        /*{index=total
                    ? null 
                    : <div className='slider__button slider__button_right'><img onClick={nextCard} src={arrow} alt="right" /></div>} */