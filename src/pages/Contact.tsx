import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { LuPhone } from 'react-icons/lu';
import Button from '../components/Button';

const ContactForm = React.memo(() => {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contact-forms`,
        { data: formData },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSubmitStatus('success');
        setFormData({ firstName: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mb-4">
        <label htmlFor="firstName" className="leading-7 text-sm font-karla text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full bg-neutral-50 font-karla rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
          aria-required="true"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm font-karla text-gray-600">
          Phone No.
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full font-karla bg-neutral-50 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
          aria-required="true"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm font-karla text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full font-karla bg-neutral-50 rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          required
          aria-required="true"
        ></textarea>
      </div>
      <Button
        styles='w-full hover:bg-blue-900 hover:transition-colors'
        text={isSubmitting ? 'Submitting...' : 'Contact Us'} 
        key={'contact_us'} 
        icon={<LuPhone />} 
        hasIcon={false} 
        onClick={() => {}} 
        type="submit"
        disabled={isSubmitting}
      />
      {submitStatus === 'success' && (
        <p className="mt-4 text-green-600 font-karla" role="status">Form submitted successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-4 text-red-600 font-karla" role="alert">Error submitting form. Please try again.</p>
      )}
    </form>
  );
});

const Contact: React.FC = () => {
  return (
    <section className="text-gray-600 bg-background body-font relative pt-6">
      <h1 className='text-secondary font-semibold text-center text-5xl font-vidaloka'>Contact Us</h1>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14446.432143580563!2d82.5599653!3d25.1489392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc18a2bdbcb0d%3A0xc951eacdb57569b8!2sjaycee%20bal%20mandir!5e0!3m2!1sen!2sin!4v1714237408596!5m2!1sen!2sin&zoom=15"
            loading="lazy"
          ></iframe>
          <div className="bg-neutral-50 w-full relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs font-martel">ADDRESS</h2>
              <p className="mt-1 font-karla">Mussafarganj, Mirzapur - 231001</p>
              <p>Uttar Pradesh</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs font-martel">EMAIL</h2>
              <a href="mailto:contact@jaycee.com" className="text-primary leading-relaxed font-karla">contact@jaycee.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs font-martel mt-4">PHONE</h2>
              <p className="leading-relaxed font-karla">05442-220-531, +91 94156 79969</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-background flex flex-col md:ml-auto w-full mt-8 md:mt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;