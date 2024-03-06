import React from "react";
import "./contact.scss";
export default function Contact() {
  return (
    <div className="contact">
      <div class="container-overlay-mobile">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div class="container-overlay-desktop d-flex justify-content-center align-items-center">
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
      <div className="container">
        <main class="main">
          <div class="contact-us">
            <div class="contact-us-desc">
              <h2>Contact Us</h2>
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
              <small>
                Please fill in this form to send us your inquiry. We'll be more
                than happy to help and will reply to you as soon as possible.
              </small>
            </div>
            <div class="contact-us-form">
              <div class="contact-us-form-header">
                <h3 class="contact-us-form-title">
                  <span class="contact-us-title-envelope">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <span class="contact-us-title-title">Write Us</span>
                </h3>
                <span class="contact-us-form-dropleft">
                  <i class="fa fa-caret-right"></i>
                </span>
              </div>

              <form class="form form-contact-container">
                <div>
                  <h3 class="form-info-title">Your information</h3>
                  <div class="form-info-container">
                    <div>
                      <div class="form-subject">
                        <div class="form-select-title">
                          <h4 class="">Title</h4>
                          <span>
                            <i class="fa fa-caret-down"></i>
                          </span>
                        </div>
                        <div class="form-select-title-items">
                          <ul>
                            <li class="title-select">contact</li>
                            <li class="title-select">collabration</li>
                            <li class="title-select">suggestion</li>
                          </ul>
                        </div>
                      </div>
                      <div class="form-name">
                        <input
                          type="text"
                          placeholder="First Name"
                          class="form-firstName"
                        />
                        <input type="text" placeholder="Last Name" />
                      </div>
                      <div class="form-country-language">
                        <div class="form-country">
                          <div class="form-select-title">
                            <h4 class="">Contury/region</h4>
                            <span>
                              <i class="fa fa-caret-down"></i>
                            </span>
                          </div>
                          <div class="form-select-title-items">
                            <ul>
                              <li class="title-select">Canada</li>
                              <li class="title-select">Us</li>
                              <li class="title-select">Germany</li>
                            </ul>
                          </div>
                        </div>
                        <div class="form-language">
                          <div class="form-select-title">
                            <h4 class="">Languade</h4>
                            <span>
                              <i class="fa fa-caret-down"></i>
                            </span>
                          </div>
                          <div class="form-select-title-items">
                            <ul>
                              <li class="title-select">Canada</li>
                              <li class="title-select">Us</li>
                              <li class="title-select">Germany</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="form-address">
                        <div class="form-email">
                          <input type="text" placeholder="Email Address" />
                        </div>
                        <div class="form-number">
                          <input
                            type="text"
                            placeholder="Phone Number(optional)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div>
                  <h3 class="form-title-request">Your Request</h3>
                  <div class="form-request-container">
                    <h4>Subject</h4>
                    <div class="form-request-btns">
                      <button>Skin type</button>
                      <button>Branches</button>
                      <button>Special offer and Promotion</button>
                      <button>Returns and Refunds</button>
                      <button>Product and Stock</button>
                    </div>
                    <textarea
                      class="form-request-text"
                      placeholder="write your text"
                      rows="1"
                      cols="30"
                    ></textarea>
                  </div>
                  <hr />
                  <div class="form-checked">
                    <span>
                      <i class="fa fa-check"></i>
                    </span>
                    <p>
                      I have read and understood the contact us privacy and
                      policy.
                    </p>
                  </div>
                </div>
                <div class="form-submit-btn">
                  <button>Send</button>
                </div>
              </form>
            </div>
            <p class="contact-us-line"></p>
          </div>

          <div class="mobile-section">
            <div class="chat-us contact-container">
              <h3>
                <div>
                  <span>
                    <i class="fa-regular fa-comment-dots"></i>
                  </span>
                  <span class="chat-us-title">Chat Online</span>
                </div>
                <span class="icon-chatUs">
                  <i class="fa fa-plus"></i>
                </span>
              </h3>
              <div class="chat-us-container contact-desc">
                <h5>Looking for personalized advice?</h5>
                <p>
                  The option to chat becomes active when one of our Client
                  Advisors is available.
                </p>
                <button class="chat-us-desc-btn">Ask Your Questions</button>
              </div>
              <p class="contact-us-line"></p>
            </div>
            <div class="call-us contact-container">
              <h3>
                <div>
                  <span>
                    <i class="fa fa-phone"></i>
                  </span>
                  <span class="call-us-title">Call Us</span>
                </div>
                <span class="icon-callUs">
                  <i class="fa fa-plus"></i>
                </span>
              </h3>
              <div class="call-us-container contact-desc">
                <p>Our Client Advisors would be delighted to assist you.</p>
                <p>
                  You may contact us at <span>1-802-526-2463</span>
                </p>
                <small>
                  Service available from Monday to Friday from 10 am to 8 pm and
                  Saturday from 10 am to 6 pm
                </small>
              </div>
              <p class="contact-us-line"></p>
            </div>
            <div class="instant-msg contact-container">
              <h3>
                <div>
                  <span>
                    <i class="fa-regular fa-message"></i>
                  </span>
                  <span class="instant-msg-title">Instant Message</span>
                </div>
                <span class="icon-msg">
                  <i class="fa fa-plus"></i>
                </span>
              </h3>
              <div class="instant-msg-container contact-desc">
                <p>Would you like to contact us on an instant messaging app?</p>
                <small>
                  Our Client Advisors will be delighted to assist you
                </small>
                <button class="instant-msg-btn">Ask Your Questions</button>
              </div>
              <p class="contact-us-line"></p>
            </div>
          </div>

          <div class="desktop-section">
            <div class="chat-desktop">
              <h3>
                <span>
                  <i class="fa-regular fa-comment-dots"></i>
                </span>
                <span class="chat-desktop-title">Chat Online</span>
              </h3>
              <div class="chat-desktop-content">
                <h5>Looking for personalized advice?</h5>
                <p>
                  The option to chat becomes active when one of our Client
                  Advisors is available.
                </p>
                <button class="chat-desktop-btn">Ask Your Questions</button>
              </div>
            </div>
            <div class="call-desktop">
              <h3>
                <span>
                  <i class="fa fa-phone"></i>
                </span>
                <span class="call-desktopn-title">Call Us</span>
              </h3>
              <div class="call-desktop-content">
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
            <div class="msg-desktop">
              <h3>
                <span>
                  <i class="fa-regular fa-message"></i>
                </span>
                <span class="msg-desktop-title">Instant Message</span>
              </h3>
              <div class="msg-desktop-content">
                <h5>
                  Would you like to contact us on an instant messaging app?
                </h5>
                <p>Our Client Advisors will be delighted to assist you</p>
                <button class="msg-desktop-btn">Ask Your Questions</button>
              </div>
            </div>
          </div>

          <section class="options">
            <div class="container-overlay-mobile-options">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="container-overlay-desktop-options">
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
            <div class="options-container">
              <div class="options-item">
                <div class="option-item-overlay"></div>
                <div class="options-item-img">
                  <div>
                    <img src="./Images/options/rabbit.png" alt="rabbit" />
                  </div>
                </div>
                <span class="options-item-text">No tests on animals</span>
              </div>
              <div class="options-item">
                <div class="options-item-img">
                  <div>
                    <img src="./Images/options/leaf.png" alt="leaf" />
                  </div>
                </div>
                <span class="options-item-text">
                  No animal-derived ingredients
                </span>
              </div>
              <div class="options-item">
                <div class="options-item-img">
                  <div>
                    <img src="./Images/options/wheat.png" alt="wheat" />
                  </div>
                </div>
                <span class="options-item-text">
                  No gluten, or gluten byproducts
                </span>
              </div>
              <div class="options-item">
                <div class="options-item-img">
                  <div>
                    <img src="./Images/options/lamp.png" alt="lamp" />
                  </div>
                </div>
                <span class="options-item-text">Recyclable packaging</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
