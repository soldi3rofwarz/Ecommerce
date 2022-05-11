import React from 'react'
import {client, urlFor} from '../../lib/client'

const ProductDetails = ({product, products}) => {
    const {image, name, details, price}= product
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src={urlFor(image && image[0])}/>
                </div>
               {/*  <div className='small-image-container'>
                    {image?.map((item,i)=>(
                        <img
                            src={urlFor(item)}
                            classname=""
                            onMouseEnter=""
                        />
                    ))}
                </div> */}
            </div>
            <div className='product-details-desc'>
                <h1>{name}</h1>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths= async()=>{
    const query =`*[_type== "Product"]{
        slug{
            current
        }
    }`
    const products = await client.fetch(query)
    const paths = products.map((product)=>({
        params:{
            slug: product.slug.current 
        }
    }))
    return{
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params:{slug}})=>{
    const query =`*[_type=="Product" && slug.current == '${slug}'][0]`
    const productQuery = '*[_type== "Product"]'
    const product =  await client.fetch(query)
    const products =await client.fetch(productQuery)
  
    
    return {
      props:{products, product}
    }
  }

export default ProductDetails