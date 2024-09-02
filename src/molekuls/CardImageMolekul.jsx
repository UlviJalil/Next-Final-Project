import React from 'react'

const CardImageMolekul = () => {
    return (
        <>
            <div className="w-full flex-wrap flex items-center justify-center gap-6">

                <div className="relative cursor-pointer bg-white shadow-lg overflow-hidden w-[350px]">
                    <img className=" w-full h-[450px] object-cover" src="https://preview.colorlib.com/theme/shoppers/images/women.jpg.webp" alt="Women Collection" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col gap-1 justify-end p-5">
                        <p className="text-white text-sm font-medium">COLLECTIONS</p>
                        <h2 className="text-white text-3xl font-bold">Women</h2>
                    </div>
                </div>


                <div className="relative cursor-pointer bg-white shadow-lg overflow-hidden w-[350px] ">
                    <img className="w-full h-[450px] object-cover" src="https://preview.colorlib.com/theme/shoppers/images/children.jpg.webp" alt="Children Collection" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col gap-1 justify-end p-5">
                        <p className="text-white text-sm font-medium">COLLECTIONS</p>
                        <h2 className="text-white text-3xl font-bold">Children</h2>
                    </div>
                </div>


                <div className="relative cursor-pointer bg-white shadow-lg overflow-hidden  w-[350px] ">
                    <img className="w-full h-[450px] object-cover" src="https://preview.colorlib.com/theme/shoppers/images/men.jpg.webp" alt="Men Collection" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col gap-1 justify-end p-5">
                        <p className="text-white text-sm font-medium">COLLECTIONS</p>
                        <h2 className="text-white text-3xl font-bold">Men</h2>
                    </div>
                </div>
            </div>





        </>
    )
}

export default CardImageMolekul
