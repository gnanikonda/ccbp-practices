import './index.css'

const LanguageFilterItem = props => {
  const {details, onChangeLanguage, isActive} = props

  const getclassName = () => {
    if (isActive === details.id) {
      return 'activeclass'
    }
    return 'btnclass'
  }

  const changeLanguage = () => {
    onChangeLanguage(details.id)
  }

  return (
    <>
      <li className="liclass1">
        <button className={getclassName()} onClick={changeLanguage}>
          {details.language}
        </button>
      </li>
    </>
  )
}

export default LanguageFilterItem
