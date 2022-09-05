import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const _Navbar = ({handleClick, isLoggedIn, isAdmin}) => (
  <div>
     <Navbar bg="primary" variant="dark">
      {
        isLoggedIn ? (
        <Container>
          <Navbar.Brand href="home">Breakaway Basketball </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="allPlayers">Find Player</Nav.Link>
            <Nav.Link href="account">Account</Nav.Link>
            {
              isAdmin ? (
                <Nav.Link href="createClass">Create Class </Nav.Link>
              ):null
            }
            <Nav.Link href='' onClick={handleClick}> Logout </Nav.Link>
          </Nav>
        </Container>

        ):
        (
          <div>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link to="signup">Sign Up</Nav.Link>
          </div>
        )
      }
      </Navbar>
  
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(_Navbar)



// <h1> Breakaway Basketball </h1>
// <nav>
//   {isLoggedIn ? (
//     <div>
//       {/* The navbar will show these links after you log in */}
//       <Link to="/home">Home</Link>
//       <Link to="/account"> Account </Link>
//       <Link to="/allPlayers"> Players </Link>
//       {
//         isAdmin ? (
//           <Fragment>
//              <Link to="/createClass"> Create Class </Link>
//           </Fragment>
//         ): null
//       }

    

      // <a href="#" onClick={handleClick}>
      //   Logout
      // </a>
//     </div>
  // ) : (
  //   <div>
  //     {/* The navbar will show these links before you log in */}
  //     <Link to="/login">Login</Link>
  //     <Link to="/signup">Sign Up</Link>
  //   </div>
  // )}
// </nav>
// <hr />