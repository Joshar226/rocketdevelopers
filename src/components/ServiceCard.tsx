import { Service } from "../types"

type ServiceCardProps = {
    service: Service
}

export default function ServiceCard({service} : ServiceCardProps) {
  return (
    <div className="bg-[#181818] px-10 py-6 space-y-3 hover:text-cyan-300">

        <div className="flex items-center text-3xl gap-3">
            {service.icon}
            <h3>{service.name}</h3>
        </div>

        <p className="text-gray-400">{service.description}</p>

    </div>
  )
}
