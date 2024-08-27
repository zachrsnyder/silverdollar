'use client'
import React, { useState } from 'react'

//essentially defining my own string: boolean dictionary
type clickedState = {
    [key: string]: boolean,
}

const ImageCarousel = () => {
    
    const [isClicked, setIsClicked] = useState<clickedState>({
        "buttons1": false,
        "buttons2": true,
        "buttons3": true,
    })

    const handleClicked = (buttonKey : string, nextImage : string) => {
        setIsClicked((prevState) => (
        {
            ...prevState,
            
            [buttonKey]: !prevState[buttonKey],
            [nextImage]: !prevState[nextImage]
        })
    

        )
    }

    return (
        <div className="carousel w-full h-screen bg-black">
            <div id="slide1" className="carousel-item relative w-full justify-center">
                <img
                src="/images/carousel1.jpg"
                className="object-cover  overflow-hidden" />
                <div className={`absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between`}>
                    <a href="#slide3" className={`btn btn-circle bg-opacity-15 border-transparent  ${isClicked['buttons1'] ? 'hidden' : ''}`} onClick={() => handleClicked('buttons1', 'buttons3')}>❮</a>
                    <a href="#slide2" className={`btn btn-circle bg-opacity-15 border-transparent ${isClicked['buttons1'] ? 'hidden' : ''}`} onClick={() => handleClicked('buttons1', 'buttons2')}>❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full justify-center">
                <img
                src="/images/carousel2.jpg"
                className="object-cover overflow-hidden" />
                <div className={`absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between`}>
                <a href="#slide1"  className={`btn btn-circle bg-opacity-15 border-transparent ${isClicked['buttons2'] ? 'hidden' : ''}`} onClick={() => handleClicked('buttons2', 'buttons1')}>❮</a>
                <a href="#slide3"  className={`btn btn-circle bg-opacity-15 border-transparent ${isClicked['buttons2'] ? 'hidden' : ''}`} onClick={() => handleClicked('buttons2', 'buttons3')}>❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full justify-center">
                <img
                src="/images/carousel3.jpg"
                className="object-cover overflow-hidden" />
                <div className={`absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between`}>
                <a href="#slide2" className={`btn btn-circle bg-opacity-15 border-transparent ${isClicked['buttons3'] ? 'hidden' : ''}`} onClick={() => handleClicked('buttons3', 'buttons2')}>❮</a>
                <a href="#slide1" className={`btn btn-circle bg-opacity-15 border-transparent ${isClicked['buttons3'] ? 'hidden' : ''}`} onClick={() => handleClicked('buttons3', 'buttons1')}>❯</a>
                </div>
            </div>
        </div>
    )
}

export default ImageCarousel