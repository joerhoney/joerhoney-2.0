import React from "react";
import Form from "@components/Form";
import Page from "@layouts/Page";
import Profiles from "@fragments/Profiles";
/* Images */
import storeFront from "@images/heros/store-front-transparent.webp";
// import { loadStripe } from "@stripe/stripe-js";

// let stripePromise;
// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe("<YOUR STRIPE PUBLISHABLE KEY>");
//   }
//   return stripePromise;
// };

const websitePage = () => {
  return (
    <>
      <section className="hero">
        <img
          alt="Mouse clicks swarming into your store."
          loading="lazy"
          src={storeFront}
        />
        <h1>Websites</h1>
      </section>
      <Page>
        <section className="alignable compensateB" id="packages">
          <article>
            <table className="compare bottomS ">
              <tr>
                <th scope="col">
                  <h2 className="unposition">Packages</h2>
                  {/* <p>Choose the best website packages that fits you.</p> */}

                  <h4>Features</h4>
                </th>
                <th
                  class="compact"
                  scope="col"
                  aria-label="The Dirt Cheap Package"
                >
                  <div>
                    <span className="subtle">The </span>
                    <h4>Dirt Cheap </h4>
                    <span className="subtle">Package</span>
                  </div>
                </th>
                <th
                  class="compact"
                  scope="col"
                  aria-label="The U Drive Package"
                >
                  <div>
                    <span className="subtle">The </span>
                    <h4>U Drive </h4>
                    <span className="subtle">Package</span>
                  </div>
                </th>
                <th
                  class="compact"
                  scope="col"
                  aria-label="The Sell It! Package"
                >
                  <div>
                    <span className="subtle">The </span>
                    <h4>Sell it! </h4>
                    <span className="subtle">Package</span>
                  </div>
                </th>
              </tr>
              <tr className="checkmarks">
                <th scope="row">No annual hosting cost!</th>
                <td aria-label="Included">✔</td>
                <td aria-label="Not included"></td>
                <td aria-label="Not included"></td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Basic SEO</th>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">
                  <a href="#ssl">SSL Certificate</a>
                </th>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Contact form</th>
                <td aria-label="Not included"></td>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Add your own info pages</th>
                <td aria-label="Not included"></td>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Manage your own blog</th>
                <td aria-label="Not included"></td>
                <td aria-label="Included">✔</td>
                <td aria-label="Not included"></td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Manage your own products</th>
                <td aria-label="Not included"></td>
                <td aria-label="Not included"></td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">
                  <a href="#pages-added">Up to 8 info pages</a>
                </th>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">
                  <a href="#pages-added">Up to 4 products</a>
                </th>
                <td aria-label="Not included"></td>
                <td aria-label="Not included"></td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Free add-ons available</th>
                <td aria-label="Not included"></td>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Instructions for pages</th>
                <td aria-label="Not included"></td>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Instructions for products</th>
                <td aria-label="Not included"></td>
                <td aria-label="Not included"></td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Payment gateway setup</th>
                <td aria-label="Not included"></td>
                <td aria-label="Not included"></td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="checkmarks">
                <th scope="row">Additional hosting costs</th>
                <td>
                  <div className="price-plus small-text">Nope. FREE!</div>
                </td>
                <td aria-label="Included">✔</td>
                <td aria-label="Included">✔</td>
              </tr>
              <tr className="stretch">
                <th scope="row">Price</th>
                <td>
                  <h4 className="price">
                    <sup>$</sup>600
                  </h4>
                </td>
                <td>
                  <h4 className="price">
                    <sup>$</sup>1,800
                  </h4>
                </td>
                <td>
                  <h4 className="price">
                    <sup>$</sup>3,600
                  </h4>
                </td>
              </tr>
              <tr aria-hidden="true" className="association">
                <td aria-label="Intended for visual correlation only.">
                  <div className="compare-cta">
                    <div>
                      <h4>Dirt Cheap</h4>
                    </div>
                    <div className="indicator-gradient"></div>
                  </div>
                </td>
                <td
                  aria-label="Intended for visual correlation only."
                  className="indicator-corner"
                ></td>
                <td
                  aria-label="Intended for visual correlation only."
                  className="indicator-line"
                ></td>
                <td
                  aria-label="Intended for visual correlation only."
                  className="indicator-line"
                ></td>
              </tr>
              <tr aria-hidden="true" className="association">
                <td
                  aria-label="Intended for visual correlation only."
                  colSpan={2}
                >
                  <div className="compare-cta">
                    <div>
                      <h4>U Drive</h4>
                    </div>
                    <div className="indicator-gradient"></div>
                  </div>
                </td>
                <td
                  aria-label="Intended for visual correlation only."
                  className="indicator-corner"
                ></td>
                <td
                  aria-label="Intended for visual correlation only."
                  className="indicator-line"
                ></td>
              </tr>
              <tr aria-hidden="true" className="association">
                <td
                  aria-label="Intended for visual correlation only."
                  colSpan={3}
                >
                  <div className="compare-cta">
                    <div>
                      <h4>Sell It!</h4>
                    </div>
                    <div className="indicator-gradient"></div>
                  </div>
                </td>
                <td
                  aria-label="Intended for visual correlation only."
                  className="indicator-corner"
                ></td>
              </tr>
            </table>
            <div className="topXS z10" style={{ display: "inline-block" }}>
              <div className="pull tint2" style={{ display: "inline-block" }}>
                <p className="topXS">To get started:</p>
                <p>
                  <a href="#contact" className="button">
                    Contact Me
                  </a>
                </p>
              </div>
            </div>
          </article>
          <article>
            <h2 className="bottomXS">More Details</h2>
            <h4 id="hosting">Additional Hosting Costs</h4>
            <p>
              Websites have to be hosted, meaning provided to visitors by a
              server (a special kind of computer). That server must remain ON at
              all times, so someone has to pay for that. Unless you have your
              own server to host your website on, you'll probably need a hosting
              service for that.
            </p>
            <p>
              The average hosting service charges can easily range between
              $60/year to $600/year (with SSL certificate included), depending
              on the computer resources necessary to run your website.
            </p>
            <h4 id="ssl">SSL Certificates</h4>
            <p>
              An SSL certificate makes your website trustworthy with a secure
              connection. This is included free with all packages (sort of).
              Actually,
            </p>
            <h4 id="pages-added">Pages/Products Added for You</h4>
            <p>
              To get you started (put a website there) I will create a number of
              pages/products for you (as quoted above). Additional pages can be
              added to your order or purchased later, at the rate of $60 each.
            </p>
          </article>
        </section>
        <section className="alignable skew_b cta_b" id="contact">
          <article className="self-center">
            <h2>Contact Me</h2>
            <p>
              Whether you need help building something or you just want to
              connect... well I want to connect, so drop me an email!
            </p>
          </article>
          <Form className="compensateBHalf" />
        </section>
        <section className="alignable">
          <Profiles className="article reveal" />
        </section>
      </Page>
    </>
  );
};

export default websitePage;

export const Head = () => (
  <>
    <title>Website Services | :joe rhoney</title>
    <meta
      name="description"
      content="Choose one of my versatile website packages to get start your online project."
    />
    <meta property="og:keywords" content="Website Services" />
    <meta property="og:type" content="website" />
  </>
);
