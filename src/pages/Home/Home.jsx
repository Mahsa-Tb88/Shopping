import React from "react";
import "./home.scss";
export default function Home() {
  const productsCategory = [
    {
      title: "gifts & sets",
      img: "./public/images/products_category/make up image.png",
    },
    {
      title: "women make up",
      img: "./public/images/products_category/gifts image.png",
    },
    {
      title: "women skincare",
      img: "./public/images/products_category/skincare image.png",
    },
  ];
  const bestSellers = [
    {
      id: 1,
      image: "./public/images/bestSellers/product1.png",
      title: " Beautya Capture Total Dreamskin Care & Perfect",
      desc: " Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
      price: 76.0,
    },
    {
      id: 2,
      image: "./public/images/bestSellers/product2.png",
      title: "Beautya Capture Total Dreamskin Care & Perfect",
      desc: " Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
      price: 75.0,
    },
    {
      id: 3,
      image: "./public/images/bestSellers/product3.png",
      title: " Beautya Capture Total Dreamskin Care & Perfect",
      desc: " Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
      price: 71.0,
    },
    {
      id: 4,
      image: "./public/images/bestSellers/product4.png",
      title: " Beautya Capture Total Dreamskin Care & Perfect",
      desc: " Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
      price: 73.0,
    },
  ];
  return (
    <div className="home ">
      <div class="container-overlay-mobile">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div class=" container-overlay-desktop">
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
      <section class="poster">
        <h1 class="poster-title">Unlock Your Natural Glow</h1>
        <button class="poster-btn">Know more</button>
      </section>
      <section className="container products mx-auto  text-center ">
        <h2 class="products-title">Products Category</h2>
        <div className="products-category d-flex justify-content-center align-items-center">
          {productsCategory.map((p) => {
            return (
              <div class="product-img">
                <div class="overlay-img"></div>
                <div class="product-img-container">
                  <img src={p.img} alt="" />
                </div>
                <h3>{p.title}</h3>
              </div>
            );
          })}
        </div>
      </section>
      <section class="prodcuts-desc">
        <h4 class="prodcuts-desc-title-mobile">Our Brand</h4>
        <div class="prodcuts-desc-img">
          <img src="./public/images/faces/Frame 26085715.svg" alt="face" />
        </div>
        <div class="prodcuts-desc-brand">
          <h4 class="prodcuts-desc-title-desktop">Our Brand</h4>
          <p class="prodcuts-desc-brand-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            praesentium perferendis, ex labore beatae repudiandae sunt
            voluptatum non dignissimos, ratione est tempore, magnam dolor
            voluptatem autem quas culpa voluptas ipsam.
          </p>
          <button class="prodcuts-desc-brand-btn">Discover More</button>
        </div>
      </section>
      <section className="container bestSeller">
        <h2 class="products-title text-center">Our Best Sellers</h2>
        <div className=" d-flex justify-content-between align-items-center">
          <div className="row">
            {bestSellers.map((p) => {
              return (
                <div class="col-3  bestSellers-product ">
                  <div className="border border-1 ">
                    <div class="bestSellers-product-img">
                      <img src={p.image} alt="product1" />
                    </div>
                    <h3 class="bestSellers-product-title">{p.title}</h3>
                    <p class="bestSellers-product-desc">{p.desc}</p>
                    <span class="bestSellers-product-price">
                      $ {p.price}.00
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section class="newIn-desktop ">
        <h2 class="newIn-firstSlide-title">New In</h2>

        <div class="newIn-desktop-container">
          <div class="newIn-firstSlide">
            <div class="newIn-firstSlide-img">
              <img src="./public/images/faces/woman.png" alt="woman" />
            </div>
            <div class="newIn-firstSlide-table">
              <h3 class="newIn-firstSlide-desc-title">
                Beautya La Mousse Off/On Foaming Cleaner
              </h3>
              <p class="newIn-firstSlide-desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis en im velit mollit.
              </p>
            </div>
          </div>
          <div class="newIn-secoundSlide">
            <div class="newIn-product">
              <div class="newIn-product-img">
                <img
                  src="./public/images/newIn/product image.png"
                  alt="product1"
                />
              </div>
              <div class="newIn-product-table">
                <h3 class="newIn-product-title">
                  Beautya Capture Total Dreamskin Care & Perfect
                </h3>
                <p class="newIn-product-desc">
                  Plumping Gloss - Instant and Long-Term Volume Effect - 24h
                  Hydration
                </p>
                <span class="newIn-product-price">$76.00</span>
              </div>
            </div>

            <div class="newIn-product">
              <div class="newIn-product-img">
                <img
                  src="./public/images/newIn/product image2.png"
                  alt="product1"
                />
              </div>
              <h3 class="newIn-product-title">
                Beautya Capture Total Dreamskin Care & Perfect
              </h3>
              <p class="newIn-product-desc">
                Plumping Gloss - Instant and Long-Term Volume Effect - 24h
                Hydration
              </p>
              <span class="newIn-product-price">$70.00</span>
            </div>
          </div>
        </div>
      </section>
      <section class="offer-desktop ">
        <div class="offer-desktop-img">
          <img src="./public/images/offer-desktop.png" alt="offer" />
        </div>
        <div class="offer-desktop-detail">
          <h4 class="offer-desktop-detail-title1">Special offers</h4>
          <h3 class="offer-desktop-detail-title2">Save up to 50%</h3>
          <p class="offer-desktop-detail-desc1">
            Mother’s Day is coming! For everything she’s given you, it's time to
            give back. Shower her with love, happiness, and the best of Beautya.
          </p>
          <p class="offer-desktop-detail-desc2">
            visit your local beautya branches to find out more about our special
            offers in make up and skincare products.
          </p>
          <button class="offer-desktop-detail-btn">
            <a href="#">find branches</a>
          </button>
        </div>
      </section>
      <section class="analysis-desktop mb-5">
        <div class="analysis-desktop-detail py-2">
          <h2 class="analysis-desktop-detail-title">
            NEW Virtual Skincare Analysis
          </h2>
          <p class="analysis-desktop-detail-desc">
            Looking for a full skincare routine? Our NEW Virtual Skincare
            Analysis Tool evaluates your skin and provides the most personalized
            recommendations.
          </p>
          <div class="analysis-desktop-detail-info">
            <div class="analysis-desktop-detail-table">
              {/* <span class="analysis-desktop-info-scan">
                Scan with your phone to get started
              </span>
              <small class="analysis-desktop-info-or">or</small> */}
              <button class="analysis-desktop-info-btn">
                <a href="#">answer the Questionnaire</a>
              </button>
            </div>
            <div class="analysis-desktop-detail-img">
              {/* <img src="./Images/qrcode.png" alt="QR-code" /> */}
            </div>
          </div>
        </div>
        <div class="analysis-desktop-img">
          <img src="./public/images/faces/faces-desktop.png" alt="faces" />
        </div>
      </section>
      <section class="blog-desktop">
        <h2 class="blog-desktop-title">Our Blog</h2>
        <div class="blog-desktop-container">
          <div class="blog-item">
            <div class="blog-item-overlay"></div>
            <div class="blog-item-container">
              <div class="blog-item-img">
                <img
                  src="./public/images/blogs/blog image1.png"
                  alt="blog-image"
                />
              </div>
              <div class="blog-item-table">
                <h3 class="blog-item-title">How to get clear skin fast</h3>
                <div class="blog-item-info">
                  <span class="blog-item-info-product">Skincare</span>
                  <span class="blog-item-info-dash"></span>
                  <span class="blog-item-info-dr">Dr. Wade Warren</span>
                  <span class="blog-item-info-dash"></span>
                  <span class="blog-item-info-date">Jan 20, 2021</span>
                </div>
                <p class="blog-item-desc">
                  Many people find it difficult to get clear skin. The methods
                  for getting clear skin will vary
                </p>
              </div>
            </div>
          </div>
          <div class="blog-item">
            <div class="blog-item-overlay"></div>

            <div class="blog-item-container">
              <div class="blog-item-img">
                <img
                  src="./public/images/blogs/blog image2.png"
                  alt="blog-image"
                />
              </div>
              <div class="blog-item-table">
                <h3 class="blog-item-title">How to get clear skin fast</h3>
                <div class="blog-item-info">
                  <span class="blog-item-info-product">Skincare</span>
                  <span class="blog-item-info-dash"></span>
                  <span class="blog-item-info-dr">Dr. Wade Warren</span>
                  <span class="blog-item-info-dash"></span>
                  <span class="blog-item-info-date">Jan 20, 2021</span>
                </div>
                <p class="blog-item-desc">
                  Many people find it difficult to get clear skin. The methods
                  for getting clear skin will vary
                </p>
              </div>
            </div>
          </div>
          <div class="blog-item">
            <div class="blog-item-overlay"></div>

            <div class="blog-item-container">
              <div class="blog-item-img">
                <img
                  src="./public/images/blogs/blog image3.png"
                  alt="blog-image"
                />
              </div>
              <div class="blog-item-table">
                <h3 class="blog-item-title">How to get clear skin fast</h3>
                <div class="blog-item-info">
                  <span class="blog-item-info-product">Skincare</span>
                  <span class="blog-item-info-dash"></span>
                  <span class="blog-item-info-dr">Dr. Wade Warren</span>
                  <span class="blog-item-info-dash"></span>
                  <span class="blog-item-info-date">Jan 20, 2021</span>
                </div>
                <p class="blog-item-desc">
                  Many people find it difficult to get clear skin. The methods
                  for getting clear skin will vary
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="d-flex justify-content-center align-items-center position-relative w-100">
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
        <div class="container">
          <div className="row">
            <div class="options-item d-flex justify-content-center align-items-center p-1 col-3">
              <div class="option-item-overlay"></div>
              <div class="options-item-img">
                <div>
                  <img src="./public/images/options/rabbit.png" alt="rabbit" />
                </div>
              </div>
              <span class="options-item-text">No tests on animals</span>
            </div>
            <div class="options-item d-flex justify-content-center align-items-center p-1 col-3">
              <div class="options-item-img">
                <div>
                  <img src="./public/images/options/leaf.png" alt="leaf" />
                </div>
              </div>
              <span class="options-item-text">
                No animal-derived ingredients
              </span>
            </div>
            <div class="options-item d-flex justify-content-center align-items-center p-1 col-3">
              <div class="options-item-img">
                <div>
                  <img src="./public/images/options/wheat.png" alt="wheat" />
                </div>
              </div>
              <span class="options-item-text">
                No gluten, or gluten byproducts
              </span>
            </div>
            <div class="options-item d-flex justify-content-center align-items-center p-1 col-3">
              <div class="options-item-img">
                <div>
                  <img src="../public/images/options/lamp.png" alt="lamp" />
                </div>
              </div>
              <span class="options-item-text">Recyclable packaging</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
