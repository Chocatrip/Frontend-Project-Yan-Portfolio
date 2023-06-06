import React from 'react';
import './Student.css'; 
import studentImage1 from '../img/img_student_1.png';
import studentImage2 from '../img/img_student_4.png';
import studentImage3 from '../img/img_student_3.png';

function Student() {
    return (
        <div className="Student">
            <div className="first-half">
                <div className="text-container">
                    <h2>Estudiante</h2>
                    <div className="student-info">
                        <p>Yanara Quintana inició sus estudios de violín a los 13 años en la Orquesta de la comuna de Huechuraba, guiada por su primer maestro Felipe Hidalgo.</p>
                        <p>Ingresó al Conservatorio de la Universidad Mayor donde estudió con varios profesores destacados como Alexander Shitikov, Holly Huelskamp, Dorian Lamotte y Mónica Betancourt.</p>
                        <p>Continuó sus estudios superiores en la Universidad de Chile, obteniendo una licenciatura en Artes con mención en Interpretación musical en Violín.</p>
                        <p>En esta etapa, su formación fue dirigida por los profesores Rodrigo Pozo y Mónica Betancourt.</p>
                    </div>

                </div>
            </div>

            <div className="second-half">
                <div className="image-container">
                    <img src={studentImage2} alt="Image 2" />
                    <img src={studentImage3} alt="Image 3" />
                </div>
            </div>

        </div>
    );
}

export default Student;
