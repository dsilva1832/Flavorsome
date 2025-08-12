import React from 'react'
import './Landing.css'

const Landing = () => {
  return (
    <div>
      <section className='bg1'>
        <div className='row'>
          <div className='col-lg-7'></div>
          <div className='col-lg-5'>
            <h3 className='name text-light'>Flavorsome</h3>
            <p className='text-light'>Flavour, Perfected</p>
          </div>
        </div>
      </section>

      {/* top dishes */}
      <section id='dishes'>
        <h2 className='text-center mt-3'>Top Dishes</h2>
        <div className='d-flex justify-content-center align-items-evenly'>
          <div className='row px-5'>
            <div className='col-4'>
              <img src="https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg" alt="no img" className='img-fluid'/>
              <p style={{background:'#fde33d'}}>Pasta</p>
            </div>
            <div className='col-4'>
            <img src="https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg" alt="no img" className='img-fluid'/>
            <p>Pasta</p>
            </div>
            <div className='col-4'>
            <img src="https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg" alt="no img" className='img-fluid'/>
            <p>Pasta</p>
            </div>
  
          </div>
        </div>

      </section>



    </div>
  )
}

export default Landing