
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
        className="text-center text-6xl font-bold mb-5"
      >Tecnologías</h2>

      <div className="flex items-center gap-6 justify-center">
        {images.map( image => (
          <div 
            className="w-[200px]"
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
