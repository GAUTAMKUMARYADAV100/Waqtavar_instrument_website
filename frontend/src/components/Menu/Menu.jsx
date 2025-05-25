// import React from 'react';
// import { data, images } from '../../constants';
// import { Container, Nav, Navbar } from "react-bootstrap";

// import './Menu.css';



// const Menu = () => {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//       <Container>
//         <Navbar.Brand href="#home">
//           <img src={images.logo} alt="logo" height="40" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
//           <Nav>
//             {data.Menu.map((item, index) => (
//               <Nav.Link key={index} href={item.link}>
//                 {item.text}
//               </Nav.Link>
//             ))}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Menu;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { data, images } from '../../constants';
import { Container, Nav, Navbar } from "react-bootstrap";

import './Menu.css';

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src={images.logo} alt="logo" className="navbar-logo" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            {data.Menu.map((item, index) => (
              <NavLink key={index} to={item.link} className="nav-link">
                {item.text}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

