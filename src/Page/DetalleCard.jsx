import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CharacterDetail = () => {
    const { id } = useParams();
    console.log('ID del personaje:', id); // Verifica que el ID se esté capturando

    const [personajes, setPersonajes] = useState(null);
    const [locationName, setLocationName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                setPersonajes(response.data);

                const locationResponse = await axios.get(response.data.location.url);
                setLocationName(locationResponse.data.name);
            } catch (err) {
                setError('Error al cargar el personaje');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleGoBack = () => {
        navigate(-1);
    };

    if (loading) {
        return <p className="text-center text-gray-600">Cargando detalles del personaje...</p>;
    }

    if (error) {
        return (
            <div className="text-center p-8">
                <p className="text-lg text-red-600 mb-4">{error}</p>
                <button
                    onClick={handleGoBack}
                    className="px-4 py-2 bg-[#cc84bf] text-white rounded-lg shadow-lg hover:bg-[#c76d9f] transition-colors duration-300"
                >
                    Regresar
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-8">
            <div className="bg-white shadow-xl rounded-lg max-w-5xl w-full p-8 lg:p-12 mx-4 lg:mx-0 relative">
                <div className="flex flex-col lg:flex-row gap-8"> 
                    <div className="flex-shrink-0 w-full lg:w-1/2 flex items-center justify-center">
                        <img
                            src={personajes.image || 'https://via.placeholder.com/300'}
                            alt={personajes.name || 'Personaje sin nombre'}
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="flex-1 space-y-4"> {/* Reducido el espacio entre textos */}
                        <h1 className="text-5xl font-extrabold text-gray-900 ">
                            {personajes.name || 'Nombre no disponible'}
                        </h1>
                        <p className="text-lg text-gray-800">
                            {personajes.status ? `Estado: ${personajes.status}` : 'Estado no disponible'}
                        </p>
                        <p className="text-lg text-gray-700">
                            {personajes.species ? `Especie: ${personajes.species}` : 'Especie no disponible'}
                        </p>
                        <p className="text-lg text-gray-700">
                            {personajes.gender ? `Genero: ${personajes.gender}` : 'Genero no disponible'}
                        </p>
                        <p className="text-lg text-gray-700">
                            Ubicación: {locationName || 'Ubicación no disponible'}
                        </p>
                    </div>
                </div>
                <div className="flex justify-end mt-2"> {/* Contenedor para alinear el botón */}
                    <button
                        onClick={handleGoBack}
                        className="px-4 py-2 bg-[#cc84bf] text-white rounded-lg shadow-lg hover:bg-[#c76d9f] transition-colors duration-300"
                    >
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;
