import './index.css'

const RepositoryItem = props => {
  const {details} = props

  return (
    <li className="repositoryitemclass">
      <img
        src={details.avatar_url}
        className="avatarclass"
        alt={details.name}
      />
      <h1>{details.name}</h1>
      <div className="iconsdiv">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icons"
        />
        <p>{details.stars_count}</p>
      </div>
      <div className="iconsdiv">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icons"
        />
        <p>{details.forks_count}</p>
      </div>
      <div className="iconsdiv">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icons"
        />
        <p>{details.issues_count}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
