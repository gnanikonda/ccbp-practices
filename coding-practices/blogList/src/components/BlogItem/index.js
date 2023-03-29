import './index.css'

const BlogItem = props => {
  const {details} = props

  return (
    <li>
      <div className="title-date">
        <h1>{details.title}</h1>
        <p>{details.publishedDate}</p>
      </div>
      <p>{details.description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
