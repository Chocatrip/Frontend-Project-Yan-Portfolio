import React from 'react';
import './Prensa2.css'; 
import pressImage1 from '../img/prensa1.png';
import pressImage2 from '../img/img_personal_3.png';
import pressImage3 from '../img/prensa5.png';
import pressImage4 from '../img/prensa4.png';

function Prensa2() {
    return (
        <div className="Prensa2">

            <div className="second-half">
                <div className="image-container">
                    <h2>Prensa Udara: "Dúo ql"</h2>
                    <img className="img-top-prensa img-1-prensa2" src={pressImage3} alt="Image 3" />
                    <h2>Sesionista en disco de "CAF"</h2>
                    <img className="img-2-prensa2" src={pressImage4} alt="Image 4" />
                </div>
            </div>
            <div className="first-half">
                <div className="image-container">
                <h2>PianoDay Chile 2023"</h2>
                    <img className="img-top-prensa img-3-prensa2" src={pressImage1} alt="Image 1" />
                    <img className="img-bottom-prensa img-4-prensa2" src={pressImage2} alt="Image 2" />
                </div>
            </div>



        </div>
    );
}

export default Prensa2;
