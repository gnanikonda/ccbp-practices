import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const onsuccessSubmit = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  const onloginBtn = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      onsuccessSubmit(data.jwt_token)
    }
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <>
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={onloginBtn}>
          login with sample creds
        </button>
      </div>
    </>
  )
}

export default withRouter(Login)
