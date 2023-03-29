import './index.css'

const CryptocurrencyItem = props => {
  const {details, key} = props

  return (
    <li className="liclass1">
      <div className="logodiv">
        <img
          src={details.currencyLogo}
          alt={details.currencyName}
          className="logoImg"
        />
        <p>{details.currencyName}</p>
      </div>
      <div className="america">
        <p className="usd1">{details.usdValue}</p>
        <p>{details.euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
