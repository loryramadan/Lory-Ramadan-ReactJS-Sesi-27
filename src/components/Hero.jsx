import React from 'react'

const Hero = () => {
  return (
    <section>
  <div className="flex items-center justify-center">
    <img className="w-full h-96 object-cover brightness-50 relative" src="image.jpg"/>
    <div className="text-center absolute ">
      <h1 className='text-3xl font-bold text-white'>Menu Kategori</h1>
    </div>
  </div>
</section>
  )
}

export default Hero