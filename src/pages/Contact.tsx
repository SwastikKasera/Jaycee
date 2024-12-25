import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { LuFacebook, LuInstagram, LuMail, LuMapPin, LuPhoneCall, LuYoutube } from 'react-icons/lu';
import shape1 from "../styles/images/shape/shape-1.png";
import shape4 from "../styles/images/shape/shape-4.png";
import shape54 from "../styles/images/shape/shape-54.png";
import shape55 from "../styles/images/shape/shape-55.png";
import shape56 from "../styles/images/shape/shape-56.png";
import shape57 from "../styles/images/shape/shape-57.png";
import shape58 from "../styles/images/shape/shape-58.png";
import shape43 from "../styles/images/shape/shape-43.png";
import "../styles/css/module-css/contact.css"
import "../styles/css/module-css/page-title.css"

const Contact: React.FC = () => {
  useEffect(() => {
      const script = document.createElement("script");
      script.src = "/js/script.js"; // Updated path
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }, []);

    const [formData, setFormData] = useState({
      firstName: '',
      phone: '',
      message: '',
      subject: '',
      email: '',
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
          setFormData({ firstName: '', phone: '', message: '', email:'', subject: '' });
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
    <>
    <section className="page-title">
            <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: `url(${shape54})`}}></div>
                <div className="pattern-2 img_yellow_filter" style={{backgroundImage: `url(${shape55})`}}></div>
                <div className="pattern-3 img_yellow_filter" style={{backgroundImage: `url(${shape43})`}}></div>
                <div className="pattern-4" style={{backgroundImage: `url(${shape4})`}}></div>
                <div className="pattern-5" style={{backgroundImage: `url(${shape56})`}}></div>
                <div className="pattern-6" style={{backgroundImage: `url(${shape57})`}}></div>
                <div className="pattern-7 rotate-me" style={{backgroundImage: `url(${shape58})`}}></div>
            </div>
            <div className="auto-container">
                <div className="inner-box">
                    <div className="content-box">
                        <h1>Contact Us</h1>
                        <ul className="bread-crumb">
                            <li><a href="index.html">Home</a></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="curve-text">
                        <div className="icon-box"><img src="assets/images/icons/icon-2.png" alt=""/></div>
                        <div className="shape img_yellow_filter" style={{backgroundImage: `url(${shape1})`}}></div>
                        <span className="curved-circle">Jaycee&nbsp;&nbsp;Bal&nbsp;&nbsp;Mandir&nbsp;&nbsp;School&nbsp;&nbsp;</span>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="contact-info-section pt_120 pb_120">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                        <div className="form-inner mr_85">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.608036553826!2d82.55739037455032!3d25.148939177741983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc18a2bdbcb0d%3A0xc951eacdb57569b8!2sJaycee%20Bal%20Mandir%2CMusaffarganj%2CMirzapur!5e0!3m2!1sen!2sin!4v1735102936713!5m2!1sen!2sin" width="600" height="535" style={{border:0, width:"100%"}} aria-hidden="false"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 info-column">
                        <div className="info-inner">
                            <div className="sec-title mb_40">
                                <span className="sub-title">Contact us</span>
                                <h2>Contact Us for any Enquiry</h2>
                            </div>
                            <div className="info-content">
                                <ul className="info-list clearfix">
                                    <li>
                                        <div className="icon-box flex justify-center items-center"><LuPhoneCall className='text-black' size={26}/></div>
                                        <span>Phone Number</span>
                                        <h3><a href="tel:9415679969">(+91) 9415679969</a> call</h3>
                                        <h3><a href="tel:05442220531">05442 - 220 - 531</a> call</h3>
                                    </li>
                                    <li>
                                        <div className="icon-box flex justify-center items-center"><LuMail className='text-black' size={26}/></div>
                                        <span>Our Email</span>
                                        <h3><a href="mailto:Help.info@gmail.com">info@jaycee.com</a></h3>
                                    </li>
                                    <li>
                                        <div className="icon-box flex justify-center items-center"><LuMapPin className='text-black' size={26}/></div>
                                        <span>Our Location</span>
                                        <h3>Mussafarganj, Mirzapur, Uttar Pradesh 231001</h3>
                                    </li>
                                </ul>
                                <ul className="social-links clearfix">
                                    <li><a className='justify-center items-center' style={{display:"flex"}} href="contact.html"><LuInstagram/></a></li>
                                    <li><a className='justify-center items-center' style={{display:"flex"}} href="contact.html"><LuYoutube/></a></li>
                                    <li><a className='justify-center items-center' style={{display:"flex"}} href="contact.html"><LuFacebook/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="contact-section pb_120">
            <div className="auto-container">
                <div className="form-inner">
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit} id="contact-form">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <label>Your Name</label>
                                <input value={formData.firstName} onChange={handleInputChange} type="text" name="firstName" placeholder="Your Name" required/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <label>Your email</label>
                                <input value={formData.email} onChange={handleInputChange} type="email" name="email" placeholder="Your email" required/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <label>Phone</label>
                                <input value={formData.phone} onChange={handleInputChange} type="text" name="phone" required placeholder="Phone"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <label>Subject</label>
                                <input value={formData.subject} onChange={handleInputChange} type="text" name="subject" required placeholder="Subject"/>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <label>Type message</label>
                                <textarea value={formData.message} onChange={handleInputChange} name="message" placeholder="Type message"></textarea>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 text-column">
                                <p><span>*</span> Call us or fill out the form below to enquire.</p>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                <button className="theme-btn btn-one" type="submit" name="submit-form"><span>Send Message</span></button>
                            </div>
                            {submitStatus === 'success' && (
                              <p className="mt-4 text-green-600 font-karla" role="status">Form submitted successfully!</p>
                            )}
                            {submitStatus === 'error' && (
                              <p className="mt-4 text-red-600 font-karla" role="alert">Error submitting form. Please try again.</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
  );
};

export default Contact;