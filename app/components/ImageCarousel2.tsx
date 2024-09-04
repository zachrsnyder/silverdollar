import React from 'react'

const ImageCarousel2 = () => {
    return (
    <div className='flex relative h-96 '>    
        <div className='carousel w-full h-full bg-black relative'>
            <div id="item1" className="carousel-item relative w-full justify-center">
                <img
                src="/images/carousel1.jpg"
                className="object-cover overflow-hidden" /> 
            </div>
            <div id="item2" className="carousel-item relative w-full justify-center">
                <img
                src="/images/carousel2.jpg"
                className="object-cover overflow-hidden" />
            </div>
            <div id="item3" className="carousel-item relative w-full justify-center">
                <img
                src="/images/carousel3.jpg"
                className="object-cover overflow-hidden" />
            </div>
        </div>
        <div className="flex absolute bottom-2 w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs bg-opacity-50">1</a>
            <a href="#item2" className="btn btn-xs bg-opacity-50">2</a>
            <a href="#item3" className="btn btn-xs bg-opacity-50">3</a>
        </div>
    </div>
  )
}

export default ImageCarousel2