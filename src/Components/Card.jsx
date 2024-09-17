import "./CardStyle.css"
const Card = ({Nombre,Imagen, Estado}) => {
    return(
        <div className="StyleCard">
            <img src={Imagen} alt="" />
            <h3>{Nombre}</h3>
            <h3><strong>Estado:</strong>{Estado}</h3>
        </div>
    );
}
export default Card;