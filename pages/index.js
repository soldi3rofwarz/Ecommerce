import React from 'react'
import {client} from '../lib/client'
import {Cart,Footer,HeroBanner,Product,Navbar,Layout,FooterBanner} from './../components/index'

const Home = ({products, bannerData}) => {
  return (
    <>
    <HeroBanner HeroBanner={bannerData.length && bannerData[0]}/>
    {console.log("data",bannerData)}
    <div className='products-heading'>
      <h2>best selling Product</h2>
      <p>Speakers of many variations</p>
    </div>

    <div className='products-container'>
      {products?.map((product)=>product.name)
      
      }
    </div>
    <FooterBanner/>
    </>
  )
}
export const getServerSideProps = async ()=>{
  const query ='*[_type=="Product"]'
  const products =  await client.fetch(query)

  const bannerquery ='*[_type=="banner"]'
  const bannerData =  await client.fetch(bannerquery)
  return {
    props:{products, bannerData}
  }
}
export default Home