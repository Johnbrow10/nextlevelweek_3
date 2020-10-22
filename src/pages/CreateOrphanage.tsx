import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useHistory } from 'react-router-dom';
import L from 'leaflet';

import { FiArrowLeft, FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanage.css';

const happyMapIcon = L.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default function OrphanagesMap() {
    const { goBack } = useHistory();

    return (
        <div id="page-create-orphanage">
            <aside>
                <img src={mapMarkerImg} alt="Happy" />
                <footer>
                    <button type="button" onClick={goBack}>
                        <FiArrowLeft size={24} color="#FFF" />
                    </button>
                </footer>
            </aside>

            <main>
                <form className="create-orphanage-form">
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            center={[-23.7011216, -46.7924707]}
                            zoom={15}
                            style={{ width: '100%', height: 280 }}
                        >
                            {/* mapa do openstreetmap */}
                            {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />     */}
                            <TileLayer
                                // mapa do MapBox litgh-v10
                                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />

                            < Marker interactive={false} icon={happyMapIcon} position={[-23.7011216, -46.7924707]}></Marker>
                        </Map>

                        <div className="input-block">
                            <label htmlFor="name">Nome</label>
                            <input id="name" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
                            <textarea id="name" maxLength={300}></textarea>
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Fotos</label>

                            <div className="uploaded-image">

                            </div>

                            <button className="new-image" type="button">
                                <FiPlus size={24} color="#15b6d6" />
                            </button>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Visitação</legend>

                        <div className="input-block">
                            <label htmlFor="instructions">Instruções</label>
                            <textarea id="instructions"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_hours">Instruções</label>
                            <textarea id="opening_hours"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_on_weekends">Instruções</label>
                            <div className="button_select">
                                <button type="button" className="active">Sim</button>
                                <button type="button">Não</button>
                            </div>
                        </div>
                    </fieldset>
                    <button className="confirm-button" type="submit">
                        Confirmar
                    </button>
                </form>
            </main>
        </div>
    )
}