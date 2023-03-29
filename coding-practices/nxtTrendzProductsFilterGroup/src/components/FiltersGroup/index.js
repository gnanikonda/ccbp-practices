import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onChangeInputField,
    titleSearch,
    clearEveryThing,
    submitInput,
  } = props
  // console.log(titleSearch)

  const clearFilters = () => {
    clearEveryThing()
  }

  const changeInput = event => {
    const a = event.target.value
    onChangeInputField(a)
  }

  const keyDownEnter = event => {
    if (event.key === 'Enter') {
      submitInput()
    }
  }

  const getCategoryList = () =>
    categoryOptions.map(a => {
      const {onClickCategory} = props
      const getCategory = () => onClickCategory(a.categoryId)

      return (
        <li
          key={a.categoryId}
          className="categorylistclass"
          onClick={getCategory}
        >
          <p>{a.name}</p>
        </li>
      )
    })

  const renderRatingList = () => (
    <>
      <h1>Rating</h1>
      <ul className="ratinguldiv">
        {ratingsList.map(b => {
          const {onClickRating} = props

          const getRating = () => onClickRating(b.ratingId)

          return (
            <li
              key={b.ratingId}
              className="ratinglistclass"
              onClick={getRating}
            >
              <img
                src={b.imageUrl}
                className="ratingimg"
                alt={`rating ${b.ratingId}`}
              />
              <p className="upclass">&UP</p>
            </li>
          )
        })}
      </ul>
    </>
  )

  const renderCategory = () => (
    // const {categoryOptions} = props
    <div className="itemsdiv">
      <h1>Category</h1>
      <ul className="ullistclass">{getCategoryList()}</ul>
    </div>
  )

  return (
    <div className="filters-group-container">
      <div className="searchDiv">
        <input
          type="search"
          className="searchInput"
          placeholder="Search"
          onChange={changeInput}
          onKeyDown={keyDownEnter}
          value={titleSearch}
        />
        <BsSearch className="searchicon" />
      </div>
      {renderCategory()}
      {renderRatingList()}
      <div>
        <button className="clearBtn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
