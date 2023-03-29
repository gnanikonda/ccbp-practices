import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {}

  render() {
    return (
      <div className="homemaindiv">
        <div className="logoutdiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
            className="loginclass1"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="backicon"
          />
        </div>
        <Header />
        <div className="clothesWeardiv">
          <h1 className="clothsHeading">Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
            alt="clothes that get you noticed"
            className="clothesImg"
          />
          <p className="clothesdesc">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button className="shopBtn">Shop Now</button>
        </div>
      </div>
    )
  }
}

export default Home
