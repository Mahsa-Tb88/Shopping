import React from "react";
import "./containerhome.scss";
export default function ContainerHome() {
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
    <div className="home">
      <div className="container-column">
        <div className="row gx-5 col-overlay">
          <div className="col vh-100 ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid   ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid  ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid  ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid  ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid  ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid  ">
            <div className="inner-col">1</div>
          </div>
          <div className="col vh-100 d-none d-md-grid  ">
            <div className="inner-col">1</div>
          </div>
        </div>
      </div>
      <section className="poster">
        <h1 className="poster-title">Unlock Your Natural Glow</h1>
        <button className="poster-btn">Know more</button>
      </section>
      <section className="container products-category  text-center ">
        <h2 className="products-title ">Products Category</h2>
        <div className="products-category-container gx-5 row ">
          {productsCategory.map((p) => {
            return (
              <div className="col-12 col-md-4 product-item" key={p.title}>
                <div className="product-img ">
                  <div className="container-column-product  ">
                    <div className="row gx-5 col-overlay-product">
                      <div className="col vh-100 ">
                        <div className="inner-col-product"></div>
                      </div>
                      <div className="col vh-100 ">
                        <div className="inner-col-product"></div>
                      </div>
                      <div className="col vh-100 ">
                        <div className="inner-col-product"></div>
                      </div>
                      <div className="col vh-100 ">
                        <div className="inner-col-product"></div>
                      </div>
                    </div>
                  </div>
                  <div className="product-img-container">
                    <img src={p.img} alt={p.title} />
                  </div>
                  <h3>{p.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="prodcuts-desc text-center text-md-start">
        <h4 className="prodcuts-desc-title-mobile">Our Brand</h4>
        <div className="prodcuts-desc-img">
          <img src="./public/images/faces/Frame 26085715.svg" alt="face" />
        </div>
        <div className="prodcuts-desc-brand">
          <h4 className="prodcuts-desc-title-desktop">Our Brand</h4>
          <p className="prodcuts-desc-brand-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            praesentium perferendis, ex labore beatae repudiandae sunt
            voluptatum non dignissimos, ratione est tempore, magnam dolor
            voluptatem autem quas culpa voluptas ipsam.
          </p>
          <button className="prodcuts-desc-brand-btn">Discover More</button>
        </div>
      </section>
      <section className="container p-0 bestSeller">
        <h2 className="products-title text-center">Our Best Sellers</h2>
        <div className=" d-flex justify-content-between align-items-center">
          <div className="row ">
            {bestSellers.map((p) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-3  bestSellers-product mb-5"
                  key={p.id}
                >
                  <div className="border border-1 h-100">
                    <div className="bestSellers-product-img">
                      <img src={p.image} alt="product" />
                    </div>
                    <h3 className="bestSellers-product-title">{p.title}</h3>
                    <p className="bestSellers-product-desc">{p.desc}</p>
                    <span className="bestSellers-product-price">
                      $ {p.price}.00
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="newIn">
        <h2 className="newIn-title mb-0 text-center text-white d-none d-md-block">
          New In
        </h2>
        <div className="newIn-body">
          <div className="row gx-5">
            <div className=" col-12 col-md-6 ">
              <div className="h-100  mx-auto">
                <h2 className="newIn-firstSlide-title-mobile d-md-none">
                  New In
                </h2>
                {/* <div className="newIn-firstSlide-img">
                    <img src="./public/images/faces/woman.png" alt="woman" />
                  </div>  */}
                <div className="newIn-firstSlide-table">
                  <h3 className="newIn-firstSlide-desc-title">
                    Beautya La Mousse Off/On Foaming Cleaner
                  </h3>
                  <p className="newIn-firstSlide-desc">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis en im velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="h-100">
                <div className="row gx-5">
                  <div className=" col-12 col-md-6 my-5 mt-md-0">
                    <div className="h-100 product-inner">
                      <div className="newIn-product-img">
                        <img
                          src="./public/images/newIn/product image.png"
                          alt="product1"
                        />
                      </div>
                      <div className="newIn-product-table">
                        <h3 className="newIn-firstSlide-desc-title ">
                          Beautya Capture Total Dreamskin Care & Perfect
                        </h3>
                        <p className="newIn-firstSlide-desc ">
                          Plumping Gloss - Instant and Long-Term Volume Effect -
                          24h Hydration
                        </p>
                        <span className="newIn-price">$76.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="newIn-product col-12 col-md-6 my-5 mt-md-0">
                    <div className="h-100 ">
                      <div className="newIn-product-img ">
                        <img
                          src="./public/images/newIn/product image2.png"
                          alt="product1"
                        />
                      </div>
                      <h3 className="newIn-firstSlide-desc-title ">
                        Beautya Capture Total Dreamskin Care & Perfect
                      </h3>
                      <p className="newIn-firstSlide-desc ">
                        Plumping Gloss - Instant and Long-Term Volume Effect -
                        24h Hydration
                      </p>
                      <span className="newIn-price">$70.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="offer-desktop ">
        <div className="offer-desktop-img">
          <img src="./public/images/offer-desktop.png" alt="offer" />
        </div>
        <div className="offer-desktop-detail">
          <h4 className="offer-desktop-detail-title1">Special offers</h4>
          <h3 className="offer-desktop-detail-title2">Save up to 50%</h3>
          <p className="offer-desktop-detail-desc1">
            Mother’s Day is coming! For everything she’s given you, it's time to
            give back. Shower her with love, happiness, and the best of Beautya.
          </p>
          <p className="offer-desktop-detail-desc2">
            visit your local beautya branches to find out more about our special
            offers in make up and skincare products.
          </p>
          <button className="offer-desktop-detail-btn">
            <a href="#">find branches</a>
          </button>
        </div>
      </section> */}
      {/* <section className="analysis-desktop mb-5">
        <div className="analysis-desktop-detail py-2">
          <h2 className="analysis-desktop-detail-title">
            NEW Virtual Skincare Analysis
          </h2>
          <p className="analysis-desktop-detail-desc">
            Looking for a full skincare routine? Our NEW Virtual Skincare
            Analysis Tool evaluates your skin and provides the most personalized
            recommendations.
          </p>
          <div className="analysis-desktop-detail-info">
            <div className="analysis-desktop-detail-table">
              <button className="analysis-desktop-info-btn">
                <a href="#" className="link">
                  answer the Questionnaire
                </a>
              </button>
            </div>
            <div className="analysis-desktop-detail-img"></div>
          </div>
        </div>
        <div className="analysis-desktop-img">
          <img src="./public/images/faces/faces-desktop.png" alt="faces" />
        </div>
      </section> */}
      <section className="blog-desktop">
        <h2 className="blog-desktop-title">Our Blog</h2>
        <div className="blog-desktop-container">
          <div className="blog-item">
            <div className="blog-item-overlay"></div>
            <div className="blog-item-container">
              <div className="blog-item-img">
                <img
                  src="./public/images/blogs/blog image1.png"
                  alt="blog-image"
                />
              </div>
              <div className="blog-item-table">
                <h3 className="blog-item-title">How to get clear skin fast</h3>
                <div className="blog-item-info">
                  <span className="blog-item-info-product">Skincare</span>
                  <span className="blog-item-info-dash"></span>
                  <span className="blog-item-info-dr">Dr. Wade Warren</span>
                  <span className="blog-item-info-dash"></span>
                  <span className="blog-item-info-date">Jan 20, 2021</span>
                </div>
                <p className="blog-item-desc">
                  Many people find it difficult to get clear skin. The methods
                  for getting clear skin will vary
                </p>
              </div>
            </div>
          </div>
          <div className="blog-item">
            <div className="blog-item-overlay"></div>

            <div className="blog-item-container">
              <div className="blog-item-img">
                <img
                  src="./public/images/blogs/blog image2.png"
                  alt="blog-image"
                />
              </div>
              <div className="blog-item-table">
                <h3 className="blog-item-title">How to get clear skin fast</h3>
                <div className="blog-item-info">
                  <span className="blog-item-info-product">Skincare</span>
                  <span className="blog-item-info-dash"></span>
                  <span className="blog-item-info-dr">Dr. Wade Warren</span>
                  <span className="blog-item-info-dash"></span>
                  <span className="blog-item-info-date">Jan 20, 2021</span>
                </div>
                <p className="blog-item-desc">
                  Many people find it difficult to get clear skin. The methods
                  for getting clear skin will vary
                </p>
              </div>
            </div>
          </div>
          <div className="blog-item">
            <div className="blog-item-overlay"></div>

            <div className="blog-item-container">
              <div className="blog-item-img">
                <img
                  src="./public/images/blogs/blog image3.png"
                  alt="blog-image"
                />
              </div>
              <div className="blog-item-table">
                <h3 className="blog-item-title">How to get clear skin fast</h3>
                <div className="blog-item-info">
                  <span className="blog-item-info-product">Skincare</span>
                  <span className="blog-item-info-dash"></span>
                  <span className="blog-item-info-dr">Dr. Wade Warren</span>
                  <span className="blog-item-info-dash"></span>
                  <span className="blog-item-info-date">Jan 20, 2021</span>
                </div>
                <p className="blog-item-desc">
                  Many people find it difficult to get clear skin. The methods
                  for getting clear skin will vary
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="logo-group ">
        <div className="container-column-logo">
          <div className="row gx-5 col-overlay-logo">
            <div className="col vh-100 ">
              <div className="inner-col-logo"></div>
            </div>
            <div className="col vh-100 ">
              <div className="inner-col-logo"></div>
            </div>
            <div className="col vh-100 ">
              <div className="inner-col-logo"></div>
            </div>
            <div className="col vh-100 ">
              <div className="inner-col-logo"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid">
              <div className="inner-col-logo"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid   ">
              <div className="inner-col-logo"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid  ">
              <div className="inner-col-logo"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid  ">
              <div className="inner-col-logo"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid  ">
              <div className="inner-col-logo"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid  ">
              <div className="inner-col-logo"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid  ">
              <div className="inner-col-logo"></div>
            </div>
            <div className="col vh-100 d-none d-md-grid  ">
              <div className="inner-col-logo"></div>
            </div>
          </div>
        </div>
        <div className="row  gx-5  py-3">
          <div className="col-6 text-center mb-5 mb-md-0 col-md-3 ">
            <div className="d-flex align-items-center justify-content-center">
              <div className="logo-img">
                <div>
                  <img
                    src="http://server.test/uploads/rabbit.png"
                    alt="rabbit"
                  />
                </div>
              </div>
              <span className="logo-text">No tests on animals</span>
            </div>
          </div>
          <div className="col-6 text-center mb-5 mb-md-0 col-md-3 ">
            <div className="d-flex align-items-center justify-content-center">
              <div className="logo-img">
                <div>
                  <img src="http://server.test/uploads/leaf.png" alt="leaf" />
                </div>
              </div>
              <span className="logo-text">No animal-derived ingredients</span>
            </div>
          </div>
          <div className="col-6 text-center  col-md-3 ">
            <div className="d-flex align-items-center justify-content-center">
              <div className="logo-img">
                <div>
                  <img src="http://server.test/uploads/wheat.png" alt="wheat" />
                </div>
              </div>
              <span className="logo-text">No gluten, or gluten byproducts</span>
            </div>
          </div>
          <div className="col-6 text-center  col-md-3 ">
            <div className="d-flex align-items-center justify-content-center">
              <div className="logo-img">
                <div>
                  <img src="http://server.test/uploads/lamp.png" alt="lamp" />
                </div>
              </div>
              <span className="logo-text">Recyclable packaging</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
