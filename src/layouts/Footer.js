import React from "react";
// Components
import { graphql, useStaticQuery } from "gatsby";
// CSS
import "@css/footer.css";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);
  return (
    <footer>
      <div>
        <p className="copyright">
          &copy;{new Date().getFullYear()} {data.site.siteMetadata.copyright}
          <br />
          Proudly built with Gatsby.
        </p>
      </div>
    </footer>
  );
};

export default Footer;