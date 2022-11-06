import React from 'react'
import logito from '../../img/plantaCarro.jpg'
import logito2 from '../../img/Paisaje.jpg'
import './Carrousel.css'

const Carrousel = () => {
    return (
        <div id='carouselExample' className='carousel slide' data-ride='carousel'>
            <ol className='carousel-indicators'>
                <li data-target='#carouselExample' data-slide-to='0' className='active'></li>
                <li data-target='#carouselExample' data-slide-to='1' ></li>
                {/*                 <li data-target='#carouselExample' data-slide-to='2' ></li> */}
            </ol>
            <div className="carousel-inner">
                <div className='carousel-item active object'>
                    <img src={logito} className='d-block w-100 itemImg' />
                </div>
                <div className='carousel-item object'>
                    <img src={logito2} className='d-block w-100 itemImg' />
                </div>
            </div>
            <a href='#carouselExample' className='carousel-control-prev' role='button' data-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            </a>
            <a href='#carouselExample' className='carousel-control-next' role='button' data-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
            </a>
        </div>
    )
}

export default Carrousel;
