import React from 'react'

const products = [
    {
        id: 1,
        name: 'Tank Top',
        description: 'Finding perfect t-shirt',
        price: '$50',
        image: 'https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg.webp', // Replace with actual image URL
    },
    {
        id: 2,
        name: 'Corater',
        description: 'Finding perfect products',
        price: '$50',
        image: 'https://preview.colorlib.com/theme/shoppers/images/shoe_1.jpg.webp', // Replace with actual image URL
    },
    {
        id: 3,
        name: 'Polo Shirt',
        description: 'Finding perfect products',
        price: '$50',
        image: 'https://preview.colorlib.com/theme/shoppers/images/cloth_2.jpg.webp', // Replace with actual image URL
    },
];

const ProductGrid = () => {
    return (
        <div>
            <div className="bg-gray-100 w-full flex flex-wrap justify-center items-center min-h-screen pt-10 mt-20">
                <div className="">
                    <h2 className="text-center text-3xl font-normal mb-8">Featured Products</h2>
                    <div className="flex items-center justify-center gap-6">
                        {products.map(product => (
                            <div key={product.id} className="bg-white shadow-lg h-[360px] flex flex-col items-center">
                                <img src={product.image} alt={product.name} className="w-[320px] mb-4 object-contain" />
                                <h3 className="text-lg font-semibo text-[#7971ea]">{product.name}</h3>
                                <p className="text-[#9499a6] text-sm mb-4">{product.description}</p>
                                <p className="text-[#7971ea] text-lg font-bold">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductGrid
