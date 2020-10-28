import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import {Map,TileLayer, Marker, Popup} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';



function OrphanagesMap() {
    return (
            <div id="page-map">
                <aside>
                    <header>
                        <img src={mapMarkerImg} alt="Happy"/>

                        <h2>Escolha um orfanato no mapa</h2>
                        <p>Muitas Crianças estão esperando a sua visita</p>
                    </header>

                    <footer>
                        <strong>
                            São Paulo
                        </strong>
                        <span> São Paulo</span>
                    </footer>
                </aside>

            <Map
                center={[-23.7011216,-46.7924707]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* mapa do openstreetmap */}
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />     */}
                <TileLayer 
                    // mapa do MapBox litgh-v10
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                icon = {mapIcon}  
                position={[-23.7011216,-46.7924707]} 
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar São Tiago
                        <Link to="orphanages/1">
                            <FiArrowRight size={32} color="#FFF"/>
                        </Link>
                    </Popup>

                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"> </FiPlus>
            </Link>

            </div>
    ) 
}

export default OrphanagesMap;