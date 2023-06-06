import React from 'react';
import './Teacher.css';
import teacherImage1 from '../img/img_teacher_1.png';

function Teacher() {
    return (
        <div className="Teacher">
                        <div className="second-half">
                <div className="text-container">
                    <h2>Profesora de Violín</h2>
                    <p>Inició su carrera docente en 2010 como monitora de violín en el colegio Gral. Eleuterio Ramírez Molina en La Reina.</p>

<p>En 2011, se convirtió en profesora de violín en la Orquesta Infantil de Alhué y la Orquesta Sinfónica de la Corporación Municipal de Melipilla. Luego, entre 2012 y 2013, se unió a la Orquesta Infantil del Colegio Rosalía Pescio en Peñaflor.</p>


                </div>
            </div>
            <div className="first-half">
                <div className="image-container">
                    <img src={teacherImage1} alt="Image 1" />
                </div>
            </div>


        </div>
    );
}

export default Teacher;
