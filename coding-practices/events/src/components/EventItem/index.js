import './index.css'

const EventItem = props => {
  const {details} = props
  const {clickedListItem} = props
  const onClickListItem = () => {
    clickedListItem(details.id, details.registrationStatus)
  }

  return (
    <li className="liclass" onClick={onClickListItem}>
      <button type="button">
        <img src={details.imageUrl} className="liImage" alt="event" />
        <p>{details.name}</p>
        <p>{details.location}</p>
      </button>
    </li>
  )
}

export default EventItem
