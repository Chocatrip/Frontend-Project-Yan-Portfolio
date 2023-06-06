import React from 'react';
import './Student2.css'; 
import artistImage1 from '../img/img_personal_1.jpg';
import artistImage2 from '../img/img_student_2.png';
import artistImage3 from '../img/img_pianoday.png';

function Student2() {
    return (
        <div className="Student2">

            <div className="second-half">
                <div className="image-container">
                    <img src={artistImage2} alt="Image 2" />
                </div>
            </div>

            <div className="first-half">
                <div className="text-container">
                    <div className="student-info">
                        <p>Ha sido beneficiaria de diversas becas, como la Beca OSEM (2008-2010) y la Beca Orquesta de Cámara Universidad Mayor (2011-2016). </p>
                        <p>Estas oportunidades le permitieron formar parte de ensambles de renombre, incluyendo la Orquesta Sinfónica Estudiantil Metropolitana (OSEM) y la Orquesta Cámara Universidad Mayor.</p>   
                        <p>Ha tenido la oportunidad de tocar en importantes escenarios a lo largo del país con la Fundación de Orquestas Juveniles e Infantiles de Chile.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Student2;
