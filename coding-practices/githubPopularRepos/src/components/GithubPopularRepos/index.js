import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const getStatus = {
  loading: 'Loading',
  success: 'Success',
  error: 'Failed',
}

class GithubPopularRepos extends Component {
  state = {
    repositoryItems: [],
    isActive: languageFiltersData[0].id,
    status: getStatus.loading,
  }

  componentDidMount() {
    this.getItemsdata()
  }

  onChangeLanguage = langId => {
    this.setState(
      {isActive: langId, status: getStatus.loading},
      this.getItemsdata,
    )
  }

  getItemsdata = async () => {
    const {isActive} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${isActive}`
    const response = await fetch(url)
    const data = await response.json()
    const reposList = data.popular_repos
    const camelCaseReposList = reposList.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))

    this.setState({
      repositoryItems: reposList,
      status: getStatus.success,
    })
  }

  renderItemsData = () => {
    const {repositoryItems} = this.state
    return (
      <ul className="repositoryulclass">
        {repositoryItems.map(each => (
          <RepositoryItem details={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div className="faildiv">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failedImage"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  getLoader = () => (
    <Loader
      data-testid="loader"
      type="ThreeDots"
      color="#0284c7"
      height={80}
      width={80}
    />
  )

  getResponsiveView = () => {
    const {status} = this.state
    switch (status) {
      case getStatus.loading:
        return this.getLoader()
      case getStatus.success:
        return this.renderItemsData()
      case getStatus.error:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {repositoryItems, isActive, status} = this.state
    return (
      <div className="maindiv">
        <div className="populardiv">
          <h1>Popular</h1>
          <ul className="ulclass">
            {languageFiltersData.map(each => (
              <LanguageFilterItem
                onChangeLanguage={this.onChangeLanguage}
                details={each}
                key={each.id}
                isActive={isActive}
              />
            ))}
          </ul>
        </div>
        <div>{this.getResponsiveView()}</div>
      </div>
    )
  }
}

export default GithubPopularRepos
