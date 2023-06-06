import React from 'react';
import './Sessionist.css';
import sessionistImage1 from '../img/img_personal_1.jpg';
import sessionistImage2 from '../img/img_sesionista_1.jpg';

function Sessionist() {
    return (
        <div className="Sessionist">
            <div className="first-half">
                <div className="text-container">
                    <h2>Sesionista</h2>
<p>Comenzó su carrera como músico de sesión en 2013, acumulando una vasta experiencia en una variedad de estilos y géneros musicales.</p>
<p>Ha tenido la oportunidad de grabar con importantes bandas chilenas, como "Electrodomésticos" y "cómo asesinar a Felipes", demostrando su habilidad para colaborar con una amplia variedad de artistas.</p>
<p> Este trabajo ha llevado a Yanara a tocar en importantes escenarios y discos ganadores de premios Pulsar.</p>
                </div>
            </div>

            <div className="second-half">
                <div className="image-container">
                    <img src={sessionistImage1} alt="Image 1" />
                    <img src={sessionistImage2} alt="Image 2" />
                </div>
            </div>

        </div>
    );
}

export default Sessionist;
