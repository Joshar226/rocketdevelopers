import { IoLogoWhatsapp } from "react-icons/io5";


export default function WhatsappBoton() {
  return (
    <a 
        className="inline-block bg-green-500 p-2 rounded-full fixed z-0 right-6 bottom-6"
        href="https://wa.me/50687468528"    
    >
        <IoLogoWhatsapp 
            size={45}

        />
    </a>
  )
}
