import React from 'react';
import './Resena.css'; 
import resenaImage from '../img/img_personal_2.jpg';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PeopleIcon from '@material-ui/icons/People';

function Resena() {
  return (
    <div className="Resena">
      <div className="first-half">
        <div className="image-container">
          <img src={resenaImage} alt="Image 1" />
        </div>
      </div>

      <div className="second-half">
        <div className="text-container">
          <h2>Reseña</h2>
          <p>Yanara Quintana es una íntegra intérprete violinista, destacada en sus múltiples facetas como estudiante, profesora y sesionista.<br/><br/>Su dedicación a la música la ha llevado a involucrarse en una amplia gama de proyectos y colaboraciones.</p>

          <div className="list-section">
            <div className="list-item">
              <SchoolIcon className="list-icon"/>
              <p>Estudiante</p>
            </div>
            <div className="list-item">
              <MusicNoteIcon className="list-icon"/>
              <p>Profesora de Violín</p>
            </div>
            <div className="list-item">
              <PeopleIcon className="list-icon"/>
              <p>Sesionista</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Resena;
