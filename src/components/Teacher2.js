import React from 'react';
import './Teacher_2.css';
import teacherImage1 from '../img/img_teacher_2.png';

function Teacher() {
    return (
        <div className="Teacher2">
                        <div className="first-half">
                <div className="image-container">
                    <img src={teacherImage1} alt="Image 1" />
                </div>
            </div>
                        <div className="second-half">
                <div className="text-container">
                <p>Desde 2021, Yanara ha sido profesora de violín en la Escuela de Música de Huechuraba, y también en el taller de orquesta del Liceo 7 José Toribio Medina de Ñuñoa.</p>

                <p>De 2014 a 2020, Yanara ofreció clases particulares de violín y trabajó en la Academia Creartt como profesora de violín entre 2018 y 2020.</p>
<p>Su experiencia y enfoque pedagógico han demostrado ser valiosos en su trabajo docente.</p>

                </div>
            </div>



        </div>
    );
}

export default Teacher;
