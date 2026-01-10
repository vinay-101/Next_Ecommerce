"use client"
import React from 'react'
import { categories } from '../data/categories'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


const Category = () => {
    const router = useRouter();
    const searchParm = useSearchParams();
    const pathname = usePathname();
    // console.log(searchParm.get("category"))

    const selectedCategory = searchParm.get("category") || "all"

    const handleTab = (slug: string) => {
        const params = new URLSearchParams(searchParm.toString())
        params.set("category", slug)

        router.push(`${pathname}?${params.toString()}`,{scroll:false})
    }

    return (
        <div className="w-full text-sm bg-gray-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 rounded-lg p-2 mb-4">
            {categories.map((category) => (
                <div key={category.slug} className={`flex items-center justify-center gap-2 p-2 py-1 cursor-pointer rounded-md ${selectedCategory == category?.slug ? 'bg-white' : "text-gray-500"}`}>
                    {category.icon}
                    <span onClick={() => handleTab(category.slug)}>{category.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Category