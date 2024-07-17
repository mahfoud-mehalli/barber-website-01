import React from "react";
import beard from "../imgs/beard.png";
import bottle from "../imgs/bottle.png";
import hairDrayer from "../imgs/hair-dryer.png";
import blade from "../imgs/blade.png";
import scissors from "../imgs/scissors.png";

const Services = () => {
  return (
    <div id="services">
      <section
        className="flex justify-center items-center flex-col py-20"
      >
        <div className="w-4/6 flex items-center flex-col">
          <h3 className="text-4xl text-gold font-semibold font-RobotoCondensed">
            OUR SERVICES
          </h3>
          <p className="font-medium text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex justify-center items-center flex-wrap mt-8">
            <div className="card text-center m-3">
              <img src={scissors} alt="" className="mx-auto mb-2" />
              <h4 className="text-2xl font-semibold">Basic Haircut</h4>
              <p className="p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur imperdiet hendrerit volutpat.
              </p>
            </div>
            <div className="card text-center m-3">
              <img src={blade} alt="" className="mx-auto mb-2" />
              <h4 className="text-2xl font-semibold">Classic Shave</h4>
              <p className="p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur imperdiet hendrerit volutpat.
              </p>
            </div>
            <div className="card text-center m-3">
              <img src={hairDrayer} alt="" className="mx-auto mb-2" />
              <h4 className="text-2xl font-semibold">Hair Wash</h4>
              <p className="p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur imperdiet hendrerit volutpat.
              </p>
            </div>
            <div className="card text-center m-3">
              <img src={bottle} alt="" className="mx-auto mb-2" />
              <h4 className="text-2xl font-semibold">Hair Repair</h4>
              <p className="p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur imperdiet hendrerit volutpat.
              </p>
            </div>
            <div className="card text-center m-3">
              <img src={beard} alt="" className="mx-auto mb-2" />
              <h4 className="text-2xl font-semibold">Beard Shave</h4>
              <p className="p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur imperdiet hendrerit volutpat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full hero3-image h-[400px] flex justify-center items-center flex-col text-white-200 text-center">
          <h3 className="md:text-2xl text-xl mb-10 font-bold">
            Looking good, lorem ipsum dolor sit amet, consetetur adipiscing
            elit. Phasellus blandit massa.
          </h3>
          <small className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            imperdiet hendrerit volutpat.
          </small>
      </section>
    </div>
  );
};

export default Services;
