// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <div className="nxtlogodiv">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="waveimage"
        alt="wave"
      />
      <p>Wave</p>
    </div>
    <ul className="buttons">
      <li>
        <Link className="btn" to="/">
          Home
        </Link>
      </li>

      <li>
        <Link className="btn" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="btn" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
