import React from 'react'

const SecondCardImageMolekul = () => {
    return (
        <>
            <div className="w-full flex-wrap bg-[#f8f9fa] h-[500px] flex justify-center gap-5 pt-36 mt-20">
                <div className="bg-white rounded-lg shadow-md overflow-hidden w-80">
                    <img className="w-full h-60 object-contain" src="https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg.webp" alt="Tank Top" />
                    <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold text-purple-600">Tank Top</h3>
                        <p className="text-gray-500">Finding perfect t-shirt</p>
                        <p className="text-purple-600 font-bold mt-2">$50</p>
                    </div>
                </div>


                <div className="bg-white rounded-lg shadow-md overflow-hidden w-80">
                    <img className="w-full h-64 object-contain" src="https://preview.colorlib.com/theme/shoppers/images/shoe_1.jpg.webp" alt="Corater" />
                    <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold text-purple-600">Corater</h3>
                        <p className="text-gray-500">Finding perfect products</p>
                        <p className="text-purple-600 font-bold mt-2">$50</p>
                    </div>
                </div>


                <div className="bg-white rounded-lg shadow-md overflow-hidden w-80">
                    <img className="w-full h-64 object-contain" src="https://preview.colorlib.com/theme/shoppers/images/cloth_2.jpg.webp" alt="Polo Shirt" />
                    <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold text-purple-600">Polo Shirt</h3>
                        <p className="text-gray-500">Finding perfect products</p>
                        <p className="text-purple-600 font-bold mt-2">$50</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondCardImageMolekul
