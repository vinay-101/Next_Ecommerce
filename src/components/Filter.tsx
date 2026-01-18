"use client"
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'

const Filter = () => {
  const router = useRouter();
  const searchParm = useSearchParams();
  const pathname = usePathname();
  // console.log(searchParm.get("category"))


  const handleParms = (slug: string) => {
    const params = new URLSearchParams(searchParm.toString())
    params.set("sort", slug)

    router.push(`${pathname}?${params.toString()}`, {scroll:false})
  }
  return (
    <div className='flex mt-6 gap-2 items-center text-gray-500 text-sm justify-end'>
      <span>Sort by:</span>
      <select className='p-1 shadow-md ring-1 ring-gray-200 rounded-sm' onChange={(e)=> handleParms(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
      </select>
    </div>
  )
}

export default Filter