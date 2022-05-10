import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
const FooterBanner = ({FooterBanner}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{FooterBanner.discount}</p>
          <h3>{FooterBanner.largeText1}</h3>
          <h3>{FooterBanner.largeText2}</h3>
          <p>{FooterBanner.saleTime}</p>
        </div>
        <div className='right'>
          <p>{FooterBanner.smallText}</p>
          <h3>{FooterBanner.largeText1}</h3>
          <h3>{FooterBanner.largeText2}</h3>
          <p>{FooterBanner.desc}</p>
          <Link href={`/product/${FooterBanner.product}`}>
            <button type='button'>{FooterBanner.buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(FooterBanner.image)}className="footer-banner-image"/>
      </div>
    </div>
  )
}

export default FooterBanner