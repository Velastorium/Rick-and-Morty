import Layout from "../Components/Layout";
import Card from "../Components/Card"
import Movie1 from "../Components/Img/mammamia1.jfif"
import Movie2 from "../Components/Img/mammamia2.jpg"
import Movie3 from "../Components/Img/jardinsecreto.jpg"
import Movie4 from "../Components/Img/labelleetlabete.jpg"

import Color1 from "../Components/Img/lila.webp"
import Color2 from "../Components/Img/amarillo.jpg"
import Color3 from "../Components/Img/verde.png"
import Color4 from "../Components/Img/cafe.jpg"

import Img1 from "../Components/Img/Img1.png"
import Img2 from "../Components/Img/Img2.png"

const SM = () => {

  return (
    <div>
      <div className="p-6">
        <h1 className="text-6xl font-extrabold mb-6 text-center" style={{ color: '#cc84bf' }}>
          Favoritos
        </h1>
        <h4 className="text-4xl font-extrabold mb-6 text-center" style={{ color: '#cc84bf' }}>
          Colores
        </h4>
        <div className="flex flex-col md:flex-row overflow-x-auto gap-4 p-4 justify-center items-center">
          <div className="flex-shrink-0 w-full md:w-auto mb-4 flex justify-center">
            <Card Imagen={Color1} Nombre="Lila" />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto mb-4 flex justify-center">
            <Card Imagen={Color2} Nombre="Amarillo" />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto mb-4 flex justify-center">
            <Card Imagen={Color3} Nombre="Verde" />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto mb-4 flex justify-center">
            <Card Imagen={Color4} Nombre="Cafe" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-4xl font-extrabold mb-6 text-center" style={{ color: '#cc84bf' }}>
          Películas
        </h4>
        <div className="flex flex-col md:flex-row overflow-x-auto gap-4 p-4 justify-center items-center">
          <div className="flex-shrink-0 w-full md:w-auto mb-4 flex justify-center">
            <Card Imagen={Movie1} Nombre="Mamma Mia!" />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto mb-4 flex justify-center">
            <Card Imagen={Movie2} Nombre="Mamma Mia! Vamos otra vez" />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto mb-4 flex justify-center">
            <Card Imagen={Movie3} Nombre="El jardín secreto" />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto mb-4 flex justify-center">
            <Card Imagen={Movie4} Nombre="La Belle et la Bête" />
          </div>
        </div>
      </div>

      <Layout
        titleColor="#ffffff"
        color="#ffffff"
        bgColor="#dda1b1"
        title="Hobbies"
        texto={
          <>
            Disfruto mucho de la lectura, especialmente de géneros como el romance, la fantasía y el misterio. Me atraen tanto las historias que desbordan emoción como aquellas que nos sumergen en mundos imaginarios llenos de magia e intriga.
            <br /><br />
            Además, tengo una profunda fascinación por la historia. Me gusta descubrir y explorar tanto los eventos históricos más conocidos como los menos conocidos, ya que aprender sobre el pasado de la humanidad me resulta increíblemente enriquecedor.
            <br /><br />
            Me gusta dibujar y pintar, aunque siento una conexión especial con la pintura. Pintar me relaja y me llena de una paz inexplicable.
          </>
        }
        align="right"
        img={Img1}
      />
      <br />
      <Layout
        titleColor="#cc84bf"
        color="#000000"
        bgColor="#ffffff"
        title="Futuro en 5 Años"
        texto={
          <>
            En cinco años, me veo finalizando mi carrera de Ingeniería en Sistemas o quizás buscando una especialización. Me imagino con un empleo estable y, lo que más me ilusiona, pudiendo ayudar económicamente a mi mamá.
            <br /><br />
            Me visualizo viajando en mis tiempos libres, explorando los rincones de mi país. Antes de aventurarme a conocer nuevos horizontes, quiero darme el gusto de redescubrir mi hogar.
            <br />
            También me veo construyendo los cimientos para crear mi propia empresa, ya sea en colaboración con amigos o de manera independiente.
          </>
        }
        align="left"
        img={Img2}
      />
    </div>
  );
};

export default SM;
