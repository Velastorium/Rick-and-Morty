import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../Components/CardApi';
import { Outlet } from 'react-router-dom';

const RMCards = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                setPersonajes(response.data.results);
            } catch (error) {
                console.error('Error al buscar los personajes:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Rick and Morty</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {personajes.map(personaje => (
                    <Link key={personaje.id} to={`/Personajes/${personaje.id}`}>
                        <Card
                            Nombre={personaje.name}
                            Imagen={personaje.image}
                            Estado={personaje.status}
                        />
                    </Link>
                ))}
            </div>
            <Outlet />
        </div>
    );
};

export default RMCards;
