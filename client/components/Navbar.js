import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {logout} from '../store'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const _Navbar = ({handleClick, isLoggedIn, isAdmin, auth}) => (
  <div>
     <Navbar bg="primary" variant="dark">
      {
        auth.id ? (
        <Container>
         
          <Nav className="me-auto">
            <Link className='navLinks' to={"/home"}>Home</Link>
            <Link className='navLinks' to={"/allPlayers"}>Find Player</Link>
            <Link className='navLinks' to={"/account"}>Account</Link>
            {
             auth.isAdmin ? (
                <Link className='navLinks' to={"/createClass"}>Create Class </Link>
              ):null
            }
            <Link className='navLinks' to={'/'} onClick={handleClick}> Logout </Link>
          </Nav>
        </Container>

        ):
        (
          <div>
            <Link className='navLinks' to={"/login"}>Login</Link>
            <Link className='navLinks' to={"/signup"}>Sign Up</Link>
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
    isAdmin: state.auth.isAdmin,
    auth:state.auth
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