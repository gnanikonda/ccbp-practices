import './index.css'

const Header = () => (
  <>
    <ul className="nav-btns">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          className="btns"
          alt="nav home"
        />
        <p className="para2">Home</p>
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          className="btns"
          alt="nav products"
        />
        <p className="para2">Products</p>
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          className="btns"
          alt="nav cart"
        />
        <p className="para2">Cart</p>
      </li>
      <button className="logout">Logout</button>
    </ul>
  </>
)

export default Header
