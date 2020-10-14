import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
    return (
            <div id="page-map">
                <aside>
                    <header>
                        <img src={mapMarkerImg} alt="Happy"/>

                        <h2>Escolha um orfonato no mapa</h2>
                        <p>Muitas Crianças estão esperando a sua visita</p>
                    </header>

                    <footer>
                        <strong>
                            São Paulo
                        </strong>
                        <span> São Paulo</span>
                    </footer>
                </aside>

            <div></div>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"> </FiPlus>
            </Link>

            </div>
    ) 
}

export default OrphanagesMap;