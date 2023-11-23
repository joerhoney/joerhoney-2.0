import React from "react";
import { Link } from "gatsby";

const Nav = () => {
  const noscriptCSS = `
  &lt;style&gt;
    .nav {
      position: absolute;
    }
    .nav ul::before {
          left: -49px;
        rotate: 13deg;
        width: 330px;
        top: -162px;
        height: 698px;
    }
  &lt;/style&gt;`;
  return (
    <>
      <noscript>{noscriptCSS}</noscript>
      <nav className="nav">
        <Link to="/" className="logo">
          :j
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/developer">Developer</Link>
          </li>
          <li>
            <Link to="/artist">Artist</Link>
          </li>
          <li>
            <Link to="#contact" title="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

// export const Head = () => {
//   return (
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
//   );
// };
