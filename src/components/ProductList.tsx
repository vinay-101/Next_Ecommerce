import React from 'react'
import Category from './Category'
import ProductCard from './ProductCard'
import {products} from '../data/product'

const ProductList = () => {
  return (
    <div>
        <Category/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {
        products.map((product)=>(
            <ProductCard product={product} key={product.id}/>
        ))
      }
        </div>
    </div>
  )
}

export default ProductList