import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Outlet } from "react-router-dom";
import WhatsappBoton from "../components/WhatsappBoton";


export default function AppLayout() {
  return (
    <div className="space-y-40">
      <header className="from-[#212121] to-[#0d0d0d] bg-linear-to-b  w-full h-full">
        <div className="flex justify-center mb-32">
          <img src="/hero.webp" alt="Logo"/>
        </div>

        <div className="container mx-auto space-y-22">
          <h1 className="text-8xl uppercase font-bold">Agencia de <br /> <span className="text-cyan-300">Páginas Web</span></h1>

          
          <h2 className="text-5xl font-semibold">Transforma tus ideas en <br /> <span className="text-cyan-300">Experiencias Digitales Increíbles</span></h2>
            
        </div>

        
      </header>
    
      <main className="container mx-auto">
        <Outlet/>
      </main>

      <section>
        <WhatsappBoton />
      </section>

    
      <footer className="container mx-auto flex justify-evenly pb-20">
        <div className="flex flex-col items-center gap-1">
          <IoLogoWhatsapp 
            size={45}
          />
          <p className="text-2xl">+506 8746-8528</p>
        </div>

        <div className="flex flex-col items-center gap-1">
        <MdOutlineEmail 
          size={45}
        />
          <p className="text-2xl">josharaya226@gmail.com</p>
        </div>
      </footer>

    </div>
  )
}
