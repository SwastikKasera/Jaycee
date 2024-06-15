import React from 'react';
import { LuPhone } from 'react-icons/lu';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <>
    <section className="text-gray-600 body-font relative">
      <h2 className='text-4xl text-secondary font-semibold text-center mt-4'>Contact Us</h2>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14446.432143580563!2d82.5599653!3d25.1489392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc18a2bdbcb0d%3A0xc951eacdb57569b8!2sjaycee%20bal%20mandir!5e0!3m2!1sen!2sin!4v1714237408596!5m2!1sen!2sin"
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Near Kali Mandir, Mussafarganj, Mirzapur, Uttar Pradesh 231001</p>
            </div>

            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <p className="text-primary leading-relaxed">example@email.com</p>

              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full mt-8 md:mt-0">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Phone No.
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>

          <Button text='Contact Us' key={'contact_us'} icon={<LuPhone />} hasIcon={false} onClick={()=> console.log("clicked")} />

        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;