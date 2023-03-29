import './index.css'

const TabItems = props => {
  const {details1, onAddToClickeItem} = props
  const addToClikedItem = () => {
    onAddToClickeItem(details1.id)
  }

  return (
    <li onClick={addToClikedItem}>
      <button>
        <img
          src={details1.thumbnailUrl}
          className="thumbnailImage"
          alt="thumbnail"
        />
      </button>
    </li>
  )
}

export default TabItems
