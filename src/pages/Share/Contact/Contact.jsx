import React, { useState } from "react";
import "./contact.scss";
import { FaCaretDown } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const { register, handleSubmit, watch, formState } = useForm({
    defaultValues: {
      title: "",
      phone: "",
      province: "",
      country: "Body Care",
      email: "",
      fax: "",
    },
  });
  const { errors, isSubmitting } = formState;
  const navigate = useNavigate();
  const [isSendForm, setIssendForm] = useState(false);
  async function onSubmit(data) {
    setIssendForm(true);
  }
  function backHandler() {
    setIssendForm(false);
  }
  return (
    <div className="contact">
      <div className="container-overlay-mobile">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div className="container-overlay-desktop d-flex justify-content-center align-items-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>
      <div className="container p-0">
        <main className="main">
          <div className="contact-us">
            <div className="contact-us-desc">
              <h2 className="title-contact">Contact Us</h2>
              <p>
                Beautya Client Service Center Is Happy to Help You With Any
                Questions You May Have Regarding Our Products And Corporate
                Information.
              </p>
              <p>
                Contact Us by Phone: 1-802-526-2463 Monday to Friday, 9am to
                9pm, and Saturday-Sunday, 9am to 6pm Or Fill in The Form Below
                to Send Us An Email.
              </p>
              <small className="text-small">
                Please fill in this form to send us your inquiry. We'll be more
                than happy to help and will reply to you as soon as possible.
              </small>
            </div>
            <div className="contact-us-form">
              <div className="contact-us-form-header">
                <h3 className="contact-us-form-title d-flex justify-content-center align-items-center">
                  <span className="contact-us-title-envelope">
                    <FaEnvelope />
                  </span>
                  <span className="contact-us-title-title">Write Us</span>
                </h3>
                <span className="contact-us-form-dropleft">
                  <i className="fa fa-caret-right"></i>
                </span>
              </div>
              {isSendForm ? (
                <div className="">
                  <h3 className="fs-1 text-darkmood">Your Form is Submited</h3>
                  <button
                    className="backbtn  fs-3"
                    onClick={() => backHandler()}
                  >
                    Back
                  </button>
                </div>
              ) : (
                <form
                  className="form form-contact-container"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <h3 className="form-info-title text-darkmood">
                      Your information
                    </h3>
                    <div className="form-info-container">
                      <div>
                        <div className="form-address">
                          <div className="form-number">
                            <input
                              type="text"
                              placeholder="Title"
                              {...register("title", {
                                required: "You must enter a title ",
                              })}
                            />
                            {errors.title && (
                              <p className="errors">{errors.title.message}</p>
                            )}
                          </div>
                          <div className="form-number">
                            <input
                              type="text"
                              placeholder="Phone Number"
                              {...register("phone", {
                                required: "You must enter a phoneNumber",
                              })}
                            />
                            {errors.phone && (
                              <p className="errors">{errors.phone.message}</p>
                            )}
                          </div>
                        </div>
                        <div className="form-name">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-firstName"
                          />
                          <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="form-address">
                          <div className="form-email">
                            <input
                              type="text"
                              placeholder="Province"
                              {...register("province", {})}
                            />
                          </div>
                          <div className="form-number">
                            <input
                              type="text"
                              placeholder="Country"
                              {...register("country")}
                            />
                          </div>
                        </div>

                        <div className="form-address">
                          <div className="form-email">
                            <input
                              type="text"
                              placeholder="Email Address"
                              {...register("email")}
                            />
                          </div>
                          <div className="form-number">
                            <input
                              type="text"
                              placeholder="Fax Number"
                              {...register("fax")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <h3 className="form-title-request text-darkmood">
                      Your Request
                    </h3>
                    <div className="form-request-container">
                      <h4 className="text-darkmood">Subject</h4>
                      <div className="form-request-btns">
                        <div className="form-check me-4 fs-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Skin type
                          </label>
                        </div>
                        <div className="form-check me-4 fs-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Branches
                          </label>
                        </div>
                        <div className="form-check me-4 fs-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Special offer and Promotion
                          </label>
                        </div>
                        <div className="form-check me-4 fs-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Returns and Refunds
                          </label>
                        </div>
                        <div className="form-check me-4 fs-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Product and Stock
                          </label>
                        </div>
                      </div>
                      <textarea
                        className="form-request-text text-darkmood"
                        placeholder="write your text"
                        rows="1"
                        cols="30"
                      ></textarea>
                    </div>
                    <hr />
                    <div className="form-checked">
                      <div className="form-check me-4 fs-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I have read and understood the contact us privacy and
                          policy.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-submit-btn">
                    <button className="fs-3">Send</button>
                  </div>
                </form>
              )}
            </div>
            <p className="contact-us-line"></p>
          </div>

          <div className="mobile-section">
            <div className="chat-us contact-container">
              <h3>
                <div>
                  <span>
                    <i className="fa-regular fa-comment-dots"></i>
                  </span>
                  <span className="chat-us-title">Chat Online</span>
                </div>
                <span className="icon-chatUs">
                  <i className="fa fa-plus"></i>
                </span>
              </h3>
              <div className="chat-us-container contact-desc">
                <h5 className="text-darkmood">
                  Looking for personalized advice?
                </h5>
                <p className="text-darkmood">
                  The option to chat becomes active when one of our Client
                  Advisors is available.
                </p>
                <button className="chat-us-desc-btn ">Ask Your Questions</button>
              </div>
              <p className="contact-us-line"></p>
            </div>
            <div className="call-us contact-container">
              <h3>
                <div>
                  <span>
                    <i className="fa fa-phone"></i>
                  </span>
                  <span className="call-us-title">Call Us</span>
                </div>
                <span className="icon-callUs">
                  <i className="fa fa-plus"></i>
                </span>
              </h3>
              <div className="call-us-container contact-desc">
                <p>Our Client Advisors would be delighted to assist you.</p>
                <p>
                  You may contact us at <span>1-802-526-2463</span>
                </p>
                <small>
                  Service available from Monday to Friday from 10 am to 8 pm and
                  Saturday from 10 am to 6 pm
                </small>
              </div>
              <p className="contact-us-line"></p>
            </div>
            <div className="instant-msg contact-container">
              <h3>
                <div>
                  <span>
                    <i className="fa-regular fa-message"></i>
                  </span>
                  <span className="instant-msg-title">Instant Message</span>
                </div>
                <span className="icon-msg">
                  <i className="fa fa-plus"></i>
                </span>
              </h3>
              <div className="instant-msg-container contact-desc">
                <p>Would you like to contact us on an instant messaging app?</p>
                <small>
                  Our Client Advisors will be delighted to assist you
                </small>
                <button className="instant-msg-btn">Ask Your Questions</button>
              </div>
              <p className="contact-us-line"></p>
            </div>
          </div>

          <div className="desktop-section">
            <div className="chat-desktop">
              <h3>
                <span>
                  <i className="fa-regular fa-comment-dots"></i>
                </span>
                <span className="chat-desktop-title">Chat Online</span>
              </h3>
              <div className="chat-desktop-content">
                <h5>Looking for personalized advice?</h5>
                <p>
                  The option to chat becomes active when one of our Client
                  Advisors is available.
                </p>
                <button className="chatbtn">Ask Your Questions</button>
              </div>
            </div>
            <div className="call-desktop">
              <h3>
                <span>
                  <i className="fa fa-phone"></i>
                </span>
                <span className="call-desktopn-title">Call Us</span>
              </h3>
              <div className="call-desktop-content">
                <h5>Our Client Advisors would be delighted to assist you.</h5>
                <h5>
                  You may contact us at <span>1-802-526-2463</span>
                </h5>
                <p>
                  Service available from Monday to Friday from 10 am to 8 pm and
                  Saturday from 10 am to 6 pm
                </p>
              </div>
            </div>
            <div className="msg-desktop">
              <h3>
                <span>
                  <i className="fa-regular fa-message"></i>
                </span>
                <span className="msg-desktop-title">Instant Message</span>
              </h3>
              <div className="msg-desktop-content">
                <h5>
                  Would you like to contact us on an instant messaging app?
                </h5>
                <p>Our Client Advisors will be delighted to assist you</p>
                <button className="msgbtn">Ask Your Questions</button>
              </div>
            </div>
          </div>

          <section className="options w-100">
            <div className="container-overlay-mobile-options">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="container-overlay-desktop-options">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="row w-100 py-3">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="option-item-overlay"></div>
                <div className="options-item-img">
                  <div>
                    <img
                      src="http://server.test/uploads/rabbit.png"
                      alt="rabbit"
                    />
                  </div>
                </div>
                <span className="options-item-text">No tests on animals</span>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="options-item-img">
                  <div>
                    <img src="http://server.test/uploads/leaf.png" alt="leaf" />
                  </div>
                </div>
                <span className="options-item-text">
                  No animal-derived ingredients
                </span>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="options-item-img">
                  <div>
                    <img
                      src="http://server.test/uploads/wheat.png"
                      alt="wheat"
                    />
                  </div>
                </div>
                <span className="options-item-text">
                  No gluten, or gluten byproducts
                </span>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="options-item-img">
                  <div>
                    <img src="http://server.test/uploads/lamp.png" alt="lamp" />
                  </div>
                </div>
                <span className="options-item-text">Recyclable packaging</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
