import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';
import { LeafletMouseEvent } from 'leaflet';
import { useHistory } from 'react-router-dom';


import '../styles/pages/create-orphanage.css';
import Sidebar from '../components/Sidebar';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';




export default function OrphanagesMap() {
    const history = useHistory();


    // Criação de estados para todos os componentes 
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [instructions, setInstructions] = useState('');
    const [opening_hours, setOpeningHours] = useState('');
    const [opening_on_weekends, setOpeningWeekends] = useState(true);
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);


    function handleMapClick(event: LeafletMouseEvent) {
        const { lat, lng } = event.latlng;

        setPosition({
            latitude: lat,
            longitude: lng,
        });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { latitude, longitude } = position;

        const data = new FormData();

        // Fazendo os dados ser enviados do formulario para API
        data.append('name', name);
        data.append('about',about);
        data.append('latitude',String(latitude));
        data.append('longitude',String(longitude));
        data.append('instructions', instructions);
        data.append('opening_hours',  opening_hours);
        data.append('opening_on_weekends',String(opening_on_weekends));
        
        // passa pelo for each as imagens
        images.forEach(image => {
            data.append('images',image);
        })

        await api.post('orphanages', data);

        alert("Cadastro Realizado com Sucesso");

        history.push('/app');
    }

    function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
        if(!event.target.files){
            return;
        } 

        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);

        const selectedImagesPreview = selectedImages.map(image => {
            return URL.createObjectURL(image)
        });

        setPreviewImages(selectedImagesPreview);

    }
    return (
        <div id="page-create-orphanage">
            <Sidebar></Sidebar>

            <main>
                <form onSubmit={handleSubmit} className="create-orphanage-form">
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            center={[-23.7011216, -46.7924707]}
                            zoom={15}
                            style={{ width: '100%', height: 280 }}
                            onclick={handleMapClick}
                        >
                            {/* mapa do openstreetmap */}
                            {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />     */}
                            <TileLayer
                                // mapa do MapBox litgh-v10
                                url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />

                            {/* Um if tenario ou safado kkk para diferenciar da musança de pontos da posição quando e clickado no mapa */}

                            {position.latitude !== 0 && (
                                < Marker
                                    interactive={false}
                                    icon={mapIcon}
                                    position={[
                                        position.latitude,
                                        position.longitude]
                                    }>

                                </Marker>
                            )
                            }


                        </Map>

                        <div className="input-block">
                            <label htmlFor="name">Nome</label>
                            <input
                                id="name"
                                value={name}
                                onChange={event => setName(event.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
                            <textarea
                                id="name"
                                maxLength={300}
                                value={about}
                                onChange={event => setAbout(event.target.value)}
                            ></textarea>
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Fotos</label>

                            <div className="images-container">
                                {previewImages.map(image => {
                                   return (
                                       <img key={image} src={image} alt={name}/>
                                   ) 
                                })}

                                <label htmlFor="image[]" className="new-image">
                                    <FiPlus size={24} color="#15b6d6" />
                                </label>
                            </div>
                            <input multiple onChange={handleSelectImages} type="file" id="image[]" />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Visitação</legend>

                        <div className="input-block">
                            <label htmlFor="instructions">Instruções</label>
                            <textarea
                                id="instructions"
                                value={instructions}
                                onChange={event => setInstructions(event.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_hours">Horário de Funcionamento</label>
                            <textarea
                                id="opening_hours"
                                value={opening_hours}
                                onChange={event => setOpeningHours(event.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_on_weekends">Atende Fim de Semana?</label>
                            <div className="button-select">
                                <button
                                    type="button"
                                    className={opening_on_weekends ? 'active' : ''}
                                    onClick={() => setOpeningWeekends(true)}
                                >
                                    Sim
                                     </button>
                                <button
                                    type="button"
                                    className={!opening_on_weekends ? 'active' : ''}
                                    onClick={() => setOpeningWeekends(false)}
                                >Não</button>
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