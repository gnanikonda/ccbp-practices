import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    dummyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formatedData = data.map(a => ({
      currencyLogo: a.currency_logo,
      currencyName: a.currency_name,
      euroValue: a.euro_value,
      id: a.id,
      usdValue: a.usd_value,
    }))

    this.setState({dummyList: formatedData, isLoading: false})
  }

  render() {
    const {dummyList, isLoading} = this.state

    return (
      <div className="currencyListClass">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1>Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptoImage"
            />
            <ul className="ulclass">
              <li className="liclass">
                <div className="coinType">
                  <p>Coin</p>
                  <p>Type</p>
                </div>
                <div className="usd-euro">
                  <p className="usd">USD</p>
                  <p>EURO</p>
                </div>
              </li>
              {dummyList.map(each => (
                <CryptocurrencyItem details={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
