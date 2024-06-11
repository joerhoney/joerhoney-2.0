import React from "react";
// Components
// import { SEO } from "@components/seo";
// Layouts
import Footer from "./Footer";
import Nav from "./Nav";
import NavIndicator from "./NavIndicator";
import Scheme from "./Scheme";
// CSS
import "@css/buttons.css";
import "@css/colors-default.css";
import "@css/global.css";
import "@css/hero.scss";
import "@css/units.css";

const Page = ({ children, className, nav, navItems, scheme }) => {
  return (
    <>
      <main className={className}>
        {scheme !== false && <Scheme />}
        {nav !== false && <Nav items={navItems} />}
        <NavIndicator />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Page;

// export const Head = () => (
//   <>
//     <noscript>
//       <style>
//         {`.nav {
//   position: static;
// }
// .nav ul::before {
//   content: none;
// }
// `}
//       </style>
//     </noscript>
//     <body className="colors-default" />
//   </>
// );
