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
    <div className="position position-relative d-flex flex-column justify-content-center align-items-center">
      {/* <div class="container-overlay-mobile">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div> */}
      <div class="row container-overlay-desktop d-flex justify-content-center align-items-center">
        <div className="col">1</div>
        <div className="col">2</div>
        <div className="col">3</div>
        <div className="col">4</div>
        <div className="col">5</div>
        <div className="col">6</div>
        <div className="col">7</div>
        <div className="col">8</div>
        <div className="col">9</div>
        <div className="col">10</div>
        <div className="col">11</div>
        <div className="col">12</div>
      </div>
      <footer className="w-100">
        <div class="footer-detail">
          <section class="footer-first">
            <div class="footer-links-help">
              <h4 class="footer-title">How can we Help?</h4>
              <ul>
                <Link class="footer-link-item">
                  <a href="#">find My Local Beautya</a>
                </Link>
                <Link class="footer-link-item">
                  <a href="#">Contact Us</a>
                </Link>
                <Link class="footer-link-item">
                  <a href="#">FAQ</a>
                </Link>
                <Link class="footer-link-item">
                  <a href="#">Our Brand</a>
                </Link>
                <Link class="footer-link-item">
                  <a href="#">Blog</a>
                </Link>
              </ul>
            </div>
            <div class="footer-links-product">
              <h4 class="footer-title">Products</h4>
              <ul>
                <li class="footer-link-item">
                  <a href="#">Women Make up</a>
                </li>
                <li class="footer-link-item">
                  <a href="#">Women Skincare</a>
                </li>
                <li class="footer-link-item">
                  <a href="#">Gifts & Sets</a>
                </li>
              </ul>
            </div>
            <div class="footer-subscribe">
              <h4 class="footer-title">keep in touch with beautya</h4>
              <p class="footer-subscribe-desc">
                Join the Beautya newsletter and be first to hear about news,
                offers and skincare advice
              </p>
              <form class="footer-form">
                <div class="footer-form-tabel">
                  <span></span>
                  <p class="footer-subscribe-desc">
                    By submitting your email, you agree to receive advertising
                    emails from Beautya.
                  </p>
                  <div class="footer-form-email">
                    <label class="footer-form-label" for="footer-input">
                      Email Address
                    </label>
                    <input type="text" id="footer-form-input" />
                  </div>
                  <button class="footer-form-btnSubmit" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
        <div class="footer-contact">
          <section class="footer-secound">
            <div class="footer-location d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <FaMapMarkerAlt className="icon-contact" />
                </span>
                <p className="text-white mb-0 text-dr">
                  Dr. Richardson, California
                </p>
              </div>
              <p class="footer-dash mx-3"></p>
              <div class="footer-phone d-flex justify-content-between align-items-center">
                <span>
                  <FaPhoneAlt className="icon-contact" />
                </span>
                <p className="text-white mb-0 text-dr">1-802-526-2463</p>
              </div>
            </div>

            <div class="d-flex justify-content-around align-item-center">
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
        <div class="footer-rights">
          <section class="footer-third">
            <div class="footer-rights-item-one">
              <span>©</span>
              <span>2023 Beautya. All Rights Reserved.</span>
            </div>
            <div class="footer-rights-item-secound">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
