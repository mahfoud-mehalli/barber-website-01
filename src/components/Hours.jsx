import React from 'react'

const Hours = () => {
  return (
    <div id="hours">
      <section className="flex justify-center items-center flex-col py-20">
        <div className="w-4/6 flex items-center flex-col">
          <h3 className="text-4xl text-gold font-semibold font-RobotoCondensed">
            WORKING HOURS
          </h3>
          <p className="font-medium text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex justify-center items-center flex-wrap my-8 md:gap-10 gap-4">
            <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Mon</h3>
                <small>
                    10:00 AM <br/>
                    TO <br/>
                    8:00 PM
                </small>
            </div>
            <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Tue</h3>
                <small>
                    10:00 AM <br/>
                    TO <br/>
                    8:00 PM
                </small>
            </div>
            <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Wed</h3>
                <small>
                    10:00 AM <br/>
                    TO <br/>
                    8:00 PM
                </small>
            </div>
            <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Thr</h3>
                <small>
                    10:00 AM <br/>
                    TO <br/>
                    8:00 PM
                </small>
            </div>
            <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Fri</h3>
                <small>
                    10:00 AM <br/>
                    TO <br/>
                    8:00 PM
                </small>
            </div>
            <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Sat</h3>
                <small>
                    10:00 AM <br/>
                    TO <br/>
                    8:00 PM
                </small>
            </div>
            <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Sun</h3>
                <small>
                    <br/>
                    <br/>
                    Closed
                </small>
            </div>
          </div>

          <div className="flex justify-center bg-dark text-white-200 w-3/5 text-2xl font-bold py-6">
            <h2 className="ms-4 bold-text-h">
              RESERVATION? CALL US
            </h2>
            <h2 className="ps-5">
              <a href="tel:+916209220442" className="phone">+1 6209220442</a>
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full hero2-image h-[400px] flex justify-center items-center flex-col text-white-200 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="7em" height="7em" viewBox="0 0 24 24" className="fill-current text-white">
            <path fill="#fff" d="M16.372 11.621c1.57 0 2.628 1.092 2.628 2.71C19 15.787 17.784 17 16.137 17C14.333 17 13 15.544 13 13.32c0-5.055 3.686-7.077 6-7.32v2.224c-1.569.283-3.333 1.86-3.412 3.6c.079-.04.392-.203.784-.203Zm-7.999 0c1.568 0 2.627 1.092 2.627 2.71C11 15.787 9.784 17 8.137 17C6.333 17 5 15.544 5 13.32C5 8.265 8.686 6.243 11 6v2.224c-1.569.283-3.333 1.86-3.412 3.6c.079-.04.392-.203.785-.203Z"/>
          </svg>
          <h3 className="md:text-2xl text-xl mt-2 font-bold">
            “ Lorem ipsum dolor sit amet, <br /> consetetur adipiscing elit.
            Phasellus blandit massa. ”
          </h3>
          <small className="mt-4 text-2xl font-RobotoCondensed">- Josh Doe -</small>
      </section>
    </div>
  )
}

export default Hours