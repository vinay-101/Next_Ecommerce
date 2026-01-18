import ProductList from '@/components/ProductList';
import React from 'react'

const page = async({searchParams}: {searchParams:Promise<{category:string}>}) => {
    const category = (await searchParams).category;
    // console.log(category);
  return (
    <div>
        <ProductList category={category} pageType='Product'/>
    </div>
  )
}

export default page