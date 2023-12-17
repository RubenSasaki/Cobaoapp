import React from 'react'

function Bienvenida() {
  return (
    <>
    <div class="px-6 py-12 text-center md:px-12 lg:text-left bakcground-video">
    <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="mt-12 lg:mt-0">
          <h1 class="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[#7e1d3a]">
          Inicio del Semestre<br /><span>2023-B</span>
          </h1>
        </div>
        <div class="mb-12 lg:mb-0">
          <video 
          autoPlay
          muted
          loop          
          src="video/video.mp4" className='w-full rounded-lg shadow-lg dark:shadow-black/20'></video>
        </div>
      </div>
    </div>
  </div>

</>
  )
}

export default Bienvenida