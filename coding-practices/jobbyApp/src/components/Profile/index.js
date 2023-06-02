import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import './index.css'

const apiStatusProfile = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Profile extends Component {
  state = {
    isRunning: true,
    profileDetails: [],
    profileStatus: apiStatusProfile.initial,
  }

  componentDidMount() {
    this.getUserProfile()
  }

  getUserProfile = async () => {
    this.setState({profileStatus: apiStatusProfile.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    const data = await response.json()
    const profiledetails = data.profile_details

    if (response.ok === true) {
      const fetchedData = {
        name: profiledetails.name,
        profileImageUrl: profiledetails.profile_image_url,
        shortBio: profiledetails.short_bio,
      }

      this.setState({
        profileDetails: fetchedData,
        profileStatus: apiStatusProfile.success,
      })
    } else {
      this.setState({profileStatus: apiStatusProfile.failure})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderProfile = () => {
    const {profileDetails} = this.state

    return (
      <div className="profileBG">
        <img
          src={profileDetails.profileImageUrl}
          className="profileImageClass"
        />
        <h1>{profileDetails.name}</h1>
        <p>{profileDetails.shortBio}</p>
      </div>
    )
  }

  onretryBtn = () => {
    this.getUserProfile()
  }

  profileFailureView = () => (
    <div className="pfaildiv">
      <button className="pfail" onClick={this.onretryBtn}>
        Retry
      </button>
    </div>
  )

  renderSwitchProfile = () => {
    const {profileStatus} = this.state

    switch (profileStatus) {
      case apiStatusProfile.success:
        return this.renderProfile()
      case apiStatusProfile.failure:
        return this.profileFailureView()
      case apiStatusProfile.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {profileStatus, profileDetails} = this.state

    return <>{this.renderSwitchProfile()}</>
  }
}

export default Profile
