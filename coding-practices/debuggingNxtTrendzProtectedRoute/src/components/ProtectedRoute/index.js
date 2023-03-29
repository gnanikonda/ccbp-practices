/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
    // eslint-disable-next-line prettier/prettier
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
        return <Redirect to="/login" />
    }

    return <Route {...props} />
}

export default ProtectedRoute
