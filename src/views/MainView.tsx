import ServiceCard from "../components/ServiceCard";
import Slider from "../components/Slider";
import services from "../data/services";

export default function MainView() {

  return (
    <div>
      <div className="mb-36">
          <h3 className="text-4xl mb-3"><span className="text-cyan-300 font-bold">&gt; </span>Sobre la Agencia</h3>
          <div className="text-2xl border-l-4 border-l-cyan-300 pl-3 max-w-[800px]" >
            <p>En JDevelopers podemos crear tu propia página web con lo que desees, no solo para tu público o clientes, sino que podemos darte inclusive un sistema de organización. <br/><br/> </p>
            <p>Colaboramos con cada cliente para comprender a fondo sus necesidades y objetivos, desarrollando con creatividad y orientación, así te hacemos parte del equipo. <br/><br/> </p>
            <p>Nuestro compromiso con cada cliente es impulsar tu negocio hacia el éxito con tu idea.</p>
          </div>
      </div>

      <div className="mb-10">
        <h3 className="text-5xl xl:text-8xl font-bold text-center mb-11">Principales Servicios</h3>
        <div className=" flex flex-col xl:flex-row justify-center gap-6 max-w-[1350px] mx-auto cursor-default">
          {services.map( service => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>

      <div className="text-center mb-36">
        <a 
          href="https://wa.me/50687468528"
          className="bg-cyan-400 text-2xl font-bold px-10 py-3 rounded-full shadow-lg shadow-cyan-500/50 uppercase hover:shadow-cyan-500 transition duration-300 hover:bg-white hover:text-cyan-400"
        >Contáctenos</a>
      </div>

      <Slider />
      
    </div>
  )
}
