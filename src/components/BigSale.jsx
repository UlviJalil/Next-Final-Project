import React from 'react'

const BigSale = () => {
    return (
        <div className="bg-[#ffffff] flex w-full justify-center items-center min-h-screen">
            <div className="max-w-screen-lg p-5">
                <h2 className="text-center text-3xl font-semibold mb-8">Big Sale!</h2>
                <div className="md:flex md:items-center gap-14">
                    <div className="md:w-1/2">
                        <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg.webp" alt="Big Sale" className=" rounded-sm shadow-lg" />
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <h3 className="text-purple-600 text-4xl font-bold mb-4">50% less in all items</h3>
                        <p className="text-gray-500 mb-4">By <span className="text-blue-500">Carl Smith</span> • September 3, 2018</p>
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisquam iste dolor accusantium facere corporis
                            ipsum animi <br /> deleniti fugiat. Ex, veniam?
                        </p>
                        <button className="bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigSale
