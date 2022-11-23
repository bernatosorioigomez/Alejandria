
import { useEffect, useRef } from 'react';
import './Carrousel.css'

const Carrousel = ({title='Carrousel Title'}) => {

    let cardsToShow = 8;
    const refPrev = useRef(null);
    const refNext = useRef(null);
    const refTrack = useRef(null);


    const calculateCardsToShow = () => {
        if (window.innerWidth > 1350){
            cardsToShow = 6
        }
        else if(700 < window.innerWidth && window.innerWidth < 1349){
            cardsToShow = 6
        }

        else{
            cardsToShow = 2
        }
        return cardsToShow
        
    }

    useEffect(() => {
        
        cardsToShow = calculateCardsToShow()

        // const prev = document.querySelector('.prev');
        console.log(refPrev.current)
        // const next = document.querySelector('.next');

        // const track = document.querySelector('.track');

        let carouselWidth = document.querySelector('.carousel-container').offsetWidth;
        

        let cardWidth = (carouselWidth-((cardsToShow+1)*15))/cardsToShow;

        let cards = document.querySelectorAll('.card-container')
        cards.forEach( (card) => {
            card.style.width = `${cardWidth}px`;
        })

        window.addEventListener('resize', () => {
            cardsToShow = calculateCardsToShow()
            carouselWidth = document.querySelector('.carousel-container').offsetWidth;
            cardWidth = (carouselWidth-((cardsToShow+1)*15))/cardsToShow;
            cards = document.querySelectorAll('.card-container')
            cards.forEach( (card) => {
                card.style.width = `${cardWidth}px`;
            })
            index = 0;
            refTrack.current.style.transform = `translateX(-${0}px)`;
            refPrev.current.classList.remove('show');
            refNext.current.classList.remove('hide');
        })

        

        let index = 0;

        refNext.current.addEventListener('click', () => {
            index++;
            refPrev.current.classList.add('show'); //+15px? 
            refTrack.current.style.transform = `translateX(-${(index * (carouselWidth-15))}px)`;
            //with regex
            //const trackTranslate = track.style.transform.match(/-+[0-9]+/)[0]
            if (refTrack.current.offsetWidth - (index * (carouselWidth-15)) < carouselWidth){
                refNext.current.classList.add('hide');
            }
        } )

        refPrev.current.addEventListener('click', () => {
            index--;
            refNext.current.classList.remove('hide');
            if (index === 0) {
                refPrev.current.classList.remove('show');
            }
            refTrack.current.style.transform = `translateX(-${index * (carouselWidth - 15)}px)`;
        } )

    })
    

    return ( 
        <div className='main-carousel-container'>   
            <div className="carousel-title">
                {title}
            </div>
            <div className="carousel-container">       
                <div className="carousel-inner">
                    <div className="track" ref={refTrack}>


                        <div className="card-container">
                            <div className="card">
                                <img className="card-img" src='https://imagessl8.casadellibro.com/a/l/t7/38/9788498726138.jpg'>
                                    
                                </img>
                                <div className="info">
                                    <div className="card-title">
                                        El Imperio Final
                                    </div>
                                    <div className="card-author">
                                        Brandon Sanderson
                                    </div>
                                    <div className="card-type">
                                        Hardback
                                    </div>
                                    <div className="card-price">
                                        <div className="actual-price">
                                            20,80 $
                                        </div>
                                        <div className="last-price">
                                            21,90 $
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>


                        <div className="card-container">
                            <div className="card">
                                <img className="card-img" src='https://m.media-amazon.com/images/I/81SqsLaPrEL.jpg'>
                                    
                                </img>
                                <div className="info">
                                    <div className="card-title">
                                        Aleación de Ley
                                    </div>
                                    <div className="card-author">
                                        Brandon Sanderson
                                    </div>
                                    <div className="card-type">
                                        Paperback
                                    </div>
                                    <div className="card-price">
                                        <div className="actual-price">
                                            20,80 $
                                        </div>
                                        <div className="last-price">
                                            21,90 $
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <img className="card-img" src='https://imagessl8.casadellibro.com/a/l/t7/38/9788498726138.jpg'>
                                    
                                </img>
                                <div className="info">
                                    <div className="card-title">
                                        El Imperio Final
                                    </div>
                                    <div className="card-author">
                                        Brandon Sanderson
                                    </div>
                                    <div className="card-type">
                                        Hardback
                                    </div>
                                    <div className="card-price">
                                        <div className="actual-price">
                                            20,80 $
                                        </div>
                                        <div className="last-price">
                                            21,90 $
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>


                        <div className="card-container">
                            <div className="card">
                                <img className="card-img" src='https://m.media-amazon.com/images/I/81SqsLaPrEL.jpg'>
                                    
                                </img>
                                <div className="info">
                                    <div className="card-title">
                                        Aleación de Ley
                                    </div>
                                    <div className="card-author">
                                        Brandon Sanderson
                                    </div>
                                    <div className="card-type">
                                        Paperback
                                    </div>
                                    <div className="card-price">
                                        <div className="actual-price">
                                            20,80 $
                                        </div>
                                        <div className="last-price">
                                            21,90 $
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>


                        <div className="card-container">
                            <div className="card">
                                <img className="card-img" src='https://imagessl8.casadellibro.com/a/l/t7/38/9788498726138.jpg'>
                                    
                                </img>
                                <div className="info">
                                    <div className="card-title">
                                        El Imperio Final
                                    </div>
                                    <div className="card-author">
                                        Brandon Sanderson
                                    </div>
                                    <div className="card-type">
                                        Hardback
                                    </div>
                                    <div className="card-price">
                                        <div className="actual-price">
                                            20,80 $
                                        </div>
                                        <div className="last-price">
                                            21,90 $
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>


                        <div className="card-container">
                            <div className="card">
                                <img className="card-img" src='https://m.media-amazon.com/images/I/81SqsLaPrEL.jpg'>
                                    
                                </img>
                                <div className="info">
                                    <div className="card-title">
                                        Aleación de Ley
                                    </div>
                                    <div className="card-author">
                                        Brandon Sanderson
                                    </div>
                                    <div className="card-type">
                                        Paperback
                                    </div>
                                    <div className="card-price">
                                        <div className="actual-price">
                                            20,80 $
                                        </div>
                                        <div className="last-price">
                                            21,90 $
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <img className="card-img" src='https://imagessl8.casadellibro.com/a/l/t7/38/9788498726138.jpg'>
                                    
                                </img>
                                <div className="info">
                                    <div className="card-title">
                                        El Imperio Final
                                    </div>
                                    <div className="card-author">
                                        Brandon Sanderson
                                    </div>
                                    <div className="card-type">
                                        Hardback
                                    </div>
                                    <div className="card-price">
                                        <div className="actual-price">
                                            20,80 $
                                        </div>
                                        <div className="last-price">
                                            21,90 $
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>


                        <div className="card-container">
                            <div className="card">
                                <img className="card-img" src='https://m.media-amazon.com/images/I/81SqsLaPrEL.jpg'>
                                    
                                </img>
                                <div className="info">
                                    <div className="card-title">
                                        Aleación de Ley
                                    </div>
                                    <div className="card-author">
                                        Brandon Sanderson
                                    </div>
                                    <div className="card-type">
                                        Paperback
                                    </div>
                                    <div className="card-price">
                                        <div className="actual-price">
                                            20,80 $
                                        </div>
                                        <div className="last-price">
                                            21,90 $
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>

                        

                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    3
                                </div>
                                <div className="info">
                                    Title 3
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <img className="card-img" src='https://m.media-amazon.com/images/I/81SqsLaPrEL.jpg'>
                                    
                                </img>
                                <div className="info">
                                    <div className="card-title">
                                        Aleación de Ley
                                    </div>
                                    <div className="card-author">
                                        Brandon Sanderson
                                    </div>
                                    <div className="card-type">
                                        Paperback
                                    </div>
                                    <div className="card-price">
                                        <div className="actual-price">
                                            20,80 $
                                        </div>
                                        <div className="last-price">
                                            21,90 $
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>


                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    5
                                </div>
                                <div className="info">
                                    Title 5
                                </div>
                                
                            </div>
                        </div>


                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    6
                                </div>
                                <div className="info">
                                    Title 6
                                </div>
                                
                            </div>
                        </div>


                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    7
                                </div>
                                <div className="info">
                                    Title 7
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    8
                                </div>
                                <div className="info">
                                    Title 8
                                </div>
                                
                            </div>
                        </div>


                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    9
                                </div>
                                <div className="info">
                                    Title 9
                                </div>
                                
                            </div>
                        </div>


                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    10
                                </div>
                                <div className="info">
                                    Title 10
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    11
                                </div>
                                <div className="info">
                                    Title 11
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    12
                                </div>
                                <div className="info">
                                    Title 12
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    13
                                </div>
                                <div className="info">
                                    Title 13
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    14
                                </div>
                                <div className="info">
                                    Title 14
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    15
                                </div>
                                <div className="info">
                                    Title 15
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    16
                                </div>
                                <div className="info">
                                    Title 16
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    17
                                </div>
                                <div className="info">
                                    Title 17
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    18
                                </div>
                                <div className="info">
                                    Title 18
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    19
                                </div>
                                <div className="info">
                                    Title 19
                                </div>
                                
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="card">
                                <div className="card-img">
                                    20
                                </div>
                                <div className="info">
                                    Title 20
                                </div>
                                
                            </div>
                        </div>

                        

                        
                    </div>
                </div>
            

                <div className="carousel-nav">
                    <button className="prev" ref={refPrev}> 
                        <i className='material-icons'>
                            keyboard_arrow_left
                        </i> 
                    </button>
                    <button className="next" ref={refNext}> 
                        <i className='material-icons'>
                            keyboard_arrow_right
                        </i>  
                    </button>
                </div>

            </div>

        </div>
        
     );
}
 
export default Carrousel;