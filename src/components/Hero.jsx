import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero-image">
      <div className="w-full h-screen flex items-center justify-center flex-col gap-4 text-white-200">
        <p className="md:text-2xl text-xl tracking-wider font-medium">Mahfoud bem</p>
        <h1 className="md:text-8xl text-5xl font-semibold tracking-wide mb-4">BARBER SHOP</h1>
        <p className="md:text-xl text-lg bg-gold md:py-2 md:px-6 py-1 px-3 font-medium">UNITED KINGDOM | +1 6209220442</p>
      </div>
    </section>
  );
};

export default Hero;
