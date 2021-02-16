import React from 'react';

const Preloader = () => {
    return(
    <div className="preloader">
        <div className="loader">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
        <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo"></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
        </filter>
        </defs>
        </svg>
    </div>
    );
};

export default Preloader;