import './index.css'

const TabListSection = props => {
  const {details, onChangeActiveId, isActive} = props
  const activebtnclass = isActive === details.tabId ? 'activeTab' : 'btnclass'

  const changeActiveId = () => {
    onChangeActiveId(details)
  }

  return (
    <li className="liclass" onClick={changeActiveId}>
      <button className={activebtnclass} type="button">
        <p className="lipara">{details.displayText}</p>
      </button>
    </li>
  )
}

export default TabListSection
