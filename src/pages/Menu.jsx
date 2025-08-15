import React from 'react'
import Button from '@mui/material/Button';
import styles from './Menu.module.css'
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <div>
      
      <section className={styles.dishes}>
        <h2 className="text-center pt-3 pb-5 fw-bold" style={{fontFamily: "Baumans, system-ui"}}>Today's Menu</h2>

        <div className="d-flex align-items-center justify-content-evenly pb-5">
          <div className="position-relative" style={{cursor:'pointer'}}>
            <Link to='/order'>
              <img
                src="https://img.freepik.com/premium-photo/full-rack-bbq-grilled-pork-spare-ribs-marble-board-black-background-top-view_89816-35995.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </Link>
            
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >BBQ RIBS</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>

          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <Link to='/order'>
              <img
                src="https://www.shutterstock.com/image-photo/chicken-dhum-biriyani-using-jeera-600nw-2047827047.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </Link>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >BIRIYANI</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <Link to='/order'>
              <img
                src="https://img.freepik.com/premium-photo/vibrant-serving-grilled-pork-chops-garnished-with-rosemary-garlic-served-black-plate-with-knife-set-rustic-wooden-background-ar-32-v-61-job-id-ed94fb5752cb4296aeb672600f36609d_1293074-224215.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </Link>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >PORK RIBS</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>          
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-evenly pb-5">
          <div className="position-relative" style={{cursor:'pointer'}}>
            <Link to='/order'>
              <img
                src="https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </Link>
            
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >SPAGHETTI</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>

          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <Link to='/order'>
              <img
                src="https://thumbs.dreamstime.com/b/delicious-grilled-assorted-meat-platter-company-spicy-sausages-lamb-ribs-sliced-pork-steak-chicken-fillet-served-wooden-240270245.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </Link>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >PLATTER</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <Link to='/order'>
              <img
                src="https://img.freepik.com/premium-photo/chicken-burger-street-food-style-dark-background_918874-20.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </Link>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >BURGER</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>          
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-evenly pb-5">
          <div className="position-relative" style={{cursor:'pointer'}}>
            <Link to='/order'>
              <img
                src="https://www.shutterstock.com/image-photo/grilled-spicy-chicken-wings-ketchup-600nw-1678801792.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </Link>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >BBQ WINGS</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
           <Link to='/order'>
              <img
                src="https://img.freepik.com/premium-photo/chicken-nuggets-sauce-black-plate-dark-background-top-view-overhead_2829-21160.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
           </Link>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >NUGGETS</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <Link to='/order'>
              <img
                src="https://static.vecteezy.com/system/resources/previews/027/671/391/non_2x/pepperoni-pizza-on-the-wooden-board-with-dark-lighting-and-black-background-food-and-delivery-concept-generative-ai-free-photo.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </Link>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >PIZZA</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-evenly pb-5">
          <div className="position-relative" style={{cursor:'pointer'}}>
            <Link to='/order'>
              <img
                src="https://png.pngtree.com/thumb_back/fw800/background/20231106/pngtree-delectable-shawarma-kebab-infused-with-sausage-on-a-textured-black-stone-image_13812946.png"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </Link>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >SHAWARMA</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
           <Link to='/order'>
              <img
                src="https://img.freepik.com/premium-photo/asian-udon-noodles-with-chicken-vegetables-teriyaki-sauce-black-wooden-background_182920-966.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
           </Link>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >CHOP SUEY</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <Link to='/order'>
              <img
                src="https://png.pngtree.com/background/20230611/original/pngtree-steak-on-black-background-on-a-plate-picture-image_3161869.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </Link>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >STEAK</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Menu