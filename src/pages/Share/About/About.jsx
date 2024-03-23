import React from "react";
import "./about.scss";
export default function About() {
  return (
    <div class="about">
      <div class="container-overlay-mobile">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div class="container-overlay-desktop">
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
      <div class="container p-0">
        <main>
          <section class="our-brand">
            <div class="our-brand-container">
              <h1>Our Brand</h1>
              <div class="our-brand-img">
                <img
                  src="http://server.test/uploads/Rectangle 12334.png"
                  alt="about-us"
                />
              </div>
              <p>
                We believe that beauty thrives in diversity and discovery. Our
                purpose is to expand the way the world sees beauty by empowering
                the ExtraOrdinary in each of us.
              </p>
            </div>
          </section>
          <section class="our-brand-desc">
            <div class="heritage">
              <h3>Heritage</h3>
              <div class="heritage-container">
                <p>
                  From the very beginning, our founder believed that Beautya
                  could not only disrupt beauty retail, but that it would have a
                  positive impact on the world. Our story began in 2015 when our
                  founder, Jane, realized that there were very few cosmetic
                  brands that catered to her skin type. She started
                  experimenting with different ingredients and formulations in
                  her kitchen, and soon her friends and family were raving about
                  her products. Encouraged by their feedback, Jane decided to
                  turn her hobby into a business. Today, our team of experts
                  works hard to create cosmetics that are not only effective but
                  also sustainable and ethical.
                </p>
                <div class="heritage-img">
                  <img
                    src="http://server.test/uploads/Frame 26085546.png"
                    alt="woman"
                  />
                </div>
              </div>
            </div>
            <div class="our-brand-desc-item">
              <h3>Ethical and Sustainable Beauty:</h3>
              <p>
                At Beautya cosmetic company , we believe that beauty should
                never come at the expense of animals, the environment, or our
                customers' health. That's why we've made sure that our products
                are vegan, curl-free, gluten-free, and packaged in recycled
                materials
              </p>
            </div>
            <div class="our-brand-desc-item">
              <h3>Vegan, Curl-Free</h3>
              <p>
                When we say our products are vegan, we mean that we never use
                any animal-derived ingredients or byproducts in our
                formulations. We believe that cruelty-free beauty is the way of
                the future, and we're proud to be a part of that movement.
              </p>
            </div>
            <div class="our-brand-desc-item">
              <h3>Gluten-Free Products</h3>
              <p>
                For those with sensitivities or allergies to gluten, we've made
                sure that our products are 100% gluten-free. You can use our
                products with confidence, knowing that they are safe and gentle
                on your skin.
              </p>
            </div>
            <div class="our-brand-desc-item">
              <h3>Recycled Packaging</h3>
              <p>
                Finally, we're committed to doing our part for the environment,
                which is why we've packaged our products in recycled materials.
                By choosing our products, you're making a positive impact on the
                planet and reducing your environmental footprint. We're
                dedicated to providing you with high-quality, ethically-sourced
                beauty solutions that you can feel good about using.
              </p>
            </div>
          </section>
          <section class="options">
            <div class="container-overlay-mobile-about">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="container-overlay-desktop-about">
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
            <div class="options-container-row w-100  row">
              <div class="text-center d-flex justify-content-center align-items-center py-4 col-3">
                <div class="option-item-overlay"></div>
                <div class="options-item-img">
                  <div>
                    <img
                      src="http://server.test/uploads/rabbit.png"
                      alt="rabbit"
                    />
                  </div>
                </div>
                <span class="options-item-text">No tests on animals</span>
              </div>
              <div class="text-center d-flex justify-content-center align-items-center py-4 col-3">
                <div class="options-item-img">
                  <div>
                    <img src="http://server.test/uploads/leaf.png" alt="leaf" />
                  </div>
                </div>
                <span class="options-item-text">
                  No animal-derived ingredients
                </span>
              </div>
              <div class="text-center d-flex justify-content-center align-items-center py-4 col-3">
                <div class="options-item-img">
                  <div>
                    <img
                      src="http://server.test/uploads/wheat.png"
                      alt="wheat"
                    />
                  </div>
                </div>
                <span class="options-item-text">
                  No gluten, or gluten byproducts
                </span>
              </div>
              <div class="text-center d-flex justify-content-center align-items-center py-4 col-3">
                <div class="options-item-img">
                  <div>
                    <img src="http://server.test/uploads/lamp.png" alt="lamp" />
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
