import React from 'react'
import Category from './Category'
import ProductCard from './ProductCard'
import {products} from '../data/product'
import Link from 'next/link'
import Filter from './Filter'

const ProductList = ({category, pageType}: {category:string, pageType: "Homepage" | "Product"}) => {
  return (
    <div>
        <Category/>
        {
          pageType === "Product" && (
            // <div className='flex items-start justify-start'>
              <Filter/> 
            // </div>
          )
        }
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {
        products.map((product)=>(
            <ProductCard product={product} key={product.id}/>
        ))
      }
        </div>
      {
       pageType  === "Homepage" &&  <Link className='text-end block mt-4' href={category ? `/products/?category=${category}` : "/products"}>View all product</Link>
      }
       
    </div>
  )
}

export default ProductList