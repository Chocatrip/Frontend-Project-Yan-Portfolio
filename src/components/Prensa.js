import React from 'react';
import './Prensa.css'; 
import pressImage1 from '../img/prensa6.png';
import pressImage2 from '../img/prensa2.png';
import pressImage3 from '../img/prensa3.png';
import pressImage4 from '../img/img_naturaleza.png';

function Prensa() {
    return (
        <div className="Prensa">

            <div className="first-half">
                <div className="image-container">
                <h2>Feria pulsar con "Electrodomésticos"</h2>
                    <img className="img-top-prensa" src={pressImage1} alt="Image 1" />

                    <img className="img-bottom-prensa" src={pressImage2} alt="Image 2" />
                </div>
            </div>

            <div className="second-half">
                <div className="image-container">
                <h2>Lanzamiento Naturaleza Muerta "CAF"</h2>
                    <img className="img-top-prensa" src={pressImage3} alt="Image 3" />
                    <img className='img-bottom-prensa' src={pressImage4} alt="Image 4" />
                </div>
            </div>

        </div>
    );
}

export default Prensa;
