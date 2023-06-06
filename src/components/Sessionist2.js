import React from 'react';
import './Sessionist2.css';
import sessionistImage1 from '../img/img_lanz_caf.jpg';
import sessionistImage2 from '../img/img_sesionista_2.png';

function Sessionist() {
    return (
        <div className="Sessionist2">
                        <div className="second-half">
                <div className="image-container">
                    <img src={sessionistImage1} alt="Image 1" />
                    <img src={sessionistImage2} alt="Image 1" />
                </div>
            </div>
            <div className="first-half">
                <div className="text-container">

                <ul>
                    <li>Músico de sesión (2013-2022)</li>
                    <li>Violinista en el colectivo artístico "Fantasía Jazz del Doctor Fausto" (2018)</li>
                    <li>Violinista en la banda Ajimsa (2018-2019)</li>
                    <li>Violinista en la banda Doctor Vitrola (2019)</li>
                    <li>Violinista en el colectivo activista "Cultura Planetaria" (2019)</li>
                    <li>Violinista en la banda "Dúo QL" (2019-2022)</li>
                    <li>Violinista en la banda Carrumba (2019-2022)</li>
                    <li>Violinista en el colectivo "Estado de Excepción" (2020-2021)</li>
                    <li>Violinista en la banda "La Fiesta del Diablo" (2021-2022)</li>
                    <li>Violinista en la banda "Juglares de Kuneta" (2022-2023)</li>
                </ul>

                </div>
            </div>



        </div>
    );
}

export default Sessionist;
