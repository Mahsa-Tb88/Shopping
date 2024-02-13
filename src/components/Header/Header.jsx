import React from "react";
import "./header.scss";
import { IoMdMoon } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className=" d-flex justify-content-between align-items-center header">
      <div>
        <Link to="/">
          <img href="logo" className="logo" src="./public/images/logo.png" />
        </Link>
      </div>
      <nav className="navBar ">
        <NavLink className="navlink">Home</NavLink>
        <NavLink className="navlink">Woman Skincare</NavLink>
        <NavLink className="navlink">Blog</NavLink>
        <NavLink className="navlink">About us</NavLink>
        <NavLink className="navlink">Contact us</NavLink>
      </nav>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-mood d-flex justify-content-center align-items-center p-1">
          <IoMdMoon />
        </button>
        <button className="btns btn-signIn px-3 py-2 ">Sign in</button>
        <button className="btns btn-signUp mx-3 px-3 py-2">Sign up</button>
      </div>
    </div>
  );
}

// <div className="mybody">
//       <div className="container-overlay-mobile">
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>4</div>
//       </div>
//       <div className="container-overlay-desktop">
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>4</div>
//         <div>5</div>
//         <div>6</div>
//         <div>7</div>
//         <div>8</div>
//         <div>9</div>
//         <div>10</div>
//         <div>11</div>
//         <div>12</div>
//       </div>
//       <div className="container">
//         <header>
//           <nav className="navbar">
//             {/*    <!-- logo desktop --> */}
//             <div className="navbar-logo-desktop">
//               <a href="/">
//                 <img src="/public/images/logo.png" alt="logo" />
//               </a>
//             </div>
//             {/*     <!-- toggler and searchIcon mobile --> */}
//             <div className="navbar-toggler-serch">
//               {/* <!-- menu toggler mobile --> */}
//               <div className="navbar_toggler">
//                 <div className="bar bar-one"></div>
//                 <div className="bar bar-two"></div>
//                 <div className="bar bar-three"></div>
//               </div>
//               {/*  <!-- search magnifying glass mobile --> */}

//               <span className="icons-magnifying-glass-mobile">
//                 <i className="fa-solid fa-magnifying-glass fa-lg"></i>
//               </span>
//             </div>

//             {/* <!-- logo mobile --> */}
//             <div className="navbar-logo-mobile">
//               <a href="/">
//                 <img src="/public/images/logo.png" alt="logo" />
//               </a>
//             </div>
//             {/*  <!-- menu desktop-mobile --> */}
//             <ul className="navbar-menu navbar-menu-hidden">
//               <li>
//                 <a href="index.html">Home</a>
//               </li>

//               <li className="woman-skincare">
//                 <a href="#" className="navbar-title">
//                   Woman Skincare
//                 </a>
//                 <ul className="woman-skincare-item">
//                   <li>
//                     <a href="./face-sunscreen.html">Face Sunscreen</a>
//                   </li>
//                   <li>
//                     <a href="./cleaners.html">Cleansers</a>
//                   </li>
//                   <li className="woman-skincare-item-li">
//                     <a className="item-chevron" href="#">
//                       <span>Treatments</span>
//                       <span>
//                         <i className="fa-solid fa-circle-chevron-right"></i>
//                       </span>
//                     </a>
//                     <ul className="inner-item">
//                       <li>
//                         <a href="./face-serum.html">Face serum</a>
//                       </li>
//                       <li>
//                         <a href="./face-mask.html">Face mask</a>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="./blog.html">Blog</a>
//               </li>

//               <li>
//                 <a href="./about-us.html">About Us</a>
//               </li>
//               <li>
//                 <a href="./contact-us.html">Contact us</a>
//               </li>
//             </ul>
//             {/* <!-- icons desktop --> */}
//             <div className="navbar-icons">
//               <input className="navbar-icons-search" />
//               <span className="icons-magnifying-glass-desktop">
//                 <i className="fa-solid fa-magnifying-glass fa-lg"></i>
//               </span>
//               <span className="navbar-icons-line"></span>
//               <span>
//                 <i className="fa-solid fa-location-dot fa-lg"></i>
//               </span>
//               <div>
//                 <span className="icon-us">us</span>
//                 <small className="icon-en">(EN)</small>
//               </div>
//             </div>
//           </nav>
//           <div className="poster">
//             <h1 className="poster-title">Unlock Your Natural Glow</h1>
//             <button className="poster-btn">Know more</button>
//           </div>
//         </header>
//       </div>
//     </div>
