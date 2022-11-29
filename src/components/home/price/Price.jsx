import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Promotion Package' subtitle='Upgrade your property to sell/rent' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
