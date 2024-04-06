import React, { useEffect, useRef, useState } from "react";
import "./containerhome.scss";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import { getBlogs } from "../../../utils/api";
import Slide from "../../../components/Share/Slide/Slide";
export default function ContainerHome() {
  const sliderBlogRef = useRef(null);
  const sliderBestSellersRef = useRef(null);
  const sliderNewIn = useRef(null);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(fetchBlogs, 20);
    return () => clearTimeout(timeout);
  }, []);

  async function fetchBlogs() {
    const result = await getBlogs(1, 1000);
    console.log(result);
    if (result.success) {
      setError(false);
      setBlogs(result.body);
    } else {
      setError({ message: result.error });
    }
    setIsLoading(false);
  }
  const settingBlog = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 20,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settingBestSellers = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 20,
  };
  const settingNewIn = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 20,
  };
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
      <Helmet>
        <title>Home</title>
      </Helmet>
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
        <button className="poster-btn" onClick={() => navigate("blogs")}>
          Know more
        </button>
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
          <button
            className="prodcuts-desc-brand-btn"
            onClick={() => navigate("/blogs")}
          >
            Discover More
          </button>
        </div>
      </section>
      <section className="container p-0 bestSeller">
        <h2 className="products-title text-center">Our Best Sellers</h2>
        <div className="d-none d-md-flex justify-content-between align-items-center">
          <div className="row ">
            {bestSellers.map((p) => {
              return (
                <div
                  className=" col-md-6 col-lg-3  bestSellers-product mb-5"
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
        <Slider
          {...settingBestSellers}
          className="d-md-none"
          ref={sliderBestSellersRef}
        >
          {bestSellers.map((p) => {
            return (
              <Slide key={p.id}>
                <div className=" bestSellers-product mb-5 mx-3">
                  <div className="border border-1 bestSellers-product-container d-flex flex-column justify-content-center align-items-center">
                    <div className="bestSellers-product-img text-center w-100">
                      <img src={p.image} alt="product" className="mx-auto" />
                    </div>
                    <h3 className="bestSellers-product-title mt-4 text-center">
                      {p.title}
                    </h3>
                    <div className="text-center mt-auto pb-4">
                      <p className="bestSellers-product-desc">{p.desc}</p>
                      <span className="bestSellers-product-price">
                        $ {p.price}.00
                      </span>
                    </div>
                  </div>
                </div>
              </Slide>
            );
          })}
        </Slider>
      </section>
      <section className="newIn">
        <h2 className="newIn-title  text-center text-white d-none d-md-block">
          New In
        </h2>
        <div className="newIn-body">
          <div className="row gx-5 d-none d-md-flex">
            <div className=" col-12 col-md-6 text-center firstSlide py-5 py-md-0 ">
              <div className="h-100  ">
                <h2 className="newIn-title  text-center text-white d-md-none mb-4">
                  New In
                </h2>
                <div className="newIn-firstSlide-img mb-5">
                  <img src="./public/images/faces/woman.png" alt="woman" />
                </div>
                <div className="newIn-firstSlide">
                  <h3 className="newIn-firstSlide-title fs-2">
                    Beautya La Mousse Off/On Foaming Cleaner
                  </h3>
                  <p className="newIn-firstSlide-desc text-white fs-4">
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
                    <div className="h-100 border border-1 product-inner py-5">
                      <div className="newIn-product-img text-center ">
                        <img
                          src="./public/images/newIn/product image.png"
                          alt="product1"
                        />
                      </div>
                      <div className="newIn-product-desc text-center text-md-start px-3 py-3 ">
                        <h3 className="newIn-product-desc-title  ">
                          Beautya Capture Total Dreamskin Care & Perfect
                        </h3>
                        <p className="newIn-firstSlide-desc fs-5 ">
                          Plumping Gloss - Instant and Long-Term Volume Effect -
                          24h Hydration
                        </p>
                        <span className="newIn-price fs-3">$76.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="newIn-product col-12 col-md-6 my-5 mt-md-0">
                    <div className="h-100 product-inner border border-1 py-5">
                      <div className="newIn-product-img text-center ">
                        <img
                          src="./public/images/newIn/product image2.png"
                          alt="product1"
                        />
                      </div>
                      <div className="newIn-product-desc text-center text-md-start px-3 py-3">
                        <h3 className="newIn-product-desc-title  ">
                          Beautya Capture Total Dreamskin Care & Perfect
                        </h3>
                        <p className="newIn-firstSlide-desc fs-5 ">
                          Plumping Gloss - Instant and Long-Term Volume Effect -
                          24h Hydration
                        </p>
                        <span className="newIn-price fs-3">$70.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Slider {...settingNewIn}>
          <Slide className="firstSlide">
            <h2 className="newIn-title  text-center text-white mb-4">New In</h2>
            {/* <div className="newIn-firstSlide-imgb mb-5">
              <img src="./public/images/faces/woman.png" alt="woman" width={100}/>
            </div> */}
            <div className="">
              <h3 className=" fs-2">
                Beautya La Mousse Off/On Foaming Cleaner
              </h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis en im velit mollit.
              </p>
            </div>
          </Slide>
          <Slide>
            <h1>1a1b1</h1>
          </Slide>
          <Slide>
            <h1>1a1b1</h1>
          </Slide>
        </Slider>
      </section>
      <section className="offer ">
        <h2 className="offer-title  text-center d-md-none">Special offers</h2>

        <div className="row gx-5  m-0 d-md-flex flex-md-row align-items-md-center">
          <div className="col-12 col-md-6 p-0">
            <div className="h-100">
              <div className="offer-img ">
                <img src="./public/images/offer-desktop.png" alt="offer" />
              </div>
            </div>
          </div>
          <div className="col-12  col-md-6 p-0">
            <div className="offer-body h-100 ps-md-5 ">
              <h4 className="offer-body-title-desktop d-none d-md-block">
                Special offers
              </h4>
              <h3 className="offer-body-title2 mt-4 mt-md-0 fs-1">
                Save up to 50%
              </h3>
              <p className="offer-body-desc1 ">
                Mother’s Day is coming! For everything she’s given you, it's
                time to give back. Shower her with love, happiness, and the best
                of Beautya.
              </p>
              <p className="offer-body-desc2">
                visit your local beautya branches to find out more about our
                special offers in make up and skincare products.
              </p>
              <button className="offer-body-btn py-2 ">find branches</button>
            </div>
          </div>
        </div>
      </section>

      <section className="analysis mb-5">
        <div className="row mx-0 d-md-flex flex-md-row-reverse ">
          <div className="col-12 col-md-6 p-0">
            <div className="h-100">
              <h2 className="analysis-title-mobile d-md-none text-center mb-5">
                NEW Virtual Skincare Analysis
              </h2>
              <div className="analysis-img">
                <img
                  src="./public/images/faces/faces-desktop.png"
                  alt="faces"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 analysis-body-col">
            <div className="h-100">
              <div className="analysis-body py-5 py-md-3 py-lg-3 ps-lg-3">
                <h2 className="analysis-body-title d-none d-md-block ">
                  NEW Virtual Skincare Analysis
                </h2>
                <p className="analysis-body-desc mb-md-0 mb-lg-3">
                  Looking for a full skincare routine? Our NEW Virtual Skincare
                  Analysis Tool evaluates your skin and provides the most
                  personalized recommendations.
                </p>
                <div className="analysis-body-info">
                  <button className="analysis-body-infoBtn">
                    <Link href="#" className="analysisBtn">
                      answer the Questionnaire
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog">
        <h2 className="blog-title mt-0  text-center mb-5 fs-1">Our Blog</h2>
        <div className="blog-container">
          <Slider {...settingBlog} ref={sliderBlogRef}>
            {blogs.map((blog) => {
              return (
                <Slide key={blog.id}>
                  <div className="mx-5" onClick={() => navigate("blogs")}>
                    <div className=" blog-col border border-1 d-flex flex-column justify-content-center align-items-center">
                      <div className="blog-overlay"></div>
                      <div className="text-center blog-item">
                        <div className="blog-img mt-0">
                          <img src={SERVER_URL + blog.image} alt="blog-image" />
                        </div>
                        <div className="blog-body ">
                          <h3 className="blog-body-title mt-5 mb-3 ">
                            {blog.title}
                          </h3>
                          <div className="blog-info d-flex justify-content-around align-items-center">
                            <span className="blog-info-detail">
                              {blog.slug}
                            </span>
                            <span className="blog-info-dash"></span>
                            <span className="blog-info-detail">
                              Dr. Wade Warren
                            </span>
                            <span className="blog-info-dash"></span>
                            <span className="blog-info-detail">
                              Jan 20, 2021
                            </span>
                          </div>
                          <p className="blog-desc">
                            {blog.description.substring(0, 120)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </Slider>
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

{
  /* <div className="row gx-5 ">
            <div
              className=" col-12 col-md-4 mb-5  "
              onClick={() => navigate("blogs")}
            >
              <div className="h-100 blog-col border border-1 d-flex flex-column justify-content-center align-items-center">
                <div className="blog-overlay"></div>
                <div className="text-center blog-item">
                  <div className="blog-img mt-0">
                    <img
                      src="./public/images/blogs/blog image1.png"
                      alt="blog-image"
                    />
                  </div>
                  <div className="blog-body ">
                    <h3 className="blog-body-title mt-5 mb-3 ">
                      How to get clear skin fast
                    </h3>
                    <div className="blog-info d-flex justify-content-around align-items-center">
                      <span className="blog-info-detail">Skincare</span>
                      <span className="blog-info-dash"></span>
                      <span className="blog-info-detail">Dr. Wade Warren</span>
                      <span className="blog-info-dash"></span>
                      <span className="blog-info-detail">Jan 20, 2021</span>
                    </div>
                    <p className="blog-desc">
                      Many people find it difficult to get clear skin. The
                      methods for getting clear skin will vary
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" col-12 col-md-4 mb-5 "
              onClick={() => navigate("blogs")}
            >
              <div className="h-100 blog-col border border-1 d-flex flex-column justify-content-center align-items-center">
                <div className="blog-overlay"></div>

                <div className="text-center blog-item">
                  <div className="blog-img mt-0">
                    <img
                      src="./public/images/blogs/blog image2.png"
                      alt="blog-image"
                    />
                  </div>
                  <div className="blog-body ">
                    <h3 className="blog-body-title mt-5 mb-3 ">
                      How to get clear skin fast
                    </h3>
                    <div className="blog-info d-flex justify-content-around align-items-center">
                      <span className="blog-info-detail">Skincare</span>
                      <span className="blog-info-dash"></span>
                      <span className="blog-info-detail">Dr. Wade Warren</span>
                      <span className="blog-info-dash"></span>
                      <span className="blog-info-detail">Jan 20, 2021</span>
                    </div>
                    <p className="blog-desc">
                      Many people find it difficult to get clear skin. The
                      methods for getting clear skin will vary
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" col-12 col-md-4 mb-5 "
              onClick={() => navigate("blogs")}
            >
              <div className="h-100 blog-col border border-1 d-flex flex-column justify-content-center align-items-center">
                <div className="blog-overlay"></div>

                <div className="text-center blog-item">
                  <div className="blog-img mt-0">
                    <img
                      src="./public/images/blogs/blog image3.png"
                      alt="blog-image"
                    />
                  </div>
                  <div className="blog-body ">
                    <h3 className="blog-body-title mt-5 mb-3 ">
                      How to get clear skin fast
                    </h3>
                    <div className="blog-info d-flex justify-content-around align-items-center">
                      <span className="blog-info-detail">Skincare</span>
                      <span className="blog-info-dash"></span>
                      <span className="blog-info-detail">Dr. Wade Warren</span>
                      <span className="blog-info-dash"></span>
                      <span className="blog-info-detail">Jan 20, 2021</span>
                    </div>
                    <p className="blog-desc">
                      Many people find it difficult to get clear skin. The
                      methods for getting clear skin will vary
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */
}

// <div className="row gx-5 ">
//             {blogs.map((blog) => {
//               return (
//                 <div
//                   className=" col-12 col-md-4 mb-5  "
//                   key={blog.id}
//                   onClick={() => navigate("blogs")}
//                 >
//                   <div className="h-100 blog-col border border-1 d-flex flex-column justify-content-center align-items-center">
//                     <div className="blog-overlay"></div>
//                     <div className="text-center blog-item">
//                       <div className="blog-img mt-0">
//                         <img src={SERVER_URL + blog.image} alt="blog-image" />
//                       </div>
//                       <div className="blog-body ">
//                         <h3 className="blog-body-title mt-5 mb-3 ">
//                           {blog.title}
//                         </h3>
//                         <div className="blog-info d-flex justify-content-around align-items-center">
//                           <span className="blog-info-detail">{blog.slug}</span>
//                           <span className="blog-info-dash"></span>
//                           <span className="blog-info-detail">
//                             Dr. Wade Warren
//                           </span>
//                           <span className="blog-info-dash"></span>
//                           <span className="blog-info-detail">Jan 20, 2021</span>
//                         </div>
//                         <p className="blog-desc">
//                           {blog.description.substring(0, 120)}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
