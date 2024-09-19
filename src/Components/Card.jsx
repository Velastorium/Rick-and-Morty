const Card = ({ Nombre, Imagen }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 h-80">
            <div className="flex items-center justify-center w-full h-48">
                <img src={Imagen} alt={Nombre} className="w-full h-full object-contain" />
            </div>
            <div className="p-4 text-center"> 
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{Nombre}</h2>
            </div>
        </div>
    );
};

export default Card;
