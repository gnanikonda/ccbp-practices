import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onclicklogut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <div>
        <button type="button" onClick={onclicklogut}>
          logout
        </button>
      </div>
    </>
  )
}

export default withRouter(LogoutButton)
