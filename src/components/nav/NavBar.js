import React, { Component } from 'react';
import { Link } from "react-router-dom" //importing link from a package we installed
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
              {/* JSX: Link = custom component --- routes to the correct section of web app  */}
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/animals">Animals</Link></li>
            <li><Link className="nav-link" to="/locations">Locations</Link></li>
            <li><Link className="nav-link" to="/employees">Employees</Link></li>
            <li><Link className="nav-link" to="/owners">Owners</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;

// In the NavBar, highlight the active section. For example, if you are viewing Animals, change the <NavBar> Animals link to lime (you could also disable the ability to click). Since the <NavBar is not part of a route, you will need to export default withRouter(NavBar) in order to have access to the router location properties. Consider how we used loadingStatus in a previous chapter.
//activeClassName="navbar__link--active"
//withRouter --- console.log (this.props) figure out what route you are