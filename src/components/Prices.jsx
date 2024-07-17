import React from 'react'

const Prices = () => {
  return (
    <section id="prices" className="flex items-center justify-center flex-col py-20">
            <h3 className="text-4xl text-gold font-semibold font-RobotoCondensed">OUR PRICES</h3>
            <p className="font-medium text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-between md:w-3/5 w-4/5 mt-8 md:flex-row flex-col">
                <div className="mb-4 md:w-5/12 w-full">
                    <h3 className="text-white-100 font-bold text-lg bg-black inline-block py-1 px-2 uppercase mb-2">Hair cut</h3>
                    <div className="mb-2 pt-4">
                        <div className="flex justify-between">
                            <h5 className='font-bold text-xl'>Haircut</h5>
                            <h6 className='font-bold text-lg'>$20</h6>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="mb-2 pt-4">
                        <div className="flex justify-between">
                            <h5 className='font-bold text-xl'>Clipper Cut</h5>
                            <h6 className='font-bold text-lg'>$10</h6>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="mb-2 pt-4">
                        <div className="flex justify-between">
                            <h5 className='font-bold text-xl'>Skin Fade </h5>
                            <h6 className='font-bold text-lg'>$15</h6>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="mb-2 pt-4">
                        <div className="flex justify-between">
                            <h5 className='font-bold text-xl'>Hot Towel Head Shave </h5>
                            <h6 className='font-bold text-lg'>$25</h6>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className="md:w-5/12 w-full">
                    <h3 className="text-white-100 font-bold text-lg bg-black inline-block py-1 px-2 uppercase mb-2">Shave</h3>
                    <div className="mb-2 pt-4">
                        <div className="flex justify-between">
                            <h5 className='font-bold text-xl'>Hot Towel Face Shave
                            </h5>
                            <h6 className='font-bold text-lg'>$30</h6>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="mb-2 pt-4">
                        <div className="flex justify-between">
                            <h5 className='font-bold text-xl'>Beard Trim
                            </h5>
                            <h6 className='font-bold text-lg'>$35</h6>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="mb-2 pt-4">
                        <div className="flex justify-between">
                            <h5 className='font-bold text-xl'>Beard Styling
                            </h5>
                            <h6 className='font-bold text-lg'>$12</h6>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="mb-2 pt-4">
                        <div className="flex justify-between">
                            <h5 className='font-bold text-xl'>Line Up
                            </h5>
                            <h6 className='font-bold text-lg'>$18</h6>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Prices