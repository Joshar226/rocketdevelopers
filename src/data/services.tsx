import { GoDatabase } from "react-icons/go";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoCodeSlashSharp } from "react-icons/io5";

const services = [
    {
        name: "Diseño y Desarrollo Web",
        icon: <HiOutlinePaintBrush 
            size={60}
        />,
        description: "Creamos sitios web modernos y funcionales, adaptados a las necesidades de tu negocio. Nos enfocamos en ofrecer un diseño atractivo, responsivo y optimizado para brindar la mejor experiencia de usuario"
    },
    {
        name: "Desarrollo frontend/backend",
        icon: <IoCodeSlashSharp 
        size={60}
        />,
        description: "Desarrollamos interfaces intuitivas y dinámicas en el frontend, junto con sistemas robustos y eficientes en el backend. Utilizamos tecnologías avanzadas para garantizar un rendimiento óptimo y una experiencia fluida"
    },
    {
        name: "Integraciones con bases de datos",
        icon: <GoDatabase 
        size={60}
        />,
        description: "Conectamos tu sitio o aplicación con bases de datos seguras y escalables, optimizando la gestión de la información. Implementamos soluciones que garantizan rapidez, fiabilidad y acceso eficiente a los dato"
    },
]

export default services
