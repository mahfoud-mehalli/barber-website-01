import React from 'react'

const Contact = () => {
  return (

      <section id="contact" className="flex justify-center">
        <div className="md:w-3/5 w-4/5 flex gap-8 lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.84156663704!2d-0.2667462050874687!3d51.52873932357194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1721236693804!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="flex flex-col items-start lg:w-1/2 w-full gap-2">
            <h3 className="text-4xl text-gold font-semibold font-RobotoCondensed">Contact us</h3>
            <div className="flex flex-col text-white-100 text-lg font-medium gap-2">
              <a href="mailto:mahfoudmehalli12345@gmail.com">mahfoudmehalli12345@gamil.com</a>
              <a href="tel:+213540254092">+213 540-254-492</a>
            </div>
            <div className="flex flex-col w-full gap-4">
                <input className='bg-transparent py-1 border-b-[1px] pl-1 text-white-100 outline-none' type="text" placeholder="Enter your name" />
                <input className='bg-transparent py-1 border-b-[1px] pl-1 text-white-100 outline-none' type="phone" placeholder="Phone" />
                <input className='bg-transparent py-1 border-b-[1px] pl-1 text-white-100 outline-none' type="email" name="email" id="" placeholder="Enter Email" />
                <textarea className='bg-transparent py-1 border-b-[1px] pl-1 text-white-100 outline-none' name="" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="text-white-100 uppercase py-1 px-4 font-semibold text-lg bg-black">Submit</button>
          </div>
        </div>
      </section>
  )
}

export default Contact