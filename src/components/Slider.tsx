
export default function Slider() {

  const images = [
    '1.webp',
    '2.webp',
    '3.webp',
    '4.webp',
    '5.webp',
    '6.webp',
    '7.webp',
    '8.webp',
    '9.webp',
  ]

  return (
    <>
      <h2 
        className="text-center text-5xl xl:text-6xl font-bold mb-5"
      >Tecnologías</h2>

      <div className=" grid grid-cols-3 md:grid-cols-6 lg:flex items-center justify-center gap-6">
        {images.map( image => (
          <div 
            className="max-w-[150px] lg:w-[150px]"
            key={image} 
          >
            <img 
              className="w-full"
              src={`/${image}`} 
              alt="technologies" />
          </div>
        ))}
      </div>
    </>
    
  )
}
