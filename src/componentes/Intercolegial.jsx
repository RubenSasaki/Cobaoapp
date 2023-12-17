import React from 'react'

function Intercolegial() {
  return (
    <div className="card w-full bg-base-100 pt-20 shadow-xl ">
    <div className="card-body">
    <h1 className='text-center text-Intercolegial bg-clip-text text-7xl font-bold'>INTERCOLEGIAL</h1>
    {/**reloj */}

    </div>
    <div className="container-live justify-items-center">
        <h1>Marcador</h1>
        <div className="title-box-live">
            <p>04</p>
            <p id="elapsed">45'</p>
            <p>01</p>
        </div>
        <div className="title-box-live">
            <div className="team-live">
                <img src='/src/assets/svg-hub-048.svg'  />
                <p id="homeName">Cobao Tule</p>
            </div>
            <p id="goals">3  -  1</p>
            <div className="team-live justify-items-center">
                <img className='items-center'  src='/src/assets/svg-hub-048.svg'/>
                <p id="awayName-live">Cobao Pueblo Nuevo</p>
            </div>
             
        </div>
        
        <div id="matchTable-" className="matches-table-live">

        </div>
        </div>
  </div>
  )
}

export default Intercolegial