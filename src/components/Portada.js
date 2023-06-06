import React from 'react';
import './Portada.css';
import portadaImage from '../img/img_personal_4.png';

const Portada = () => {
    return (
        <div className="Portada">
            <div className="first-half">
                <div className="portada-text-container">
                    <h1 className="nombre-violinista">Yanara</h1>
                    <h2 className="apellido-violinista">Quintana</h2>
                    <h2 className="portada-subtitle">Portafolio</h2>
                </div>
            </div>
            <div className="second-half">          
                <div className="image-container">
                    <img className="portada-image" src={portadaImage} alt="Portada" />
                </div>
            </div>
        </div>
    );
}

export default Portada;
