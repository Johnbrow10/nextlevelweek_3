import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo, FiArrowLeft } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useHistory } from 'react-router-dom';
import L from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanage.css';

const happyMapIcon = L.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default function orphanage() {
    const { goBack } = useHistory();

    return (
        <div id="page-orphanage">
            <aside>
                <img src={mapMarkerImg} alt="Happy" />

                <footer>
                    <button type="button" onClick={goBack}>
                        <FiArrowLeft size={24} color="#FFF" />
                    </button>
                </footer>
            </aside>

            <main>
                <div className="orphanage-details">
                    <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Meninas" />

                    <div className="images">
                        <button className="active" type="button">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Meninas" />
                        </button>
                        <button type="button">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Meninas" />
                        </button>
                        <button type="button">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Meninas" />
                        </button>
                        <button type="button">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Meninas" />
                        </button>
                        <button type="button">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Meninas" />
                        </button>
                        <button type="button">
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Meninas" />
                        </button>
                    </div>

                    <div className="orphanage-details-content">
                        <h1>Lar das Meninas</h1>
                        <p>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade</p>


                        <div className="map-container">
                            <Map center={[-23.7011216, -46.7924707]}
                                zomm={16}
                                style={{ width: '100%', height: 280 }}
                                dragging={false}
                                touchZoom={false}
                                zoomControl={false}
                                scrollWhellZoom={false}
                                doubleClickZoom={false}
                            >
                                <TileLayer
                                    // mapa do MapBox litgh-v10
                                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                                />
                                < Marker interactive={false} icon={happyMapIcon} position={[-23.7011216, -46.7924707]}></Marker>
                            </Map>

                            <footer> <a href=""> Ver rotas no Google Maps</a> </footer>
                        </div>

                        <hr />

                        <h2>Instruções para visitas</h2>
                        <p>Venha como se sentir mais á vontade e traga muito amor para dar.</p>

                        <div className="open-details">
                            <div className="hour">
                                <FiClock size={32} color="#15B6DB" />
                        Segunda á sexta <br />
                        8h ás 18h
                    </div>
                            <div className="open-on-weekends">
                                <FiInfo size={32} color="#39CC83" />
                        Atendemos <br />
                        Fim de semana.
                    </div>
                        </div>

                        <button className="contact-button" type="button">
                            <FaWhatsapp size={32} color="FFF" />
                    Entrar em contato.
                </button>
                    </div>
                </div>
            </main>
        </div>
    );
}