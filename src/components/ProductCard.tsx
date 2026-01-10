"use client"
import React, { useState } from 'react'
import { IProduct } from '../types/product';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    return (
        <div className='shadow-lg rounded-lg overflow-hidden'>
            {/* IMAGE  */}
            <Link href={`/products/${product.id}`}>
                <div className='relative aspect-2/3'>
                    <Image
                        src={product.images[selectedColor]}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                    />
                </div>
            </Link>
            {/* PRODUCT DETAILS  */}
            <div className="p-4">
                <h1 className="text-medium font-semibold mb-2">{product.name}</h1>
                <p className="text-sm mb-3 text-gray-500">{product.shortDescription}</p>
                
                {/* SIZE AND COLORS  */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    {/* Size */}
                    <div className="w-full sm:w-1/2">
                        <span className="text-sm text-gray-700 block mb-1">Size</span>
                        <select
                            name="size"
                            id="size"
                            className="w-full ring-1 ring-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            {product.sizes.map((size) => (
                                <option key={size} value={size}>
                                    {size.toUpperCase()}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Colors */}
                    <div className="w-full sm:w-1/2">
                        <h3 className="text-sm text-gray-700 block mb-1">Colors</h3>
                        <div className="flex gap-2 flex-wrap">
                            {product.colors.map((color) => (
                                <div
                                    key={color}
                                    style={{ backgroundColor: color }}
                                    className={`w-6 h-6 rounded-full border-2 cursor-pointer hover:scale-110 transition-transform ${
                                        selectedColor === color 
                                            ? 'border-black ring-2 ring-gray-400' 
                                            : 'border-gray-300'
                                    }`}
                                    title={color}
                                    onClick={() => setSelectedColor(color)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* PRICE AND CALL TO ACTION  */}
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                    <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-3 py-2 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
                        <ShoppingCart className='w-4 h-4' />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard