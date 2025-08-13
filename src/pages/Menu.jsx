import React from 'react'
import Button from '@mui/material/Button';
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div>
      
      <section className={styles.dishes}>
        <h2 className="text-center pt-3 pb-5">Today's Menu</h2>

        <div className="d-flex align-items-center justify-content-evenly pb-5">
          <div className="position-relative" style={{cursor:'pointer'}}>
            <a href='/order'>
              <img
                src="https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </a>
            
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >SPAGHETTI</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>

          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <a href='/order'>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/023/007/593/small_2x/pizza-veggie-italian-pizza-with-mozzarella-olives-sausage-and-vegetables-on-black-background-ai-generated-photo.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </a>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >PIZZA</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <a href='/order'>
              <img
                src="https://img.freepik.com/premium-photo/fresh-tasty-burger-french-fries-ketchup-dark-background_113876-3418.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </a>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >BURGER</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>          
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-evenly pb-5">
          <div className="position-relative" style={{cursor:'pointer'}}>
            <a href='/order'>
              <img
                src="https://png.pngtree.com/thumb_back/fw800/background/20231106/pngtree-delectable-shawarma-kebab-infused-with-sausage-on-a-textured-black-stone-image_13812946.png"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </a>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >SHAWARMA</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
           <a href='/order'>
              <img
                src="https://img.freepik.com/premium-photo/asian-udon-noodles-with-chicken-vegetables-teriyaki-sauce-black-wooden-background_182920-966.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
           </a>
            <div className='position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white text-center'>
              <p className='mb-0' style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}} >CHOP SUEY</p>
              <Button href="/order" style={{marginTop:'-10px'}} className={styles.btn}>Click to Order</Button>
            </div>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <a href='/ordero'>
              <img
                src="https://png.pngtree.com/background/20230611/original/pngtree-steak-on-black-background-on-a-plate-picture-image_3161869.jpg"
                alt="no img"
                className={styles.dish1}
                style={{ borderRadius: "10px" }}
              />
            </a>
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