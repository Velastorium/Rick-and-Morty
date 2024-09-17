import axios from "axios"
import { useState, useEffect } from "react"
import Card from "../Components/Card"


const Personaje = () => {
    const [personaje, setPersonaje] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                setPersonaje(response.data.results);
            }catch (error) {
                console.error('Error al buscar el personaje:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="Contenedor">
            <h1>Rick and Morty</h1>
            <div className="StyleCards">
                {personaje.map(personaje => (
                    <Card
                    key={personaje.id}
                    Nombre={personaje.name}
                    Imagen={personaje.image}
                    Estado={personaje.status}
                    />
                ))}
            </div>
        </div>

    );
}

export default Personaje;