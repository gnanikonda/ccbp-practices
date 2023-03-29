import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isError: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccessSubmit = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitBtn = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const newuser = {username, password}

    const path = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(newuser),
    }

    const response = await fetch(path, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessSubmit()
    } else {
      this.setState({errorMsg: data.error_msg, isError: true})
    }
  }

  render() {
    const {username, password, errorMsg, isError} = this.state

    return (
      <div className="loginmaincontainer">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
            className="loginclass"
          />
        </div>
        <div className="div3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="loginbigimg"
          />
        </div>
        <form className="formclass" onSubmit={this.onSubmitBtn}>
          <div className="usrdiv">
            <label htmlFor="inputId"> USERNAME</label>
            <input
              type="text"
              id="inputId"
              placeholder="Username"
              className="inputclass"
              onChange={this.onChangeUserName}
              value={username}
            />
          </div>
          <div className="passdiv">
            <label htmlFor="passId"> PASSWORD</label>
            <input
              type="password"
              id="passId"
              className="inputclass"
              placeholder="Password"
              onChange={this.onChangePassword}
              value={password}
            />
          </div>
          <div>
            <button className="loginbtn" type="submit">
              Login
            </button>
            {isError && <p>*{errorMsg}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
