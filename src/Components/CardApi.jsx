const Card = ({ Nombre, Imagen, Estado }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Imagen} alt={Nombre} className="w-full h-auto object-cover" />
            <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{Nombre}</h2>
                <p className="text-gray-600">{Estado}</p>
            </div>
        </div>
    );
};

export default Card;
