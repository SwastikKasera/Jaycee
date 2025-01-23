import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../styles/images/shape/shape-1.png";
import image2 from "../styles/images/shape/shape-2.png";
import image3 from "../styles/images/shape/shape-3.png";
import image4 from "../styles/images/shape/shape-4.png";
import image5 from "../styles/images/shape/shape-5.png";
import image6 from "../styles/images/shape/shape-6.png";
import image7 from "../styles/images/shape/shape-7.png";
import image8 from "../styles/images/shape/shape-8.png";
import image9 from "../styles/images/shape/shape-9.png";
import image10 from "../styles/images/shape/shape-10.png";
import image13 from "../styles/images/shape/shape-13.png";
import image14 from "../styles/images/shape/shape-14.png";
import image15 from "../styles/images/shape/shape-15.png";
import image16 from "../styles/images/shape/shape-16.png";
import image17 from "../styles/images/shape/shape-17.png";
import image18 from "../styles/images/shape/shape-18.png";
import image19 from "../styles/images/shape/shape-19.png";
import image20 from "../styles/images/shape/shape-20.png";
import image33 from "../styles/images/shape/shape-33.png";
import banner1 from "../styles/images/banner/banner-img-1.jpg"
import schoolPic1 from "../assets/school_pic_1.jpg"
import principlePic from "../assets/sqp.jpg"
import chooseUs2 from "../assets/What_We_Do_The_Best.jpg"
import chooseUs3 from "../assets/choose_3.jpg"
import icon2 from "../assets/sixty_years.png"
import icon4 from "../styles/images/icons/icon-4.png"
import icon5 from "../styles/images/icons/icon-5.png"
import icon6 from "../styles/images/icons/icon-6.png"
import icon7 from "../styles/images/icons/icon-7.png"
import icon8 from "../styles/images/icons/icon-8.png"
import icon9 from "../styles/images/icons/icon-9.png"
import icon10 from "../styles/images/icons/icon-10.png"
import icon11 from "../styles/images/icons/icon-11.png"
import icon12 from "../styles/images/icons/icon-12.png"
import icon13 from "../styles/images/icons/icon-13.png"
import icon14 from "../styles/images/icons/icon-14.png"
import icon15 from "../styles/images/icons/icon-15.png"
import icon16 from "../styles/images/icons/icon-16.png"
import icon17 from "../styles/images/icons/icon-17.png"
import icon20 from "../styles/images/icons/icon-20.png"
import icon30 from "../styles/images/icons/icon-30.png"
import videoBg from "../assets/bg.jpg"
import heroImg from "../assets/hero_img.png"
import glimpse1 from "../assets/glimpse_1.jpg"
import glimpse2 from "../assets/glimpse_2.jpg"
import glimpse3 from "../assets/glimpse_3.jpg"
import glimpse4 from "../assets/glimpse_4.jpg"
import glimpse5 from "../assets/glimpse_5.jpg"
import glimpse6 from "../assets/glimpse_6.jpg"
import glimpse7 from "../assets/glimpse_7.jpg"
import { LuMoveUpRight } from "react-icons/lu";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/script.js"; // Updated path
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  
  return (
    <>
      <div className="boxed_wrapper">
        <div className="mouse-pointer" id="mouse-pointer"></div>
        <div id="search-popup" className="search-popup">
          <div className="popup-inner">
            <div className="upper-box clearfix">
              <figure className="logo-box pull-left">
                <a href="/">
                  <img src="assets/images/logo-2.png" alt="" />
                </a>
              </figure>
              <div className="close-search pull-right">
                <span className="fas fa-times"></span>
              </div>
            </div>
            <div className="overlay-layer"></div>
            <div className="auto-container">
              <div className="search-form">
                <form method="post" action="index.html">
                  <div className="form-group">
                    <fieldset>
                      <input
                        type="search"
                        className="form-control"
                        name="search-input"
                        value=""
                        placeholder="Type your keyword and hit"
                        required
                      />
                      <button type="submit">
                        <i className="icon-1"></i>
                      </button>
                    </fieldset>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="xs-sidebar-group info-group info-sidebar">
          <div className="xs-overlay xs-bg-black"></div>
          <div className="xs-overlay xs-overlay-2 xs-bg-black"></div>
          <div className="xs-overlay xs-overlay-3 xs-bg-black"></div>
          <div className="xs-overlay xs-overlay-4 xs-bg-black"></div>
          <div className="xs-overlay xs-overlay-5 xs-bg-black"></div>
          <div className="xs-sidebar-widget">
            <div className="sidebar-widget-container">
              <div className="widget-heading">
                <a href="/" className="close-side-widget">
                  X
                </a>
              </div>
              <div className="sidebar-textwidget">
                <div className="sidebar-info-contents">
                  <div className="content-inner">
                    <div className="logo">
                      <a href="/">
                        <img src="assets/images/logo-2.png" alt="" />
                      </a>
                    </div>
                    <div className="text">
                      <h3>We Are Creative Digital Agency.</h3>
                      <p>
                        Our experienced team offers services for both
                        residential and commercial properties.With over 25 years
                        of experience in the industry, we boast all of the
                        knowledge and expertise in repairing.
                      </p>
                    </div>
                    <div className="info-box">
                      <h3>Conatct Us</h3>
                      <ul className="info clearfix">
                        <li>
                          <div className="icon">
                            <i className="icon-37"></i>
                          </div>
                          54B, Tailstoi Town 5238 MT, La city, IA 522364
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-36"></i>
                          </div>
                          <a href="/">contact@example.com</a>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-35"></i>
                          </div>
                          <a href="/">+1800 456 7890</a>
                        </li>
                      </ul>
                    </div>
                    <div className="subscribe-inner">
                      <h3>Newsletter Subscription</h3>
                      <form action="contact.html" method="post">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Email Address"
                          />
                          <button type="submit" className="theme-btn">
                            subscribe now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className="main-header">
          <div className="header-lower">
            <div className="outer-container">
              <div className="outer-box">
                <div className="left-column">
                  <div className="logo-box">
                    <figure className="logo">
                      <a href="/">
                        <img src="assets/images/logo.png" alt="" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <i className="fas fa-times"></i>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <a href="/">
                <img src="assets/images/logo.png" alt="" title="" />
              </a>
            </div>
            <div className="menu-outer"></div>
            <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                <li>Chicago 12, Melborne City, USA</li>
                <li>
                  <a href="/">+88 01682648101</a>
                </li>
                <li>
                  <a href="/">info@example.com</a>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="/">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-facebook-square"></span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-pinterest-p"></span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-youtube"></span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <section className="banner-section p_relative">
          <div className="pattern-layer">
            <div
              className="pattern-1 rotate-me"
              style={{ backgroundImage: `url(${image2})` }}
            ></div>
            <div
              className="pattern-2"
              style={{ backgroundImage: `url(${image3})` }}
            ></div>
            <div
              className="pattern-3"
              style={{ backgroundImage: `url(${image4})` }}
            ></div>
            <div
              className="pattern-4"
              style={{ backgroundImage: `url(${image5})` }}
            ></div>
            <div
              className="pattern-5 float-bob-y"
              style={{ backgroundImage: `url(${image6})` }}
            ></div>
            <div
              className="pattern-6"
              style={{ backgroundImage: `url(${image7})` }}
            ></div>
            <div
              className="pattern-7 img_dark_yellow_filter"
              style={{ backgroundImage: `url(${image8})` }}
            ></div>
            <div
              className="pattern-8 img_yellow_filter"
              style={{ backgroundImage: `url(${image9})` }}
            ></div>
            <div
              className="pattern-9"
              style={{ backgroundImage: `url(${image10})` }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="content-box">
              <div className="curve-text">
                <div className="icon-box">
                  <img className="w-20" src={icon2} alt="" />
                </div>
                <div
                  className="shape img_yellow_filter"
                  style={{ backgroundImage: `url(${image1})` }}
                ></div>
                <span className="curved-circle">
                  Jaycee&nbsp;&nbsp;Bal&nbsp;&nbsp;Mandir&nbsp;&nbsp;School&nbsp;&nbsp;
                </span>
              </div>
              <h2>
                Empowering Minds Shaping <span>Futures.</span>
              </h2>
              <div className="inner-box">
                <p>
                Discover a world of learning, creativity, and excellence at Jaycee—where every student’s potential is nurtured and dreams take flight.
                </p>
                <figure className="image flex justify-center lg:block">
                  <img src={heroImg} className="md:w-[250px] w-[200px]" alt="" />
                </figure>
              </div>
              <div className="video-btn">
                <a href="/" className="lightbox-image" data-caption="">
                  <i className="icon-3"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="image-box">
            <figure className="image">
              <img src={schoolPic1} className="rounded-2xl" alt="" />
            </figure>
          </div>
        </section>

        <section className="about-section">
          <div className="auto-container">
            <div className="title-box mb_110">
              <div className="row clearfix">
                <div className="col-lg-9 col-md-12 col-sm-12 title-column">
                  <div className="title-text">
                    <span className="sub-title mb_12">Building Bright Futures Since 1964</span>
                    <h2>
                    Jaycee is a beacon of education, dedicated to nurturing curious minds and fostering creativity. Our mission is to provide a holistic learning environment that empowers students to excel academically and socially.
                    </h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 text-column">
                  <div className="text-box mt_35">
                  </div>
                </div>
              </div>
            </div>
            <div className="lower-content">
              <div className="row clearfix">
                <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                  <div className="image-box">
                    <figure className="image">
                      <img src={principlePic} className="rounded-3xl" alt="" />
                    </figure>
                    <div className="btn-box">
                      <div className="shape"></div>
                      <a href="https://res.cloudinary.com/dxlqy4p04/image/upload/v1737617888/principle_period_179bed67af.jpg" target="_blank">
                        <span>Principle Period</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 inner-column">
                  <div className="inner-box ml_110">
                    <div className="single-item">
                      <div className="inner">
                        <div className="icon-box">
                          <img className="img_yellow_filter" src={icon4} alt="" />
                        </div>
                        <p>
                          Student Success <br />
                          <span>95%</span> achieved
                        </p>
                      </div>
                    </div>
                    <div className="single-item">
                      <div className="inner">
                        <div className="icon-box">
                          <img className="img_yellow_filter" src={icon5} alt="" />
                        </div>
                        <p>
                          Years Of Experience <br />
                          <span>50+</span> Years
                        </p>
                      </div>
                    </div>
                    <div className="single-item">
                      <div className="inner">
                        <div className="icon-box">
                          <img className="img_black_filter" src={icon6} alt="" />
                        </div>
                        <p className="text-black">
                        Holistic Development <br />
                        Beyond Academics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="pattern-layer">
            <div
              className="pattern-1 img_yellow_filter"
              style={{ backgroundImage: `url(${image13})` }}
            ></div>
            <div
              className="pattern-2"
              style={{ backgroundImage: `url(${image14})` }}
            ></div>
          </div>
          <div className="outer-container">
            <div className="sec-title centred pl_15 pr_15">
              <div className="icon-box">
                <img className="img_yellow_filter" src={icon7} alt="" />
              </div>
              <h2>Our Educational Focus Areas</h2>
              <p>
                Shaping tomorrow's leaders through comprehensive development
              </p>
            </div>
            <div className="lower-content">
              <div className="auto-container">
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <div className="icon">
                            <img src={icon8} alt="" />
                          </div>
                          <div className="icon-two">
                            <img className="img_yellow_filter" src={icon9} alt="" />
                          </div>
                        </div>
                        <h3>
                          <a href="/">Curriculum Planning & Development</a>
                        </h3>
                        <div className="link">
                          <a href="/">
                            <i className="icon-13"><LuMoveUpRight/></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <div className="icon">
                            <img src={icon10} alt="" />
                          </div>
                          <div className="icon-two">
                            <img className="img_yellow_filter" src={icon30} alt="" />
                          </div>
                        </div>
                        <h3>
                          <a href="/">Educational Technology Integration</a>
                        </h3>
                        <div className="link">
                          <a href="/">
                            <i className="icon-13"><LuMoveUpRight/></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <div className="icon">
                            <img src={icon11} alt="" />
                          </div>
                          <div className="icon-two">
                            <img className="img_yellow_filter" src={icon12} alt="" />
                          </div>
                        </div>
                        <h3>
                          <a href="/">Digital Presence & Communication</a>
                        </h3>
                        <div className="link">
                          <a href="/">
                            <i className="icon-13"><LuMoveUpRight/></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <div className="icon">
                            <img src={icon13} alt="" />
                          </div>
                          <div className="icon-two">
                            <img className="img_yellow_filter" src={icon14} alt="" />
                          </div>
                        </div>
                        <h3>
                          <a href="/">Co-Curricular Excellence</a>
                        </h3>
                        <div className="link">
                          <a href="/">
                            <i className="icon-13"><LuMoveUpRight/></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="chooseus-section pt_120 pb_110">
          <div
            className="pattern-layer img_yellow_filter"
            style={{ backgroundImage: `url(${image33})` }}
          ></div>
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_one">
                  <div className="image-box">
                    <div className="image-shape">
                      <div className="shape-1"></div>
                      <div
                        className="shape-2"
                        style={{ backgroundImage: `url(${image14})` }}
                      ></div>
                      <div
                        className="shape-3"
                        style={{ backgroundImage: `url(${image15})` }}
                      ></div>
                      <div
                        className="shape-4 img_yellow_filter"
                        style={{ backgroundImage: `url(${image16})` }}
                      ></div>
                    </div>
                    <figure className="image image-2 lg:w-[500px]">
                      <img src={chooseUs2} className="w-[500px] h-[631px] rounded-2xl" alt="" />
                    </figure>
                    {/* <figure className="image image-3">
                      <img src={chooseUs3} className="w-[354px] h-[240px] rounded-2xl" alt="" />
                    </figure> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box ml_80">
                    <div className="sec-title mb_40">
                      <span className="sub-title">Shaping Leaders of Tomorrow.</span>
                      <h2>What We Do The Best</h2>
                    </div>
                    <div className="inner-box">
                      <div className="single-item">
                        <div className="icon-box">
                          <img src={icon15} alt="" />
                        </div>
                        <h3>
                        Nurturing Holistic Growth <span>01</span>
                        </h3>
                        <p>
                        Our comprehensive approach focuses on developing well-rounded individuals through academic excellence, character building, and personal growth opportunities.
                        </p>
                        <div className="link">
                          <a href="/">
                            <i className="icon-13"></i>
                          </a>
                        </div>
                      </div>
                      <div className="single-item">
                        <div className="icon-box">
                          <img src={icon16} alt="" />
                        </div>
                        <h3>
                        Embracing Innovation <span>02</span>
                        </h3>
                        <p>
                        We provide smart classrooms, digital learning tools, and innovative teaching techniques that prepare students for an increasingly digital world while maintaining the essence of traditional learning values.
                        </p>
                        <div className="link">
                          <a href="/">
                            <i className="icon-13"></i>
                          </a>
                        </div>
                      </div>
                      <div className="single-item">
                        <div className="icon-box">
                          <img src={icon17} alt="" />
                        </div>
                        <h3>
                          Brand With Expert Service <span>03</span>
                        </h3>
                        <p>
                        Our expert faculty delivers exceptional learning experiences through their dedicated expertise. Every educator is carefully selected and trained to provide personalized attention while maintaining high standards.
                        </p>
                        <div className="link">
                          <a href="/">
                            <i className="icon-13"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <div className="auto-container">
            <div className="sec-title mb_55">
              <div className="icon-box">
                <img className="img_yellow_filter" src={icon7} alt="" />
              </div>
              <h2>Event Glimse & Highlights</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry the <br />
                standard dummy text ever since the when an printer took.
              </p>
            </div>
          </div>
          <div className="outer-container">
            <div className="gallery-carousel owl-carousel owl-theme owl-dots-none">
              <div className="gallery-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={glimpse1} alt="" />
                    </figure>
                    <div className="link-btn">
                      <a href="/">
                        <i className="icon-13"></i>
                      </a>
                    </div>
                  </div>
                  <div className="lower-content">
                    <p className="text-white font-bold mt-2">Inaugration Ceremony</p>
                  </div>
                </div>
              </div>
              <div className="gallery-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={glimpse2} alt="" />
                    </figure>
                    <div className="link-btn">
                      <a href="/">
                        <i className="icon-13"></i>
                      </a>
                    </div>
                  </div>
                  <div className="lower-content">
                    <p className="text-white font-bold mt-2">Diwali Celebration</p>
                  </div>
                </div>
              </div>
              <div className="gallery-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={glimpse3} alt="" />
                    </figure>
                    <div className="link-btn">
                      <a href="/">
                        <i className="icon-13"></i>
                      </a>
                    </div>
                  </div>
                  <div className="lower-content">
                    <p className="text-white font-bold mt-2">Independence Day Celebration</p>
                  </div>
                </div>
              </div>
              <div className="gallery-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={glimpse4} alt="" />
                    </figure>
                    <div className="link-btn">
                      <a href="/">
                        <i className="icon-13"></i>
                      </a>
                    </div>
                  </div>
                  <div className="lower-content">
                    <p className="text-white font-bold mt-2">Republic Day Celebration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-section pt_110 pb_100">
          <div className="auto-container">
            <div className="sec-title mb_55 centred mb_55">
              <div className="icon-box">
                <img src={icon7} className="img_yellow_filter" alt="" />
              </div>
              <h2>Our Testimonials</h2>
              <p>
              Discover what parents and guardians have to say about their experiences with Jaycee. <br />
              Their stories highlight the trust, care, and impact our school has had on their children&apos;s growth and success. 
              </p>
            </div>
            <div className="two-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <div className="author-box">
                    <figure className="thumb-box">
                      <img
                        src="assets/images/resource/testimonial-1.png"
                        alt=""
                      />
                    </figure>
                    <h3>Mr. Subash Sharma</h3>
                    <span className="designation">Parent / Guardian</span>
                  </div>
                  <p>
                    As a parent, I have always prioritized my child's education. This school has provided a nurturing and supportive environment where my child feels safe to explore and learn. The teachers are dedicated and approachable, making communication easy. I couldn't have asked for a better place for my child to grow.
                  </p>
                  <div className="clients-logo">
                    <img src="assets/images/clients/clients-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <div className="author-box">
                    <figure className="thumb-box">
                      <img
                        src="assets/images/resource/testimonial-2.png"
                        alt=""
                      />
                    </figure>
                    <h3>Mr. Ahmed Khan</h3>
                    <span className="designation">Parent / Guardian</span>
                  </div>
                  <p>
                  I am impressed not only by the academic curriculum
                   but also by the emphasis on holistic development. 
                   The school encourages extracurricular activities that
                    help in building confidence and teamwork. My daughter has 
                    blossomed here, participating in arts and sports, and I am grateful for that.
                  </p>
                  <div className="clients-logo">
                    <img src="assets/images/clients/clients-2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <div className="author-box">
                    <figure className="thumb-box">
                      <img
                        src="assets/images/resource/testimonial-1.png"
                        alt=""
                      />
                    </figure>
                    <h3>Mr. Atul Patel</h3>
                    <span className="designation">Parent / Guardian</span>
                  </div>
                  <p>
                  This school instills strong values and ethics in our children. It is reassuring to see my son learning about respect, honesty, and compassion alongside his studies.
                  </p>
                  <div className="clients-logo">
                    <img src="assets/images/clients/clients-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <div className="author-box">
                    <figure className="thumb-box">
                      <img
                        src="assets/images/resource/testimonial-2.png"
                        alt=""
                      />
                    </figure>
                    <h3>Mr. Yash Kumar</h3>
                    <span className="designation">Parent / Guardian</span>
                  </div>
                  <p>
                  I love how this school values open communication with parents. Regular meetings and updates keep us informed about our child's progress and school activities. It makes me feel involved in my child's education, and I appreciate that transparency.
                  </p>
                  <div className="clients-logo">
                    <img src="assets/images/clients/clients-2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <div className="author-box">
                    <figure className="thumb-box">
                      <img
                        src="assets/images/resource/testimonial-1.png"
                        alt=""
                      />
                    </figure>
                    <h3>Mrs Khushi Kumari</h3>
                    <span className="designation">Parent / Guardian</span>
                  </div>
                  <p>
                  In today&apos;s competitive world, I want my child to be prepared for future challenges. This school has a great approach to critical thinking and problem-solving skills, which I believe are essential for success. I am confident that my child is in the right hands.
                  </p>
                  <div className="clients-logo">
                    <img src="assets/images/clients/clients-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <div className="author-box">
                    <figure className="thumb-box">
                      <img
                        src="assets/images/resource/testimonial-2.png"
                        alt=""
                      />
                    </figure>
                    <h3>Mr. & Mrs. Singh</h3>
                    <span className="designation">Parent / Guardian</span>
                  </div>
                  <p>
                  I have seen a remarkable improvement in my child&apso;s academic performance since enrolling him in this school. The strong academic foundation provided by dedicated teachers is commendable. I am proud to see my son excelling in his studies and developing a love for learning.
                  </p>
                  <div className="clients-logo">
                    <img src="assets/images/clients/clients-2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <div className="author-box">
                    <figure className="thumb-box">
                      <img
                        src="assets/images/resource/testimonial-1.png"
                        alt=""
                      />
                    </figure>
                    <h3>Mrs. Gupta</h3>
                    <span className="designation">Parent / Guardian</span>
                  </div>
                  <p>
                  My son has been studying here for the past three years, and I have seen significant improvement in his academics. The teachers are very supportive, and they make learning enjoyable. I'm happy with his progress.
                  </p>
                  <div className="clients-logo">
                    <img src="assets/images/clients/clients-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-18"></i>
                  </div>
                  <div className="author-box">
                    <figure className="thumb-box">
                      <img
                        src="assets/images/resource/testimonial-2.png"
                        alt=""
                      />
                    </figure>
                    <h3>Mrs. Sharma</h3>
                    <span className="designation">Parent / Guardian</span>
                  </div>
                  <p>
                  I appreciate the variety of extracurricular activities offered here. My son has developed a keen interest in sports and music. It's great to see him balancing studies with hobbies. This school encourages all-round development
                  </p>
                  <div className="clients-logo">
                    <img src="assets/images/clients/clients-2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section pt_80 pb_80">
          <div className="pattern-layer">
            <div
              className="pattern-1 img_dark_yellow_filter"
              style={{ backgroundImage: `url(${image17})` }}
            ></div>
            <div
              className="pattern-2"
              style={{ backgroundImage: `url(${image18})` }}
            ></div>
            <div
              className="pattern-3"
              style={{ backgroundImage: `url(${image19})` }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="inner-box">
              <h2>
              Let&apos;s Shape the Future  <br />
              Together
              </h2>
              <div className="btn-box">
                <div className="shape"></div>
                <a href="/contact">
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="video-section">
          <div className="bg-layer" style={{ backgroundImage: `url(${image10})` }}></div>
          <div className="bg-layer" style={{ backgroundImage: `url(${videoBg})` }}></div>
          
          <div className="pattern-layer-2"></div>
          <div className="auto-container">
            <div className="content-box">
              <div className="text-box">
                <h2>
                  {" "}
                  School <span>Highlights</span>
                  <i className="icon-2"></i>
                </h2>
              </div>
              <div className="curve-text">
                <div className="icon-box">
                  <a href="/" className="lightbox-image" data-caption="">
                    <img className="w-20" src={icon2} alt="" />
                  </a>
                </div>
                <div
                  className="shape img_yellow_filter"
                  style={{ backgroundImage: `url(${image1})` }}
                ></div>
                <span className="curved-circle">
                  Jaycee&nbsp;&nbsp;Bal&nbsp;&nbsp;Mandir&nbsp;&nbsp;School&nbsp;&nbsp;
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="working-section pt_110 pb_90 centred">
          <div className="pattern-layer"></div>
          <div className="auto-container">
            <div className="sec-title mb_55 centred mb_55">
              <div className="icon-box">
                <img src={icon7} className="img_yellow_filter" alt="" />
              </div>
              <h2>Our Approach to Education</h2>
              <p>
              At our school, we believe in nurturing young minds through a balanced approach to education. <br />
              Our methods are designed to foster both academic excellence and personal growth.
              </p>
            </div>
            <div className="row clearfix">
              <div className="col-xl-4 col-lg-6 col-md-12 working-block">
                <div className="working-block-one">
                  <div className="shape"></div>
                  <div className="inner-box">
                    <div className="icon-box">
                      <span className="count-text">01</span>
                      <div className="icon">
                        <img className="img_yellow_filter" src={icon20} alt="" />
                      </div>
                    </div>
                    <h3>
                      <a href="/">Research-Based Learning</a>
                    </h3>
                    <span className="step-text">First Approach</span>
                    <p>
                    We emphasize <strong>research-based learning</strong>, encouraging students to explore subjects deeply 
                    and develop critical thinking skills. This approach prepares them for real-world challenges.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 working-block">
                <div className="working-block-one">
                  <div className="shape"></div>
                  <div className="inner-box">
                    <div className="icon-box">
                      <span className="count-text">02</span>
                      <div className="icon">
                        <img className="img_yellow_filter" src={icon20} alt="" />
                      </div>
                    </div>
                    <h3>
                      <a href="/">Hands-On Learning</a>
                    </h3>
                    <span className="step-text">2nd Approach</span>
                    <p>
                    Our <strong>hands-on learning</strong> approach allows students to engage with the material actively, 
                    making education more enjoyable and effective. We incorporate practical activities in our curriculum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 working-block">
                <div className="working-block-one">
                  <div className="shape"></div>
                  <div className="inner-box">
                    <div className="icon-box">
                      <span className="count-text">03</span>
                      <div className="icon">
                        <img className="img_yellow_filter" src={icon20} alt="" />
                      </div>
                    </div>
                    <h3>
                      <a href="/">Character Development</a>
                    </h3>
                    <span className="step-text">3rd Approach</span>
                    <p>
                    We focus on <strong>character development</strong>, teaching values such as respect, empathy, and responsibility. 
                    Our goal is to shape well-rounded individuals who contribute positively to society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="slide-text">
          <div
            className="pattern-layer"
            style={{ backgroundImage: `url(${image20})` }}
          ></div>
          <div className="big-text">
            <span className="white_text">Discipline . </span>
            <span className="text_stroke">Academics . </span>
            <span className="theme_color">excellence . </span>
            <span className="text_stroke">Education . </span>
            <span className="white_text">Idea . </span>
            <span className="theme_color">Innovative</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;