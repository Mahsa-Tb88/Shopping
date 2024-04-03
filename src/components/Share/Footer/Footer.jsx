import React from "react";
import "./footer.scss";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="position position-relative d-flex flex-column justify-content-center align-items-center">
        <div className="container-column-footer">
          <div className="row gx-5 col-overlay-footer">
            <div className="col vh-100 ">
              <div className="inner-col-footer"></div>
            </div>
            <div className="col vh-100 ">
              <div className="inner-col-footer"></div>
            </div>
            <div className="col vh-100 ">
              <div className="inner-col-footer"></div>
            </div>
            <div className="col vh-100 ">
              <div className="inner-col-footer"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid">
              <div className="inner-col-footer"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid   ">
              <div className="inner-col-footer"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid  ">
              <div className="inner-col-footer"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid  ">
              <div className="inner-col-footer"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid  ">
              <div className="inner-col-footer"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid  ">
              <div className="inner-col-footer"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid  ">
              <div className="inner-col-footer"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid  ">
              <div className="inner-col-footer"></div>
            </div>
          </div>
        </div>
        <footer className="row">
          <div className="col-12 col-md-4">
            <section className="footer-first">
              <div className="footer-links-help">
                <h4 className="footer-title">How can we Help?</h4>
                <ul>
                  <li className="footer-link-item">
                    <Link>find My Local Beautya</Link>
                  </li>
                  <li className="footer-link-item">
                    <Link>Contact Us</Link>
                  </li>
                  <li className="footer-link-item">
                    <Link>FAQ</Link>
                  </li>
                  <li className="footer-link-item">
                    <Link>Our Brand</Link>
                  </li>
                  <li className="footer-link-item">
                    <Link>Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-links-product">
                <h4 className="footer-title">Products</h4>
                <ul>
                  <li className="footer-link-item">
                    <Link>Women Make up</Link>
                  </li>
                  <li className="footer-link-item">
                    <Link>Women Skincare</Link>
                  </li>
                  <li className="footer-link-item">
                    <Link>Gifts & Sets</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-subscribe">
                <h4 className="footer-title">keep in touch with beautya</h4>
                <p className="footer-subscribe-desc">
                  Join the Beautya newsletter and be first to hear about news,
                  offers and skincare advice
                </p>
                <form className="footer-form">
                  <div className="footer-form-tabel">
                    <span></span>
                    <p className="footer-subscribe-desc">
                      By submitting your email, you agree to receive advertising
                      emails from Beautya.
                    </p>
                    <div className="footer-form-email">
                      <label
                        className="footer-form-label"
                        htmlFor="footer-input"
                      >
                        Email Address
                      </label>
                      <input type="text" id="footer-form-input" />
                    </div>
                    <button className="footer-form-btnSubmit" type="submit">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
          <div className="col-12 col-md-4">
            <section className="footer-second">
              <div className="footer-location d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <FaMapMarkerAlt className="icon-contact" />
                  </span>
                  <p className="text-white mb-0 text-dr">
                    Dr. Richardson, California
                  </p>
                </div>
                <p className="footer-dash mx-3"></p>
                <div className="footer-phone d-flex justify-content-between align-items-center">
                  <span>
                    <FaPhoneAlt className="icon-contact" />
                  </span>
                  <p className="text-white mb-0 text-dr">1-802-526-2463</p>
                </div>
              </div>

              <div className="d-flex justify-content-around align-item-center">
                <Link>
                  <FaLinkedinIn className="socialMedia" />
                </Link>
                <Link>
                  <FaFacebookF className="socialMedia" />
                </Link>
                <Link>
                  <FaTwitter className="socialMedia" />
                </Link>
                <Link>
                  <FaInstagram className="socialMedia" />
                </Link>
                <Link>
                  <FaPinterestP className="socialMedia" />
                </Link>
              </div>
            </section>
          </div>
          <div className="col-12 col-md-4">
            <section className="footer-third">
              <div className="footer-rights-item-one">
                <span>©</span>
                <span>2023 Beautya. All Rights Reserved.</span>
              </div>
              <div className="footer-rights-item-secound">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
}
