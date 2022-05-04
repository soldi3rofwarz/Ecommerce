import React from 'react'
import {Cart,Footer,HeroBanner,Product,Navbar,Layout,FooterBanner} from './../components/index'

const Home = () => {
  return (
    <>
    HeroBanner

    <div className='products-heading'>
      <h2>best selling Product</h2>
      <p>Speakers of many variations</p>
    </div>

    <div className='products-container'>
      {['product1 ','product2 '].map((product)=>product)
      
      }
    </div>
    </>
  )
}

export default Home