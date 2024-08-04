import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";

import mailImg from "../assets/images/contact/mail.svg";
import phoneImg from "../assets/images/contact/mobile.svg";
import envelopeImg from "../assets/images/contact/envelope.svg";

import solutionImg from "../assets/images/contact/icon.svg";
import generalImg from "../assets/images/contact/icon-1.svg";
import careerImg from "../assets/images/contact/icon-2.svg";
import mediaImg from "../assets/images/contact/icon-3.svg";

import whiteArrow from "../assets/images/white-arrow.svg";
import pinImg from "../assets/images/contact/pin.svg";
import californiaImg from "../assets/images/contact/california.png";
import indiaImg from "../assets/images/contact/india.webp";
import germanImg from "../assets/images/contact/german.png";
import indiansalesImg from "../assets/images/contact/india-sales.webp";
import formImg from "../assets/images/contact/form-img.png";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  const [toggle, settoggle] = useState(1);
  const navigate = useNavigate();
  // modify by naoki --start
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    phone: "",
    company: "",
    country: "Afghanistan",
    message: "",
  });
  // modify by naoki --end

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log("formData :>> ", formData);

  const targetEmail = "mercurys1030@gmail.com";

  function toggleTab(index) {
    settoggle(index);
  }

  const handleRedirect = () => {
    navigate("/");
  };

  const [countryValue, setCountryValue] = useState([]);

  const handleSubmit = async (e) => {
    try {
      emailjs.init("AVwCPf3TModdUvBE-");
      e.preventDefault();

      const serviceId = "service_n7u7w6q";
      const templateId = "template_jnbx9p7";

      await emailjs.send(serviceId, templateId, formData);

      setFormData({
        firstName: "",
        lastName: "",
        businessEmail: "",
        phone: "",
        company: "",
        country: "Afghanistan",
        message: "",
      });
      toast.success("Submit Successful!");
    } catch (error) {
      console.log(error);
      toast.error("Submit Failed!");
    } finally {
    }
  };

  // useEffect(() => {
  //   fetch("https://webbitech.co.in/PHP-BETA/vista/api/get-countries")
  //     .then((response) => response.json())
  //     .then((json) => setCountryValue(json));
  // }, []);

  return (
    <div>
      {/* Header */}
      <Header />

      <ToastContainer />
      {/* Sub banner */}
      <div className="sub_banner">
        <div className="container">
          <div className="banner_content_desc">
            <h5 className="banner_subtitle">Contact</h5>
            <h1 className="banner_title">Get in touch with us</h1>
            <div className="breadcrumb_detail">
              <div className="breadcrumb_box_grey">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}

      <section className="contact_detail">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="contact_box">
                <div className="contact_content">
                  <div className="icon">
                    <img src={envelopeImg} alt="" />
                  </div>
                  <h5 className="card_title">ADDRESS</h5>
                  <p className="card_text">
                    1999 S Bascom Ave, Ste 700 | Campbell | California | USA
                    95008.
                  </p>
                  <p className="card_link">
                    <a href="">FIND ON MAP</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact_box">
                <div className="contact_content">
                  <div className="icon">
                    <img src={phoneImg} alt="" />
                  </div>
                  <h5 className="card_title">PHONE</h5>
                  <p className="card_text">Call Us On: +1 (866) 898-9971</p>
                  <p className="card_link">
                    <a href="">GET CALL BACK</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact_box">
                <div className="contact_content">
                  <div className="icon">
                    <img src={mailImg} alt="" />
                  </div>
                  <h5 className="card_title">EMAIL</h5>
                  <p className="card_text">
                    info@vistaes.com
                    <br />
                    sales@vistaes.com
                  </p>
                  <p className="card_link">
                    <a href="">SEND MAIL</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_wrapper_detail">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h2 className="contact_wrapper_title">
                Tell us what you're looking for and we'll get back to you.
              </h2>
            </div>
          </div>
          <div className="contact_wrapper_list">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="wrapper_box">
                  <div className="card_body">
                    <div className="icon">
                      <img src={solutionImg} alt="" />
                    </div>
                    <h2 className="card_title">Solutions & Services</h2>
                    <p className="card_text">
                      Get in touch to find the solution you need.
                    </p>
                    <p className="text-center mt-3 mb-0">
                      <a href="#" className="btn wrapper_btn">
                        <span>Click Here</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="wrapper_box">
                  <div className="card_body">
                    <div className="icon">
                      <img src={generalImg} alt="" />
                    </div>
                    <h2 className="card_title">General Inquiries</h2>
                    <p className="card_text">
                      Got a question or a comment? Drop us a note!
                    </p>
                    <p className="text-center mt-3 mb-0">
                      <a href="#" className="btn wrapper_btn">
                        <span>Click Here</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="wrapper_box">
                  <div className="card_body">
                    <div className="icon">
                      <img src={careerImg} alt="" />
                    </div>
                    <h2 className="card_title">Career Inquiries</h2>
                    <p className="card_text">
                      Join us & work for one of Asia's top workplaces!
                    </p>
                    <p className="text-center mt-3 mb-0">
                      <a href="#" className="btn wrapper_btn">
                        <span>Click Here</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="wrapper_box">
                  <div className="card_body">
                    <div className="icon">
                      <img src={mediaImg} alt="" />
                    </div>
                    <h2 className="card_title">Media Inquiries</h2>
                    <p className="card_text">
                      Media representatives reach us out here.
                    </p>
                    <p className="text-center mt-3 mb-0">
                      <a href="#" className="btn wrapper_btn">
                        <span>Click Here</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="form_submission">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="img_box">
                <img src={formImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box_wrapper">
                <h2 className="box_title">Tell Us About Yourself</h2>
                <form class="row g-3" onSubmit={(e) => handleSubmit(e)}>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      name="firstName"
                      value={formData?.firstName}
                      onChange={handleChange}
                      placeholder=" First Name*"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      name="lastName"
                      placeholder=" Last Name*"
                      value={formData?.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="email"
                      class="form-control"
                      name="businessEmail"
                      placeholder="Business Email*"
                      value={formData?.businessEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="number"
                      class="form-control"
                      name="phone"
                      placeholder="Phone"
                      value={formData?.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      name="company"
                      value={formData?.company}
                      onChange={handleChange}
                      placeholder="Company*"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <select
                      name="country"
                      class="form-select"
                      required
                      defaultValue={"Afghanistan"}
                      value={formData?.country}
                      onChange={handleChange}
                    >
                      {countryValue.map((country) => {
                        return (
                          <option key={country.id} value={country.name}>
                            {country.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows={4}
                      value={formData?.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your requirement to align you with the right teams (Project Details, Timelines, Volume, etc.)"
                      required
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn main_btn">
                      Submit <img src={whiteArrow} alt="" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address Detail */}

      <section className="address_detail">
        <div className="container">
          <div className="mt-5">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <div
                      className={
                        toggle === 1
                          ? "address_card card active"
                          : "address_card card"
                      }
                      onClick={() => {
                        toggleTab(1);
                      }}
                    >
                      <div className="row gx-0">
                        <div className="col-md-4">
                          <div className="card_img">
                            <img src={californiaImg} alt="" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card_body">
                            <h5 className="card_title">
                              <img src={pinImg} alt="" />
                              USA Head Office
                            </h5>
                            <p className="card_text">
                              1999 S Bascom Ave, Ste 700 | Campbell | California
                              | USA 95008.
                            </p>
                            <ul className="card_list">
                              <li>
                                <span>Tel :</span> +1 (866) 898-9971
                              </li>
                              <li>
                                <span>Email :</span>info@vistaes.com |
                                sales@vistaes.com
                              </li>
                            </ul>
                            <p className="mt-3">
                              <a href="#" className="btn main_btn">
                                Get Appointment
                                <img src={whiteArrow} alt="" />
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div
                      className={
                        toggle === 2
                          ? "address_card card active"
                          : "address_card card"
                      }
                      onClick={() => {
                        toggleTab(2);
                      }}
                    >
                      <div className="row gx-0">
                        <div className="col-md-4">
                          <div className="card_img">
                            <img src={germanImg} alt="" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card_body">
                            <h5 className="card_title">
                              <img src={pinImg} alt="" />
                              Germany Office 1
                            </h5>
                            <p className="card_text">
                              Wolframstr. 24, 70191 Stuttgart, GERMANY
                            </p>
                            <h5 className="card_title">
                              <img src={pinImg} alt="" />
                              Germany Office 2
                            </h5>
                            <p className="card_text">
                              Friedrichstrasse 15 Stuttgart | GERMANY
                            </p>
                            <ul className="card_list">
                              <li>
                                <span>Tel :</span> +1 (866) 898-9971
                              </li>
                              <li>
                                <span>Email :</span>info@vistaes.com |
                                sales@vistaes.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div
                      className={
                        toggle === 3
                          ? "address_card card active"
                          : "address_card card"
                      }
                      onClick={() => {
                        toggleTab(3);
                      }}
                    >
                      <div className="row gx-0">
                        <div className="col-md-4">
                          <div className="card_img">
                            <img src={indiaImg} alt="" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card_body">
                            <h5 className="card_title">
                              <img src={pinImg} alt="" />
                              India Office Unit 1
                            </h5>
                            <p className="card_text">
                              VISTA Engg Solutions Private LimitedGF7, TIDEL
                              Park | ELCOT-SEZ | Coimbatore | Tamil Nadu, India
                              641014.
                            </p>
                            <h5 className="card_title">
                              <img src={pinImg} alt="" />
                              India Office Unit 2
                            </h5>
                            <p className="card_text">
                              Indialand Tech Park | CHIL-SEZ Campus Coimbatore |
                              Tamil Nadu, India 641035.
                            </p>
                            <ul className="card_list">
                              <li>
                                <span>Tel :</span> +1 (866) 898-9971
                              </li>
                              <li>
                                <span>Email :</span>info@vistaes.com |
                                sales@vistaes.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div
                      className={
                        toggle === 4
                          ? "address_card card active"
                          : "address_card card"
                      }
                      onClick={() => {
                        toggleTab(4);
                      }}
                    >
                      <div className="row gx-0">
                        <div className="col-md-4">
                          <div className="card_img">
                            <img src={indiansalesImg} alt="" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card_body">
                            <h5 className="card_title">
                              <img src={pinImg} alt="" />
                              India Sales Office
                            </h5>
                            <p className="card_text">
                              #677, 1st Floor, Suite No.755 | 27th Main, 13th
                              Cross | HSR Layout, Sector 1, Bangalore |
                              Karnataka, India 560 102
                            </p>
                            <ul className="card_list">
                              <li>
                                <span>Tel :</span> +1 (866) 898-9971
                              </li>
                              <li>
                                <span>Email :</span>info@vistaes.com |
                                sales@vistaes.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="map_detail">
                  <div
                    className={
                      toggle === 1 ? "address_map active" : "address_map"
                    }
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.328206677508!2d-121.93476782498!3d37.28735454008902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e34e9c4fd3ba9%3A0x29379db77ee77b4a!2s1999%20S%20Bascom%20Ave%20Suite%20700%2C%20Campbell%2C%20CA%2095008%2C%20USA!5e0!3m2!1sen!2sin!4v1720872782365!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div
                    className={
                      toggle === 2 ? "address_map active" : "address_map"
                    }
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.9959534700115!2d9.1751792757033!3d48.781967506082665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db31556f2b01%3A0xc69e1ab4efa5b9f!2sFriedrichstra%C3%9Fe%2015%2C%2070174%20Stuttgart%2C%20Germany!5e0!3m2!1sen!2sin!4v1720873800936!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div
                    className={
                      toggle === 3 ? "address_map active" : "address_map"
                    }
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62649.887070334276!2d76.96237603456443!3d11.067244396564341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f773ebb47be1%3A0x2c12eb15d73e9e47!2sVISTA%20Engineering%20Solutions%20Inc!5e0!3m2!1sen!2sin!4v1720873883054!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div
                    className={
                      toggle === 4 ? "address_map active" : "address_map"
                    }
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.83206292776!2d77.62915687947653!3d12.910419991367101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159d79ee505b%3A0xee134e3ea6ce3a36!2sSpacelance%20HSR%20Layout%20-%20Virtual%20Office%20and%20Desk%20Spaces!5e0!3m2!1sen!2sin!4v1720873949757!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
